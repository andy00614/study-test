import { requestMock } from './fetchData'

// test('test async function',() => {

//   return requestMock().then(res => {
//     // 这里如果是promise的话加return,否则的话返回不出去，按没有结果来处理
//     // 没有结果的话那肯定就是默认通过了
//     // 或者用done
//     return expect(res).toBe('true')
//     // done()
//   })
// })
// // rebase123
// // 第二种方法

// test('test async function 2',() => {
//   return expect(requestMock()).resolves.toBe('true')
// })

// test('test async function 2',() => {
//   return expect(requestMock()).rejects.toBe('true')
// })

test('test async function async await',async () => {
  await expect(requestMock()).rejects.toBe('true1')
})
