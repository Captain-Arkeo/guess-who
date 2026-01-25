import { Character } from "../types";

//This function takes any array and the number of rows needed, creates a new array that splits the values of the first array into smaller arrays, and then returns that new array
export function splitIntoRows(startingArray: any[], nbRows: number): any[][] {
  const arrayWithRows: any[][] = [];

  for (
    let i = 0;
    i < startingArray.length;
    i += startingArray.length / nbRows
  ) {
    //Each loop, the start is the end of the previous loop
    //Since slice doesn't include the end, it means that no elements are repeated between rows
    arrayWithRows.push(
      startingArray.slice(i, i + startingArray.length / nbRows),
    );
  }
  return arrayWithRows;
}
