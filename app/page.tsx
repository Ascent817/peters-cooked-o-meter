import Main from "./components/Main";
import fuzzySearch from "./utils/FuzzySearch";

export default async function Home() {

  const courseID: string = 'ICS 6B';
  const profName: string = 'Irene Gassko';

  const raw = JSON.stringify({
    "query": "query TeacherSearchResultsPageQuery(\n  $query: TeacherSearchQuery!\n  $schoolID: ID\n  $includeSchoolFilter: Boolean!\n) {\n  search: newSearch {\n    ...TeacherSearchPagination_search_2MvZSr\n  }\n  school: node(id: $schoolID) @include(if: $includeSchoolFilter) {\n    __typename\n    ... on School {\n      name\n      ...StickyHeaderContent_school\n    }\n    id\n  }\n}\n\nfragment CardFeedback_teacher on Teacher {\n  wouldTakeAgainPercent\n  avgDifficulty\n}\n\nfragment CardName_teacher on Teacher {\n  firstName\n  lastName\n}\n\nfragment CardSchool_teacher on Teacher {\n  department\n  school {\n    name\n    id\n  }\n}\n\nfragment CompareSchoolLink_school on School {\n  legacyId\n}\n\nfragment HeaderDescription_school on School {\n  name\n  city\n  state\n  legacyId\n  ...RateSchoolLink_school\n  ...CompareSchoolLink_school\n}\n\nfragment HeaderRateButton_school on School {\n  ...RateSchoolLink_school\n  ...CompareSchoolLink_school\n}\n\nfragment RateSchoolLink_school on School {\n  legacyId\n}\n\nfragment StickyHeaderContent_school on School {\n  name\n  ...HeaderDescription_school\n  ...HeaderRateButton_school\n}\n\nfragment TeacherBookmark_teacher on Teacher {\n  id\n  isSaved\n}\n\nfragment TeacherCard_teacher on Teacher {\n  id\n  legacyId\n  avgRating\n  numRatings\n  ...CardFeedback_teacher\n  ...CardSchool_teacher\n  ...CardName_teacher\n  ...TeacherBookmark_teacher\n}\n\nfragment TeacherSearchPagination_search_2MvZSr on newSearch {\n  teachers(query: $query, first: 5, after: \"\") {\n    didFallback\n    edges {\n      cursor\n      node {\n        ...TeacherCard_teacher\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    resultCount\n    filters {\n      field\n      options {\n        value\n        id\n      }\n    }\n  }\n}\n",
    "operationName": "TeacherSearchResultsPageQuery",
    "variables": {
      "query": {
        "text": profName,
        "schoolID": "U2Nob29sLTEwNzQ=",
        "fallback": true
      },
      "schoolID": "U2Nob29sLTEwNzQ=",
      "includeSchoolFilter": true
    }
  });

  let professorSearchResults;

  try {
    professorSearchResults = await fetch("https://www.ratemyprofessors.com/graphql", {
      method: 'POST',
      body: raw,
      redirect: 'follow'
    }).then(response => response.json());
  } catch (error) {
    console.error('error', error);
  }

  const professorID = ''; // TODO: extract professor ID from professorSearchResults

  return (
    <div>
      <Main />
    </div>
  );
}
