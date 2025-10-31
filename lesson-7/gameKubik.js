// 1. Написать функцию которая будет эмулировать игру в кубики, заданное количество игроков по очереди бросают кубик, каждый в итоге бросает одинаковое количество раз
// (должно работать с любым количеством раз заданным в переменной). У кого сумма набранная будет наибольшей - тот выиграл.
// Если суммы равны то ничья. Выведите результаты в консоль.

function gameKubik(gamersCount, attempts) {
    let results = [];

    // Для каждого игрока
    for (let i = 1; i <= gamersCount; i++) {
        let points = 0;

        // Один игрок бросает кубик заданное количество раз
        for (let j = 0; j < attempts; j++) {
            const pointsForAttempt = Math.floor(Math.random() * 6) + 1; // случайное число от 1 до 6
            points += pointsForAttempt;
        }

        results.push({player: i, score: points});
    }

    const maxPoints = Math.max(...results.map(results => results.score));
    const winners = results.filter(results => results.score === maxPoints);

    if (winners.length === 1) {
        console.log(`Победитель игрок ${winners[0].player} с результатом ${winners[0].score}`);
    } else {
        console.log(`Ничья между игроками ${winners.map(winners => winners.player).join(' и ')} с результатом ${maxPoints}`);
    }
}

gameKubik(4, 3);