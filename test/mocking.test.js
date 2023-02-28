import * as math from "../index.js";

const mockCallback = jest.fn((x) => 10 * x);

test("forEach mock function", () => {
  const arr = [1, 2, 3];
  math.mockFn(arr, mockCallback);

  // The mock function was called twice
  expect(mockCallback.mock.calls).toHaveLength(3);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[0][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[1].value).toBe(20);
});

// Mock the dependencies (in this case, there are none)
// jest.mock();

describe("subtract", () => {
  test("subtracts two numbers correctly", () => {
    const spy=jest.spyOn(math,'subtract');

    // Arrange
    const a = 10;
    const b = 5;

    // Act
    const result = math.subtract(a, b);

    // Assert
    expect(result).toBe(5);
    
    expect(spy).toHaveBeenCalledTimes(1)
  });
});
