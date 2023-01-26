import {
  compact,
  chunk,
  getAllKeys,
  sumValues,
  arrayDifference,
  addOrRemove,
} from './index'

describe('compact', () => {
  it('takes an array with falsy values and returns a new array with the falsy values removed', () => {
    const before = ['a', false, 0, '', null, undefined, NaN, 'b']
    const after = ['a', 'b']
    expect(compact(before)).toEqual(after)
  })
})

describe('addOrRemove', () => {
  it("adds an item to an array if it doesn't already exist", () => {
    expect(addOrRemove(5, ['a', true, 3])).toEqual(['a', true, 3, 5])
  })

  it('removes an item from an array if it already exists', () => {
    expect(addOrRemove(7, ['a', true, 7])).toEqual(['a', true])
  })
})

describe('chunk', () => {
  it('takes an array and chunks it into pieces of the given size', () => {
    const size = 3
    const before = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const after = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    expect(chunk(before, size)).toEqual(after)
  })

  it("leaves the last chunk shorter if the array can't be split evenly", () => {
    const size = 3
    const before = [1, 2, 3, 4, 5, 6, 7, 8]
    const after = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8],
    ]
    expect(chunk(before, size)).toEqual(after)
  })

  it('returns a single chunk if the array is smaller or equal to the given size', () => {
    const size1 = 3
    const size2 = 4
    const before = [1, 2, 3]
    const after = [[1, 2, 3]]
    expect(chunk(before, size1)).toEqual(after)
    expect(chunk(before, size2)).toEqual(after)
  })
})

describe('sumValues', () => {
  it('sums the numbers in an array', () => {
    expect(sumValues([1, 2, 3])).toEqual(6)
    expect(sumValues([0, -1, 2, -3])).toEqual(-2)
    expect(sumValues([])).toEqual(0)
  })
})

describe('arrayDifference', () => {
  it('calculates the difference between the first array and all the others', () => {
    expect(arrayDifference([1, 2, 3, 4, 5], [2, 3, 9], [5, 7])).toEqual([1, 4])
  })
})

describe('getAllKeys', () => {
  it('returns all the keys of a nested object', () => {
    const nestedObj = {
      abc: 123,
      xyz: true,
      foo: {
        bar: {
          baz: [4, 5, 6],
        },
      },
    }
    const expectedKeys = ['abc', 'xyz', 'foo', 'bar', 'baz', '0', '1', '2']
    expect(getAllKeys(nestedObj)).toEqual(expectedKeys)
  })

  it('returns all the keys of a flat object', () => {
    const flatObj = { a: 1, b: 2, c: 3 }
    const expectedKeys = ['a', 'b', 'c']
    expect(getAllKeys(flatObj)).toEqual(expectedKeys)
  })
})
