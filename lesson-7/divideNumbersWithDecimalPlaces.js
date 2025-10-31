// 2. Написать функцию которая будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу.
// Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5) - Ваш код должен работать с любым числом заданным в переменной (не только с 15)
// и с любым количеством частей на которые надо разбить число..
// б. числа разбивки дробные с 2 знаками после запятой 4.55, 5.20, 5.25)

function divideNumbersWithDecimalPlaces(number, piecesOfNumber, decimalPlaces=2) {

    const randomNumbers = [];
    for (let i=0; i < piecesOfNumber; i++) {
        randomNumbers.push(Math.random());
    }

    const sum = randomNumbers.reduce((a,b) => a+b, 0);
    const round = randomNumbers.map(number => parseFloat(((number / sum) * number).toFixed(decimalPlaces)));

    // Корректировка суммы из-за округления
    let roundSum = round.reduce((a,b) => a+b, 0);
    let diff = parseFloat(number - roundSum).toFixed(decimalPlaces);

    // Распределяем разницу
    while (Math.abs(diff) > Math.pow(10, -decimalPlaces)) {
        for (let i=0; i < round.length; i++) {
            if (Math.abs(diff) < Math.pow(10, -decimalPlaces)) break;

            let correction = Math.sign(diff) * Math.pow(10, -decimalPlaces);
            round[i] = parseFloat((round[i] + correction).toFixed(decimalPlaces));
            roundSum = round.reduce((a,b) => a+b, 0);
            diff = parseFloat((number - roundSum).toFixed(decimalPlaces));
        }
    }

    return round;
}


console.log(divideNumbersWithDecimalPlaces(17, 4, 2));
