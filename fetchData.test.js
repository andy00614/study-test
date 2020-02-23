import { requestMock } from './fetchData'

test('test async function',() => {
  requestMock().then(res => {
    expect(res).toBe(10)
  })
})