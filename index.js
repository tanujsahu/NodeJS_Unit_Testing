console.log("Hello world");
export const add = (a, b) => {
    return a + b;
};

export function subtract(a, b) {
    return a - b;
}

export const arrSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

export const valueTrue = true;
export const valueFalse = false;
export const emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;

export const mockFn = function forEach(items, callback) {
  console.log("items",items)
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
} 

