import {
  compact,
  // sumValues,
  // chunk,
  // isPalindrome,
  // getAllKeys,
  // Calculator,
  // determinant,
} from './index'

describe('1. compact', () => {
  it('takes an array with falsy values and returns a new array with the falsy values removed', () => {
    const before = ['a', false, 0, '', null, undefined, NaN, 'b']
    const after = ['a', 'b']
    expect(compact(before)).toEqual(after)
  })
})

// describe('2. sumValues', () => {
//   it('sums the numbers in an array', () => {
//     expect(sumValues([1, 2, 3])).toEqual(6)
//     expect(sumValues([0, -1, 2, -3])).toEqual(-2)
//     expect(sumValues([])).toEqual(0)
//   })
// })

// describe('3. chunk', () => {
//   it('takes an array and chunks it into pieces of the given size', () => {
//     const size = 3
//     const before = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     const after = [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ]
//     expect(chunk(before, size)).toEqual(after)
//   })

//   it("leaves the last chunk shorter if the array can't be split evenly", () => {
//     const size = 3
//     const before = [1, 2, 3, 4, 5, 6, 7, 8]
//     const after = [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8],
//     ]
//     expect(chunk(before, size)).toEqual(after)
//   })

//   it('returns a single chunk if the array is smaller or equal to the given size', () => {
//     const size1 = 3
//     const size2 = 4
//     const before = [1, 2, 3]
//     const after = [[1, 2, 3]]
//     expect(chunk(before, size1)).toEqual(after)
//     expect(chunk(before, size2)).toEqual(after)
//   })
// })

// describe('4. isPalindrome', () => {
//   it('returns true if a string is a palindrome', () => {
//     expect(isPalindrome('Racecar')).toBe(true)
//   })

//   it('returns false if a string is not a palindrome', () => {
//     expect(isPalindrome('Animal')).toBe(false)
//   })
// })

// describe('5. getAllKeys', () => {
//   it('returns all the keys of a nested object', () => {
//     const nestedObj = {
//       abc: 123,
//       xyz: true,
//       foo: {
//         bar: {
//           baz: [4, 5, 6],
//         },
//       },
//     }
//     const expectedKeys = ['abc', 'xyz', 'foo', 'bar', 'baz', '0', '1', '2']
//     expect(getAllKeys(nestedObj)).toEqual(expectedKeys)
//   })

//   it('returns all the keys of a flat object', () => {
//     const flatObj = { a: 1, b: 2, c: 3 }
//     const expectedKeys = ['a', 'b', 'c']
//     expect(getAllKeys(flatObj)).toEqual(expectedKeys)
//   })
// })

// describe('6. Calculator', () => {
//   it('initializes the calculator with zero in the register by default', () => {
//     const myCalc = new Calculator()
//     expect(myCalc.calculate()).toEqual(0)
//   })

//   it('accepts an initializer', () => {
//     const myCalc = new Calculator(5)
//     expect(myCalc.calculate()).toEqual(5)
//   })

//   it('adds', () => {
//     const myCalc = new Calculator()
//     myCalc.add(2)
//     expect(myCalc.calculate()).toEqual(2)
//   })

//   it('subtracts', () => {
//     const myCalc = new Calculator()
//     myCalc.subtract(2)
//     expect(myCalc.calculate()).toEqual(-2)
//   })

//   it('multiplies', () => {
//     const myCalc = new Calculator(2)
//     myCalc.multiply(3)
//     expect(myCalc.calculate()).toEqual(6)
//   })

//   it('divides', () => {
//     const myCalc = new Calculator(8)
//     myCalc.divide(4)
//     expect(myCalc.calculate()).toEqual(2)
//   })

//   it('has a fluent API', () => {
//     const myCalc1 = new Calculator()
//     expect(myCalc1.add(1)).toEqual(myCalc1)
//     expect(myCalc1.subtract(1)).toEqual(myCalc1)
//     expect(myCalc1.multiply(1)).toEqual(myCalc1)
//     expect(myCalc1.divide(1)).toEqual(myCalc1)
//     expect(myCalc1.clear()).toEqual(myCalc1)

//     const myCalc2 = new Calculator()
//     const result1 = myCalc2.add(3).subtract(1).multiply(5).divide(2).calculate()
//     expect(result1).toEqual(5)
//     const result2 = myCalc2.clear().calculate()
//     expect(result2).toEqual(0)
//   })

//   it('clears the register', () => {
//     const myCalc = new Calculator(1)
//     myCalc.clear()
//     expect(myCalc.calculate()).toEqual(0)
//   })
// })

// describe('7. determinant', () => {
//   it('calculates the determinant of a 2x2 matrix', () => {
//     const _2x2 = [
//       [1, 2],
//       [3, 4],
//     ]
//     expect(determinant(_2x2)).toEqual(-2)
//   })

//   it('calculates the determinant of a 3x3 matrix', () => {
//     const _3x3 = [
//       [1, 2, 3],
//       [3, 2, 1],
//       [2, 1, 3],
//     ]
//     expect(determinant(_3x3)).toEqual(-12)
//   })

//   it('calculates the determinant of a 4x4 matrix', () => {
//     const _4x4 = [
//       [2, 1, 3, 4],
//       [4, 2, 1, 3],
//       [1, 4, 2, 3],
//       [3, 1, 4, 2],
//     ]
//     expect(determinant(_4x4)).toEqual(-120)
//   })
// })
