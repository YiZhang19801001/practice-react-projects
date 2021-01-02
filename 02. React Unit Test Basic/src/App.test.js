function sum(a, b) {
  return a + b;
}

test("component render without errors", () => {
  expect(sum(1, 2)).toBe(3);
});
