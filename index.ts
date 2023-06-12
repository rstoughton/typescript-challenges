// 1. Write a function called `compact` that removes all falsy values from an array
export const compact = <T>(arr: T[]) => arr.filter((item) => item)

// 2. Write function called `sumValues` to calculate the sum of all the number in an array
export const sumValues = (arr: number[]): number => {
  return arr.reduce((acc, curr) => acc + curr, 0)
}

// 3. Write a function called `chunk` that accepts an array and splits it into groups of length `size`. If the array can't be split evenly, the final chunk will be the remaining elements.

// 4. Write a function called `isPalindrome` that returns true if a string is a palindrome, and false otherwise

// 5. Write a function called `getAllKeys` that returns all the keys of a nested object

// 6. Write a class called `Calculator` with the following requirements...
//      - may optionally be initialized with a starting value, otherwise it starts with zero in the register
//      - has the ability to add, subtract, multiply, and divide
//      - calculations may be chained together (fluent API)
//      - the register can be reset to zero using a `clear` method
//      - returns the calculated result when `calculate` is called
//    Example:
//      const myCalc = new Calculator(3)
//      const result = myCalc.add(2).multiply(10).calculate()
//      console.log(result) //=> 50

/* 7. Write a function that can find the determinant of a matrix.
 *    The determinant of a 2x2 matrix is defined as:
 *
 *  |a b|
 *  |c d|  =  (a * d) - (b * c)
 *
 *    The determinant of a 3x3 matrix is defined as:
 *
 * |a b c|
 * |d e f|
 * |g h i|  =  a(ei - fh) - b(di - fg) + c(dh - eg)
 *
 * Assume the matrix will always be square (2x2, 3x3, etc.).
 */
export const determinant = (matrix: number[][]): number => {
  // Recursive base case
  if (matrix[0].length === 2)
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]

  return matrix[0].reduce((acc, curr, i) => {
    const subMatrix: number[][] = matrix
      .slice(1, matrix.length) // Leave out first row
      .map((row) => [...row.slice(0, i), ...row.slice(i + 1, row.length)]) // Leave out the current column

    const subDeterminant = curr * determinant(subMatrix) * (i % 2 ? -1 : 1)

    return acc + subDeterminant
  }, 0)
}

// 3. Write a function called `addOrRemove` that adds an item to an array if it doesn't already exist, and removes it otherwise.
//    The array can be heterogeneous, but only contain primitive values.
export const addOrRemove = <T>(item: T, arr: T[]) => {}
// 5. Write a function called `arrayDifference` that returns all the values from the first array that are not present in any of the other provided arrays
// 9. Write a function called `sleep` that awaits a given number of milliseconds before resolving
// 10. Write a function called `memoize` that memoizes a function that accepts a variable number of arguments and returns it
