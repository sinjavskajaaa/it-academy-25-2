// 8. Создайте асинхронную функцию, которая принимает массив функций, возвращающих промисы. Функция должна выполнять все промисы параллельно и
// возвращать массив результатов в том порядке, в котором были переданы функции.


async function getPromisesArray(functionsArray) {
    const promises = functionsArray.map(fn => fn());
    const results = await Promise.all(promises);
    return results;
}

const functions = [
    () => new Promise(resolve => resolve('Первый промис')),
    () => new Promise(resolve => resolve('Второй промис')),
    () => new Promise(resolve => resolve('Третий промис'))
];

getPromisesArray(functions).then(results => {
    console.log(results);
});