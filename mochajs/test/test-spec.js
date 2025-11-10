const { expect } = require('chai');
const Calculator = require('../Calculator');

describe('Проверка модуля "Calculator"', function()  {
    describe('Проверка метода add', function() {
        const newCalculator = new Calculator();

        it('Сумма нескольких положительных чисел', async () => {
            expect(newCalculator.add(1, 2, 3)).to.equal(6);
        });
        it('Сумма с десятичными положительными числами', async () => {
            expect(newCalculator.add(1.5, 2.4, 3)).to.equal(6.9);
        });
        it('Сумма нескольких отрицательных чисел', async() => {
            expect(newCalculator.add(-1, -2, -3)).to.equal(-6);
        });
        it('Сумма с десятичными отрицательными числами', async () => {
            expect(newCalculator.add(1.5, -2.4, 3)).to.equal(2.1);
        });
        it('Сумма нескольких чисел с отрицательными числами', async() => {
            expect(newCalculator.add(-1, -2, 3)).to.equal(0);
        });
        it('Сумма, если передано в аргументах одно число', async() => {
            expect(newCalculator.add(2)).to.equal(2);
        });
        it('Сумма нулей', async() => {
            expect(newCalculator.add(0, 0, 0)).to.equal(0);
        });
        it('Сумма чисел без аргументов', async() => {
            expect(newCalculator.add()).to.equal(0);
        });
    });

    describe('Проверка метода multiply', function() {
        const newCalculator = new Calculator();

        it('Умножение нескольких положительных чисел', async () => {
            expect(newCalculator.multiply(1, 2, 3)).to.equal(6);
        });
        it('Умножение с десятичными положительными числами', async () => {
            expect(newCalculator.multiply(1.5, 2)).to.equal(3);
        });
        it('Умножение нескольких отрицательных чисел', async() => {
            expect(newCalculator.multiply(-2, -3)).to.equal(6);
        });
        it('Умножение с десятичными отрицательными числами', async() => {
            expect(newCalculator.multiply(-3.5, -3)).to.equal(10.5);
        });
        it('Умножение положительных чисел с отрицательными числами', async() => {
            expect(newCalculator.multiply(-2, 3)).to.equal(-6);
        });
        it('Умножение, если передано в аргументах одно число', async() => {
            expect(newCalculator.multiply(2)).to.equal(2);
        });
        it('Умножение чисел без аргументов', async() => {
            expect(newCalculator.multiply()).to.equal(1);
        });
        it('Сумма нулей', async() => {
            expect(newCalculator.multiply(0, 0, 0)).to.equal(0);
        });
    });

    describe('Проверка метода subtraction', function() {
        const newCalculator = new Calculator();

        it('Вычитание, если уменьшаемое больше вычитаемого', async () => {
            expect(newCalculator.subtraction(5,2)).to.equal(3);
        });
        it('Вычитание, если уменьшаемое меньше вычитаемого', async () => {
            expect(newCalculator.subtraction(1,2)).to.equal(-1);
        });
        it('Вычитание, если уменьшаемое равно вычитаемому', async () => {
            expect(newCalculator.subtraction(1,1)).to.equal(0);
        });
        it('Вычитание с десятичными числами', async () => {
            expect(newCalculator.subtraction(4.5,3.1)).to.equal(1.4);
        });
        it('Вычитание нуля', async () => {
            expect(newCalculator.subtraction(4,0)).to.equal(4);
        });
        it('Вычитание отрицательных чисел', async () => {
            expect(newCalculator.subtraction(-1,-2)).to.equal(1);
        });
    });

    describe('Проверка метода divide', function() {
        const newCalculator = new Calculator();

        it('Деление без остатка', async () => {
            expect(newCalculator.divide(4,2)).to.equal(2);
        });
        it('Деление с остатком', async () => {
            expect(newCalculator.divide(1,2)).to.equal(0.5);
        });
        it('Деление числа на самого себя', async () => {
            expect(newCalculator.divide(1,1)).to.equal(1);
        });
        it('Деление на десятичное число', async () => {
            expect(newCalculator.divide(1,0.5)).to.equal(2);
        });
        it('Деление на ноль', async () => {
            expect(newCalculator.divide(2,0)).to.equal(Infinity);
        });
        it('Деление ноля', async () => {
            expect(newCalculator.divide(0,1)).to.equal(0);
        });
    });
    describe('Проверка метода exponentiation', function() {
        const newCalculator = new Calculator();

        it('Квадрат челочисленного положительного числа', async () => {
            expect(newCalculator.exponentiation(2)).to.equal(4);
        });
        it('Квадрат челочисленного отрицательного числа', async () => {
            expect(newCalculator.exponentiation(-5)).to.equal(25);
        });
        it('Квадрат десятичного числа', async () => {
            expect(newCalculator.exponentiation(1.5)).to.equal(2.25);
        });
        it('Квадрат ноля', async () => {
            expect(newCalculator.exponentiation(0)).to.equal(0);
        });
    });
})