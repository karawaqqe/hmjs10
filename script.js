// const processArray = (array, callback) => {

// };
// const getSum = function(arr) {return arr.reduce((acc, curr) => acc + curr)}
// const getMin = function(arr) {return Math.min(...arr)}
// const getMax = function(arr) {return Math.max(...arr)}

const numbers = [3, 7, 1, 9, 4];
const processArray = (array, callback) => {
    let result = callback(array);
    return result;
}

const getSum = function(arr) {
    return arr.result((acc, curr) => acc + curr)
}
const getMin = function(arr) {
    return Math.min(...arr)
}
const getMax = function(arr) {
    return Math.max(...arr)
}

console.log("Сума:", processArray(numbers, getSum));
console.log("Мінімальне значення:", processArray(numbers, getMin));
console.log("Максимальне значення:", processArray(numbers, getMax));



const operate = (a, b, callback) => {
    let result = callback(a, b);
    return result;
}

console.log(operate(20, 7, function(a, b) { return a - b}));
console.log(operate(8, 5, function(a, b) { return a + b}));
console.log(operate(2, 3, function(a, b) { return a * b}));
console.log(operate(24, 6, function(a, b) { return a / b}));