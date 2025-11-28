// 4. функцию isPalindrome, которая проверяет, является ли заданная строка палиндромом. Палиндром — это слово, фраза или последовательность, которые
// читаются одинаково как в прямом, так и в обратном порядке (без учета пробелов, знаков препинания и регистра). Игнорируйте пробелы и знаки препинания, а строки
// из одного символа следует считать палиндромами (например, 'a')

function isPalindrome(String) {
    const newString = String.replace(/[\s\p{P}]+/gu, '').toLowerCase();
    const checkPalindrome = newString.split('').reverse().join('');
    console.log(checkPalindrome === newString);
}

isPalindrome('Ася, молоко около мяса');
