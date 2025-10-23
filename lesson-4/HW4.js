// 1) Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
const str = 'Hello';
const num = 3;
const boolean = false;

console.log(str+num);
console.log(str+boolean);
console.log(num+boolean);

// 2) Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
const str2 = 'Ola';
const num2 = 4;
const boolean2 = true;

console.log(str2*num2);
console.log(str2*boolean2);
console.log(num2*boolean2);

// 3) Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
const str3 = 'Bonjour';
const num3 = 10;
const boolean3 = false;

console.log(str3/num3);
console.log(str3/boolean3);
console.log(num3/boolean3);

// 4) Выполнить явное преобразование(number, string, boolean)
const str4 = String(num2);
const num4 = Number(boolean3);
const boolean4 = Boolean(str);

console.log(str4);
console.log(num4);
console.log(boolean4);