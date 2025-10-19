const fs = require('fs-extra');
const path = require('path');

//Создать папку
fs.mkdirSync('Folder-1');

//Создать текстовый файл в созданной папке
fs.createFileSync('Folder-1/file.txt');

//создать вторую папку
fs.mkdirSync('Folder-2');

//Переместить файл из первой папки во вторую
fs.moveSync('/Folder-1/file.txt', '/Folder-2', { overwrite: true })

//Создание третью папку
fs.mkdirSync('Folder-3');

//скопировать файл из второй в третью папку
fs.moveSync('/Folder-2/file.txt', '/Folder-3', { overwrite: true })

//Удалить файлы
fs.removeSync('/Folder-3/file.txt')

//удалить все папки
fs.removeSync('./Folder-1');
fs.removeSync('./Folder-2');
fs.removeSync('./Folder-3');