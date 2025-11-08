// 2. Написать функцию которая будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу.
// Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5) - Ваш код должен работать с любым числом заданным в переменной (не только с 15)
// и с любым количеством частей на которые надо разбить число..
// а. числа изначальное число целое, числа разбивки - целые (4,6,5)


function divideNumbersIntergers(number,piecesOfNumber) {

    const randomNumbers = [];
    for (let i=0; i < piecesOfNumber; i++) {
        randomNumbers.push(Math.random());
    }

    // Сумма случайных чисел
    const sum = randomNumbers.reduce((a,b) => a+b, 0);

    // Округление, чтобы сумма была равна number
    const round = randomNumbers.map(number => Math.round(number / sum * number));

    // Корректируем сумму для точности (если не совпадает из-за округлений)
    const roundSum = round.reduce((a,b) => a+b, 0);
    let diff = number - roundSum;

    // Распределяем разницу по частям
    while (diff !== 0) {
        for (let i=0; i < round.length; i++) {
            if (diff === 0) break;
            // увеличиваем или уменьшаем случайным образом
            if (diff > 0) {
                round[i]++;
                diff--;
            } else if (diff < 0 && round[i] > 1) {
                round[i]--;
                diff++;
            }
        }
    }

    return round;
}

console.log(divideNumbersIntergers(22, 6));