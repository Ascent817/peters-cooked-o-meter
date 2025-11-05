import Main from "./components/Main";
import fuzzySearch from "./utils/FuzzySearch";
import { getSearchResults } from "./utils/rmpScraper";

export default async function Home() {

  const courseID: string = 'ICS 6B';
  const profName: string = 'Irene Gassko';

  const professorSearchResults = await getSearchResults(profName);

  console.log('professorSearchResults', professorSearchResults);

  const professorID = professorSearchResults[0].node?.id;
  console.log('professorID', professorID);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Main />
    </div>
  );
}
