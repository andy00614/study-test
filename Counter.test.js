import Counter from './Counter'

const counter = new Counter()

test('测试addOne',() => {
  counter.addOne()
  expect(counter.number).toBe(2)
})

test('测试addOne',() => {
  counter.minusOne()
  expect(counter.number).toBe(1)
})