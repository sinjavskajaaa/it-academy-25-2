// 5. Создайте функцию, которая принимает массив, содержащий числа или массивы чисел любой вложенности, и возвращает сумму всех чисел в массиве.
// В массиве вложенности внутри могут быть любые типы данных, в том числе массивы.

function sumOfArray(arr) {
    let sum = 0;

    function checkValue(value) {
        if (typeof value === 'number') {
            sum += value;
        } else if (Array.isArray(value)) {
            value.forEach(checkValue);
        }
    }
    checkValue(arr);
    return sum;
}

const mixedArray = [1, [2], 'hello', [3, [4, 5]], null, [6, [7, "number" ]], []];
console.log(sumOfArray(mixedArray));