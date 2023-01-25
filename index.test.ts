import { compact, chunk } from './index'

describe('compact', () => {
  it('takes an array with falsy values and returns a new array with the falsy values removed', () => {
    const before = ['a', false, 0, '', null, undefined, NaN, 'b']
    const after = ['a', 'b']
    expect(compact(before)).toEqual(after)
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
