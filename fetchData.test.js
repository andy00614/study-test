import { requestMock } from './fetchData'

test('test async function',(done) => {

  requestMock().then(res => {
    // 这里如果是promise的话加return,否则的话返回不出去，按没有结果来处理
    // 没有结果的话那肯定就是默认通过了
    // 或者用done
    return expect(res).toBe('true2222')
    // done()
  })
})