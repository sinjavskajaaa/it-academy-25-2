// 9. Напишите программу для печати таблицы умножения в консоли для чисел от 1 до 10 со следующими дополнительными требованиями:
// Программа должна печатать таблицу умножения в выровненном формате (например, таблица со строками и столбцами).
// Таблица должна отображать результаты для чисел от 1 до 10, умноженных на 1 до 10 (т. е. таблица 10x10).
// После печати таблицы умножения программа должна также печатать сумму каждой строки и столбца.
// Программа должна позволять пользователю вводить пользовательский диапазон чисел (например, от 1 до n, где n может быть любым числом, указанным пользователем).
// Программа должна печатать общую сумму всех значений в таблице после печати таблицы.
// Обрабатывать крайние случаи, например, когда пользователь вводит значение меньше 1 (должно отображаться сообщение об ошибке или сообщение).
// Если пользователь вводит нецелое значение для n, программа должна отображать предупреждение и запрашивать допустимое число.
//Пример вывода:
// -------------------------------------
// x | 1 2 3 4 5 6 7 8 9 10
// -------------------------------------
// 1 | 1 2 3 4 5 6 7 8 9 10
// 2 | 2 4 6 8 10 12 14 16 18 20
// 3 | 3 6 9 12 15 18 21 24 27 30
// 4 | 4 8 12 16 20 24 28 32 36 40
// 5 | 5 10 15 20 25 30 35 40 45 50
// 6 | 6 12 18 24 30 36 42 48 54 60
// 7 | 7 14 21 28 35 42 49 56 63 70
// 8 | 8 16 24 32 40 48 56 64 72 80
// 9 | 9 18 27 36 45 54 63 72 81 90
// 10 | 10 20 30 40 50 60 70 80 90 100
// -------------------------------------
// Sum of Rows: 385 770 1155 1540 1925 2310 2695 3080 3465 3850
// Sum of Columns: 385 770 1155 1540 1925 2310 2695 3080 3465 3850
// Total Sum of Table: 38500


function multiplicationTable(n) {
    const size = n;
    const dividingLine = ' ' + '-'.repeat(size * 4.5);

    console.log(dividingLine);

    const headerParts = [' x |'];
    for (let i = 1; i <= size; i++) {
        headerParts.push(i.toString());
    }
    console.log(headerParts.join(' '));

    console.log(dividingLine);

    let rowSum = 0;
    let columnSum = 0;
    const table = [];

    for (let i = 1; i <= size; i++) {
        const row = [];
        let rowStr = "";
        for (let j = 1; j <= size; j++) {
            const elementOfTable = i * j;
            row.push(elementOfTable);
            rowSum += elementOfTable;
            rowStr += `${elementOfTable}  `;
        }
        table.push(row);
        console.log(` ${i} | ` + rowStr.split('').join(''));
    }

    for (let j = 0; j < size; j++) {
        for (let i = 0; i < size; i++) {
            columnSum += table[i][j];
        }
    }
    console.log(dividingLine);

    let rowSumArr = [];

    for (let i = 0; i < table.length; i++) {
        let rowSum = 0;
        const row = table[i];
        for (let i = 0; i < row.length; i++) {
            rowSum += row[i];
        }
        rowSumArr.push(rowSum);
    }
    console.log(' Sum of Rows: ' + rowSumArr.toString().split(',').join(' '));

    let columnSumArr = [];
    const column = table[0].length;

    for (let j = 0; j < column; j++) {
        let columnSum = 0;
        for (let i = 0; i < table.length; i++) {
            columnSum += table[i][j];
        }
        columnSumArr.push(columnSum);
    }
    console.log(' Sum of Columns: ' + columnSumArr.toString().split(',').join(' '));

    let totalTableSum = 0;

    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            totalTableSum += i * j;
        }
    }
    console.log(' Total Sum of Table: ' + totalTableSum);
}

multiplicationTable(10);