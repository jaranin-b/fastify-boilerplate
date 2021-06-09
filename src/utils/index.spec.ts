import { multiply } from './index'

describe('test multiply', () => {
  test('pass', () => {
    expect(multiply(1, 2)).toEqual(2)
  })
})
