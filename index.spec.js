import * as math from "./index.js";

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

it("shold check addition", () => {
  const add = math.add(1, 25);
  expect(add).toBe(26);
});
it("shold check subtraction", () => {
  const sub = math.subtract(30, 25);
  expect(sub).toBe(5);
});