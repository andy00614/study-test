import { generateConfig, generateConfig2 } from './snapShot'

test('test generateConfig',() => {
  expect(generateConfig()).toEqual({
    server: 'http://localhost',
    port: 8088
  })
})

// 用snapshot模式

test('test generateConfig snapShot',() => {
  expect(generateConfig()).toMatchSnapshot({
    time: expect.any(Date)
  });
})

test('test generateConfig snapShot2',() => {
  expect(generateConfig2()).toMatchSnapshot();
})