import Main from "./components/Main";
import fuzzySearch from "./utils/fuzzySearch";
import { getSearchResults } from "./utils/rmpScraper";

export default async function Home() {

  // fuzzy search testing
  // const test = fuzzySearch('I&C SCI 6B', ['ART9A', 'ART9B', 'WRITING60', 'ICSH32', '6B']);
  // console.log(test);

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
