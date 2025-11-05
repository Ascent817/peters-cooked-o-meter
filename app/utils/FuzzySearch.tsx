export default function fuzzySearch(a: string, b: string[]): string {
  // compare by number inputted by client
  // if more than one with that number then use levenshtein
  // a is user input
  const entered = (a.toUpperCase()).replace(/\s/g, "");
  let classNum = '';
  for (const char of entered) {
    if (/\d/.test(char)) {
      classNum = classNum + char; // getting the class number from the input (EG. 9 in ART 9A)
    }
  }

  const allNumMatches = []; // empty list to which we will append all rmp class vals that have the same class number

  for (const name of b) {
    if (entered == name) { // check if perfect match
      return name; // eventually return the name in rmp
      //console.log(name);
    }
    // if the name includes the class num, add the name to a list that we can fuzzy search later (if there are multiple)
    if (name.includes(classNum)) {
      allNumMatches.push(name);
    }
  }

  // find the levenshtein distance between the user input and each considered rmp val; smallest one is the one we want
  function levDist(userInput: string, rmpVals: string, userLen: number, rmpLen: number): number {
    // if user input is empty, return len of the next val
    if (userLen === 0) {
      return rmpLen;
    }
    // if val is empty, return len of the user input
    if (rmpLen === 0) {
      return userLen;
    }
    // if last char of both strings are same, it will go backwards
    if (userInput[userLen - 1] === rmpVals[rmpLen - 1]) {
      return levDist(userInput, rmpVals, userLen - 1, rmpLen - 1);
    }
    // calculate minimum of the 3 possible operations: insert, remove, or replace
    return 1 + Math.min(
      // insert
      levDist(userInput, rmpVals, userLen, rmpLen - 1),
      // remove
      levDist(userInput, rmpVals, userLen - 1, rmpLen),
      // replace
      levDist(userInput, rmpVals, userLen - 1, rmpLen - 1)
    );
  }

  if (allNumMatches.length > 1) {
    let smallestDist = Number.MAX_SAFE_INTEGER; // start as the biggest possible value
    let closestVal = '';
    // implement levenshtein search
    for (const val of allNumMatches) {
      const dist = levDist(entered, val, entered.length, val.length);
      if (dist < smallestDist) { // will keep track of which rmp value has the smallest lev dist from the user input
        smallestDist = dist;
        closestVal = val;
      }
    }
    return closestVal;
  }
  return allNumMatches[0];
}

// TEST LEVDIST AND FUZZY SEARCH:

//fuzzySearch('ART9A', ['ART9A', 'ICSH32', 'WRITING60']);
/*
function levDist(userInput: string, rmpVals: string, userLen: number, rmpLen: number): number {
    // if user input is empty, return len of the next val
    if (userLen === 0) {
      return rmpLen;
    }

    // if val is empty, return len of the user input
    if (rmpLen === 0) {
      return userLen;
    }

    // if last char of both strings are same, it will go backwards
    if (userInput[userLen-1] === rmpVals[rmpLen-1]) {
      return levDist(userInput, rmpVals, userLen - 1, rmpLen - 1);
    }

    // calculate minimum of the 3 possible operations: insert, remove, or replace
    return 1 + Math.min(
      // insert
      levDist(userInput, rmpVals, userLen, rmpLen-1),
      // remove
      levDist(userInput, rmpVals, userLen-1, rmpLen),
      // replace
      levDist(userInput, rmpVals, userLen-1, rmpLen-1)
    );
  }
const dist = levDist("kitten", "sitting", 6, 7);
*/