console.log(1);
// Створіть функцію processArray(array, callback), яка приймає масив та 
// функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:

// Порахувати суму всіх елементів масиву.
// Знайти мінімальний елемент масиву.
// Знайти максимальний елемент масиву.
// Перепишіть колбек-функції на стрілки



const processArray = (array, callback) => {
 return callback(array)
};

const getSum = arr => arr.reduce((acc, curr) => acc + curr)
const getMin = arr => Math.min(...arr)
const getMax = arr => Math.max(...arr)

const num = [1, 2, 4, 123]

console.log(`Сумма: ${processArray(num, getSum)}`);
console.log(`Мінімальний елемент масиву: ${processArray(num, getMin)}`);
console.log(`Максимальний елемент масиву: ${processArray(num, getMax)}`);

console.log(2);
// 2. Створіть функцію operate(a, b, callback), яка приймає два числа 
// та колбек для виконання операції над ними. Використайте її для виконання наступних операцій:

// Додавання.
// Віднімання.
// Множення.
// Ділення.
// Перепишіть колбеки на стрілкові функції



const operate = (a, b, callback) => {
return callback(a, b)
};

// Виклик функції з різними операціями
console.log(operate(10, 5, (a, b) => a - b)); // Віднімання
console.log(operate(10, 5, (a, b) => a + b)); // Додавання
console.log(operate(10, 5, (a, b) => a * b)); // Множення
console.log(operate(10, 0, (a, b) => a / b)); // Ділення