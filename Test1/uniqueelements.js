// 6. Напишите функцию, которая принимает массив объектов и функцию для сравнения элементов. Функция должна возвращать новый массив,
// содержащий только последние уникальные элементы согласно предоставленной функции сравнения. Функция сравнения: Эта функция принимает
// два аргумента (два объекта из массива) и возвращает true, если они считаются эквивалентными для целей уникальности,
// и false в противном случае.


function getUniqueElements(array, compareFn) {
    const uniqueElements = [];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const isDuplicate = uniqueElements.some(existing => compareFn(existing, item));

        if (!isDuplicate) {
            uniqueElements.push(item);
        }
    }

    return uniqueElements.slice(-2);
}

const users = [
    { name: 'Саша', age: 20 },
    { name: 'Зоя', age: 25 },
    { name: 'Лена', age: 18 },
    { name: 'Саша', age: 19 },
    { name: 'Лена', age: 23 }
];


const compareByName = (a, b) => a.name === b.name;

const uniqueByName = getUniqueElements(users, compareByName);
console.log(uniqueByName);
