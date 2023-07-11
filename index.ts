// 1. Write a function called `compact` that removes all falsy values from an array
export const compact = (array: any[]) => {}

// 2. Write function called `sumValues` to calculate the sum of all the number in an array
export const sumValues = (array: number[]) => {}

// 3. Write a function called `chunk` that accepts an array and splits it into groups of length `size`. If the array can't be split evenly, the final chunk will be the remaining elements.
export const chunk = (array: any[], size: number) => {}

// 4. Write a function called `isPalindrome` that returns true if a string is a palindrome, and false otherwise
export const isPalindrome = (string: string) => {}

// 5. Write a function called `getAllKeys` that returns all the keys of a nested object
export const getAllKeys = (object: object) => {}

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
export class Calculator {}

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
export const determinant = (matrix: number[][]) => {}
