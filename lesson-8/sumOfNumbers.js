//3. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
// Используйте также функцию getNum, чтобы вернуть промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10.
// Создайте async функцию, которая с помощью await будет дожидаться результата функции, затем будет дожидаться результата второй функции,
// а затем найдет сумму полученных чисел и выводит на экран.

function getNum() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
            resolve(randomNumber);
        }, 3000);
    });
}

function getNum2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * (10 - 6 + 1) + 6);
            resolve(randomNumber);
        }, 5000);
    });
}

async function sumOfNumbers() {
    const number1 = await getNum();
    const number2 = await getNum2();
    const sum = number1 + number2;
    console.log(`Сумма ${number1} и ${number2} = ${sum}`);
}

sumOfNumbers();