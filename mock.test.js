import { callFn, getData } from "./mock";
import axios from "axios";

test("test调用多少次", () => {
  const func = jest.fn();
  callFn(func);
  callFn(func);
  callFn(func);
  expect(func.mock.calls.length).toBe(3);
});

test("固定返回结果", () => {
  const func = jest.fn();
  func.mockReturnValue("dell");
  callFn(func);
  callFn(func);
  callFn(func);
  expect(func.mock.results[0].value).toBe("dell");
});

test("固定返回结果implementation", () => {
  const func = jest.fn();
  // func.mockReturnValue("dell");
  func.mockImplementationOnce(() => {
    return 'dell'
  })
  callFn(func);
  callFn(func);
  callFn(func);
  expect(func.mock.results[0].value).toBe("dell");
});

// 用jest对axios进行一个模拟，就不用真实请求数据了
jest.mock("axios");

test("测试异步", async () => {
  axios.get.mockResolvedValueOnce({ data: "hello" })
  await getData().then(data => {
    expect(data).toBe("hello");
  });
});

