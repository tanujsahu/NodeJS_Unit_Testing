import * as math from '../index.js'

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

  it("should check value is false", () => {
    expect(math.valueFalse).toBeFalsy();
  });

  it("should check value is true", () => {
    expect(math.valueTrue).not.toBeFalsy();
  });

  test('should match valid email address', () => {
    const emailRegex = math.emailRegex;
    const validEmail = 'tanuj@example.com';
    expect(validEmail).toMatch(emailRegex);
  });

  test('should not match an invalid email address', () => {
    const emailRegex = math.emailRegex;
    const invalidEmail = 'invalid_email.com';
    expect(invalidEmail).not.toMatch(emailRegex);
  });

  afterEach(() => {
    // Tear down any resources that need to be cleaned up after each test
  });

});
  