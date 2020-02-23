test("matcher", () => {
  const a = {
    one: {
      b: 1
    }
  };
  expect(a).toEqual({
    one: {
      b: 1
    }
  });
});
 
// String
test("toMatch", () => {
  const  str = "abcd";
  // 或者正则表达式 
  expect(str).toMatch("abc");
});

// Array,Set
test('toContainer',() => {
  const arr = ['andy',1,23,3]
  expect(arr).toContain(23)
})
