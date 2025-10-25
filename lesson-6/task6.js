// 1. поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
const arr = [1,2,3,4,5,6];
const reverseArray = arr.toReversed();
console.log(reverseArray);


// 2. найти максимальное значение числа в массиве ([3,67,15...])
const arr2 = [3,67,15,66,51,5];
let maxNumber = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > maxNumber) {
        maxNumber = arr2[i];
    }
}
console.log(maxNumber);


// 3. записать в массив ряд фибоначчи начиная с N члена с длинной массива M
const startNumber = 6; //С какого элемента хотим получить массив
const fibonacciArray = [0, 1]; // Начало последовательности Фибоначчи
const ArrayLength = 15; //Длина массива

for (i = 2; i < ArrayLength + startNumber; i ++) {
    // Получаем i-й элемент последовательности как сумму предыдущих двух
    fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2];
}
console.log(fibonacciArray.slice(startNumber,ArrayLength + startNumber));

// 4. даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению, но не по позиции (3487 и 3794 ---> 1 и 2 )
const number1 = 6879;
const number2 = 5689;

let samePosition = 0;
let sameValue = 0;

const string = String(number1);
const string2 = String(number2);

for (let i = 0; i < 4; i++) {
    if (string[i] === string2[i]) {
        samePosition++;
    }
}

for (let i = 0; i < 4; i++) {
    if (string.includes(string2[i])){
        if (string[i] !== string2[i])
            sameValue++;
        }
}

console.log(`Совпадают по значению и позиции: ${samePosition}`);
console.log(`Совпадают только по значению: ${sameValue}`);

// 5. сортировка массива по возрастанию/убыванию
// По возрастанию
const up = [3,67,15,66,51,5];
const sortedUp = up.toSorted((a, b) => a - b);
console.log(sortedUp);

// По убыванию
let down = [3,67,15,66,51,5];
const sortedDown = down.toSorted((a, b) => b-a);
console.log(sortedDown);

// 6. удалить из массива все повторяющиеся элементы
let arr6 = [44,3,67,3,15,66,51,44,66,51];
const uniqueArray = arr6.filter((value, index) => arr6.indexOf(value) === index);
console.log(uniqueArray);