// 3. Написать функцию которая подсчитывает количество Пятниц 13-ого с любой заданной даты в прошлом до сегодня.
// Ваш код должен иметь возможность считать количество дней на любую заданую в переменной первоначальную дату и считать верно через 10-15-20 лет

function countOfFriday13(startDateInPast) {
    const startDate = new Date(startDateInPast);
    const today = new Date();

    let totalCountOfFridays13 = 0;
    let currentDate = new Date(startDate.getTime());

    // Если стартовая дата в прошлом позже 13-го числа этого месяца, начинаем с следующего месяца
    if (currentDate.getDate() > 13) {
        currentDate.setMonth(currentDate.getMonth() + 1);
        currentDate.setDate(1);
    }

    // Проходим по месяцам, пока не достигнем сегодняшнего дня
    while (true) {
        // Создаем дату 13-го числа текущего месяца
        let friday13 = new Date(currentDate.getFullYear(), currentDate.getMonth(), 13);
        if (friday13 > today) break; // Если дата позже сегодняшней, выходим

        // Проверяем, является ли 13-е пятницей
        if (friday13.getDay() === 5) {
            totalCountOfFridays13++;
        }

        // Переходим к следующему месяцу
        currentDate.setMonth(currentDate.getMonth() + 1);
    }

    return totalCountOfFridays13;

}

console.log(countOfFriday13('1995-01-01'));
