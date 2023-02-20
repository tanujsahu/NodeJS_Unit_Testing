import * as math from './index.js'

describe("add", () => {
  let a,
    b,
    arr = [2, 4, 8, 1, 6];

  beforeAll(() => {
    // Set up any expensive resources that need to be created once before all tests
  });

  beforeEach(() => {
    // Set up any resources that need to be created before each test
    a = 1;
    b = 2;
    //   math.arrSort()
  });

  it("should check math addition", () => {
    expect(math.add(a, b)).toBe(3);
  });

  it("should check array without sorting", () => {
    expect(arr).toEqual([2, 4, 8, 1, 6]);
  });

  it("should check array with sorting", () => {
    expect(math.arrSort(arr)).toEqual([1, 2, 4, 6, 8]);
  });

  afterEach(() => {
    // Tear down any resources that need to be cleaned up after each test
  });
  
});
  