import { callFn } from './mock'


test('test调用多少次',() => {
  const func = jest.fn()
  callFn(func)
  callFn(func)
  callFn(func)
  expect(func.mock.calls.length).toBe(3)
})