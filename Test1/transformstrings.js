// 7. Напишите функцию, которая принимает массив строк и функцию преобразования. Функция должна возвращать объект, где ключи — это исходные строки, а значения
// — результаты применения функции преобразования к каждой строке. Эта функция принимает одну строку и возвращает новое значение, которое может быть числом,
//другой строкой, объектом или любым другим типом данных.

function transformStrings(strings, transformFn) {
    const result = {};
    strings.forEach(str => {
        result[str] = transformFn(str);
    });
    return result;
}

const stringArray = ["яблоко", "банан", "кино", "апельсин", "бассейн"];

function transformToUpperCase(str) {
    return str.toUpperCase();
}

const mappedObject = transformStrings(stringArray, transformToUpperCase);
console.log(mappedObject);
