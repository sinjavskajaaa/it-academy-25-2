// 2. Создайте функцию, которая принимает массив произвольных значений, удаляет все "falsy" значения, а затем возвращает массив, отсортированный в порядке убывания.

function deleteFalsy(arr) {
    const filteredArr = arr.filter(Boolean);
    return filteredArr.sort((a, b) => b - a);
}

const array = [-9, 0, "апельсин", 0n, 1, "Hi", null, 10, undefined, NaN, "", 100,  false,  -0];

console.log(deleteFalsy(array));
