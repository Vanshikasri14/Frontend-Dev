function applyOperation(numbers, operation) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(operation(numbers[i]));
  }
  return result;
}
const arr=[1,2,3,4];
console.log("Double:",applyOperation(arr,n=>n*2));
console.log("Square:",applyOperation(arr,n=>n*n));
