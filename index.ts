// Write a function called `compact` that removes all falsy values from an array
export const compact = <T>(arr: T[]) => arr.filter((val) => val)

// Write a function called `chunk` that accepts an array and splits it into groups of length `size`. If the array can't be split evenly, the final chunk will be the remaining elements.
export const chunk = <T>(arr: T[], size: number) => {
  const chunkedArr: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size)
    chunkedArr.push(chunk)
  }
  return chunkedArr
}

// Write a program to calculate the sum of all the values of an array

// Get the list of all distinct elements which are present in both list of numbers

// Return a flattened array of all the keys from a nested object
// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/objects-challenges.md#q-display-all-the-keys-and-values-of-a-nested-object
