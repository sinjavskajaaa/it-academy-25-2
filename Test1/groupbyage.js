// 3. Напишите функцию, которая принимает массив объектов с полями name и age, и группирует их в объект, где ключи — это возраст, а значения —
// массивы имен людей этого возраста.

function groupByAge(usersArray){

    return usersArray.reduce((accumulator, user) => {
        const ageKey = user.age;
        if (!accumulator[ageKey]) {
            accumulator[ageKey] = [];
        }
        accumulator[ageKey].push(user.name);
        return accumulator;
    }, {});
}

const users = [
    { name: "James", age: 20 },
    { name: "John", age: 15 },
    { name: "Billy", age: 25 },
    { name: "Susan", age: 25 },
    { name: "Sten", age: 20 },
];

const groupedUsers = groupByAge(users);
console.log(groupedUsers);