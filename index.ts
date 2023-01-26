// Write a function called `compact` that removes all falsy values from an array
export const compact = <T>(arr: T[]) => arr.filter((val) => val)

// Write a function called `addOrRemove` that adds an item to an array if it doesn't already exist, and removes it if not.
// The array can be heterogeneous, but only contain primitive values.
export const addOrRemove = <T extends Array<number | string | boolean>>(
  item: T[number],
  arr: T
) => (arr.includes(item) ? arr.filter((val) => val != item) : [...arr, item])

// Write a function called `chunk` that accepts an array and splits it into groups of length `size`. If the array can't be split evenly, the final chunk will be the remaining elements.
export const chunk = <T>(arr: T[], size: number) => {
  const chunkedArr: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size)
    chunkedArr.push(chunk)
  }
  return chunkedArr
}

// Write function called `sumValues` to calculate the sum of all the number in an array
export const sumValues = (numbers: number[]) =>
  numbers.reduce((prev, current) => prev + current, 0)

// Write a function called `arrayDifference` that returns all the values from the first array that are not present in any of the other provided arrays.
export const arrayDifference = <T>(arr: T[], ...others: T[][]) =>
  arr.filter((val) => !others.some((otherArr) => otherArr.includes(val)))

// Write a function called `getAllKeys` that returns all the keys of a nested object
export const getAllKeys = (obj: Object, keys: string[] = []) => {
  for (let key in obj) {
    keys.push(key)
    if (typeof obj[key] === 'object') {
      getAllKeys(obj[key], keys)
    }
  }
  return keys
}

// class, sleep, memoize
