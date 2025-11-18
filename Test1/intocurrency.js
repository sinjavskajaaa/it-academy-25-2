// 1.Напишите функцию, которая принимает массив строковых представлений чисел и форматирует их в виде валюты (например, из '1234' в '$1,234.00'). Функция
// должна корректно обрабатывать некорректные входные данные и возвращать для них понятную пользователю ошибку.

function intoCurrency(strNumbers) {
    let arrayFormatted= [];
    let errors = [];

    for(let i = 0; i < strNumbers.length; i++) {
        const num = Number(strNumbers[i]);
        if(isNaN(num)) {
            errors.push(`Значение "${strNumbers[i]}" не число`);
        } else {
            arrayFormatted.push(num.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));
        }
    }
    console.log(arrayFormatted);
    console.log(errors);
}

intoCurrency(['number','3462','123','12564','число']);