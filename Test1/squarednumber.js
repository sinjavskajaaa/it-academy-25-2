// 10. Создайте цепочку из трех промисов. Пусть первый промис вернет число. Сделайте так, чтобы каждый последующий промис возводил в квадрат результат
// предыдущего промиса через 3 секунды. После окончания манипуляций выведите на в консоль получившийся номер.

const newNumber = new Promise((resolve) => {
    return resolve(3);
});

function squareNumber(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number * number);
        }, 3000);
    });
}

newNumber
    .then((result) => {
        return squareNumber(result);
    })
    .then((result) => {
        return squareNumber(result);
    })
    .then((result) => {
        return squareNumber(result);
    })
    .then((finalResult) => {
        console.log(finalResult);
    });


