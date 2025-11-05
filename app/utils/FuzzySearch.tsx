export default function fuzzySearch(a: string, b: string[]): string {
  // compare by number inputted by client
  // if more than one with that number then use levenshtein
  // a is user input
  const entered = a.toUpperCase()
  // check if it is a perfect match
  for (const name of b) {
    if (entered == name) {
      return name; // eventually return the name in rmp
    }
  }
  return ' ';
}