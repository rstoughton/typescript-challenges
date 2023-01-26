// 1. Write a function called `compact` that removes all falsy values from an array
export const compact = <T>(arr: T[]) => arr.filter((val) => val)

// 2. Write function called `sumValues` to calculate the sum of all the number in an array
export const sumValues = (numbers: number[]) =>
  numbers.reduce((prev, current) => prev + current, 0)

// 3. Write a function called `addOrRemove` that adds an item to an array if it doesn't already exist, and removes it if not.
// The array can be heterogeneous, but only contain primitive values.
export const addOrRemove = <T extends Array<number | string | boolean>>(
  item: T[number],
  arr: T
) => (arr.includes(item) ? arr.filter((val) => val != item) : [...arr, item])

// 4. Write a function called `chunk` that accepts an array and splits it into groups of length `size`. If the array can't be split evenly, the final chunk will be the remaining elements.
export const chunk = <T>(arr: T[], size: number) => {
  const chunkedArr: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size)
    chunkedArr.push(chunk)
  }
  return chunkedArr
}

// 5. Write a function called `arrayDifference` that returns all the values from the first array that are not present in any of the other provided arrays
export const arrayDifference = <T>(arr: T[], ...others: T[][]) =>
  arr.filter((val) => !others.some((otherArr) => otherArr.includes(val)))

// 6. Write a function called `isPalindrome` that returns true if a string is a palindrome, and false otherwise
export const isPalindrome = (str: string) =>
  str.toLowerCase() === str.toLowerCase().split('').reverse().join('')

// 7. Write a function called `getAllKeys` that returns all the keys of a nested object
export const getAllKeys = (obj: Object, keys: string[] = []) => {
  for (let key in obj) {
    keys.push(key)
    if (typeof obj[key] === 'object') {
      getAllKeys(obj[key], keys)
    }
  }
  return keys
}

// 8. Write a class called `Calculator` with the following requirements...
//      - may optionally be initialized with a starting value, otherwise it starts with zero in the register
//      - has the ability to add, subtract, multiply, and divide
//      - calculations may be chained together (fluent API)
//      - the register can be reset to zero using a `clear` method
//      - returns the calculated result when `calculate` is called
//    Example:
//      const myCalc = new Calculator(3)
//      const result = myCalc.add(2).multiply(10).calculate()
//      console.log(result) //=> 50
export class Calculator {
  private register: number

  constructor(register = 0) {
    this.register = register
  }

  add(num: number) {
    this.register += num
    return this
  }

  subtract(num: number) {
    this.register -= num
    return this
  }

  multiply(num: number) {
    this.register *= num
    return this
  }

  divide(num: number) {
    this.register /= num
    return this
  }

  calculate() {
    return this.register
  }

  clear() {
    this.register = 0
    return this
  }
}

// 9. Write a function called `sleep` that awaits a given number of milliseconds before resolving
export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// 10. Write a function called `memoize` that memoizes a function that accepts a variable number of arguments and returns it
export const memoize = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  fn: T
) => {
  const cache: { [key: string]: ReturnType<T> } = {}

  return (...args: Parameters<T>) => {
    const stringifiedArgs = JSON.stringify(args)
    if (cache[stringifiedArgs]) {
      console.log('cache: ', cache)
      console.log('args: ', stringifiedArgs)
      return cache[stringifiedArgs]
    } else {
      console.log('fresh args: ', args)
      const result = fn(...args)
      cache[stringifiedArgs] = result
      return result
    }
  }
}
