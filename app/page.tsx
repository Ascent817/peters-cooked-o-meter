import Main from "./components/Main";
import fuzzySearch from "./utils/search";
import { getSearchResults, getProfessorDetails, getProfessorRatings } from "./utils/rmpScraper";

import { Rating, Teacher } from "./types/teacher";

export default async function Home() {

  const courseID: string = 'ICS 6B';
  const profName: string = 'Irene Gassko';

  const professorSearchResults = await getSearchResults(profName);

  const professorID = professorSearchResults[0].node?.id;
  const professorDetails: Teacher = await getProfessorDetails(professorID);

  const rmpCourseID = fuzzySearch(courseID, professorDetails.courseCodes.map((course) => course.courseName));
  const professorRatings: Rating[] = await getProfessorRatings(professorID, rmpCourseID);

  return (
    <div>
      <Main />
    </div>
  );
}
