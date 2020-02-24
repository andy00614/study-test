import Counter from './Counter'

let counter = null

beforeEach(() => {
  counter = new Counter()
})

test('测试addOne',() => {
  counter.addOne()
  expect(counter.number).toBe(2)
})

test('测试addOne',() => {
  counter.minusOne()
  expect(counter.number).toBe(0)
})