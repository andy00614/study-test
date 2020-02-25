import Counter from './Counter'

let counter = null

beforeEach(() => {
  counter = new Counter()
})

describe('测试增加',() => {
  test('测试addOne',() => {
    counter.addOne()
    expect(counter.number).toBe(2)
  })
  
  test('测试addOne',() => {
    counter.addTwo()
    expect(counter.number).toBe(3)
  })
})

describe('测试减小',() => {
  test('测试minusOne',() => {
    counter.minusOne()
    expect(counter.number).toBe(0)
  })
  
  test('测试minusTwo',() => {
    counter.minusTwo()
    expect(counter.number).toBe(-1)
  })
})



