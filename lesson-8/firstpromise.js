// Решить используя промисы и async/await.
// 1.Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд.
// Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.

const promise1 = new Promise((resolve) => {
    const delay = Math.random() * 4000 + 1000;
    setTimeout(() => resolve(1), delay);
});

const promise2 = new Promise((resolve) => {
    const delay = Math.random() * 4000 + 1000;
    setTimeout(() => resolve(2), delay);
});

const promise3 = new Promise((resolve) => {
    const delay = Math.random() * 4000 + 1000;
    setTimeout(() => resolve(3), delay);
});

Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log('Первый завершившийся промис вернул номер:', result);
    });

