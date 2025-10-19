const fs = require('fs-extra');

//Создать папку
fs.mkdirSync('Folder-1');

//Создать текстовый файл в созданной папке
fs.createFileSync('lesson-3/Folder-1/file-1.txt');

//создать вторую папку
fs.mkdirSync('Folder-2');

//Переместить файл из первой папки во вторую
fs.moveSync('/lesson-3/Folder-1/file-1.txt', '/lesson-3/Folder-2', { overwrite: true })

//Создание третью папку
fs.mkdirSync('Folder-3');

//скопировать файл из второй в третью папку
fs.moveSync('/lesson-3/Folder-2/file-1.txt', '/lesson-3/Folder-3', { overwrite: true })

//Удалить файлы
fs.removeSync('/lesson-3/Folder-3/file-1.txt')

//удалить все папки
fs.removeSync('./lesson-3/Folder-1');
fs.removeSync('./lesson-3/Folder-2');
fs.removeSync('./lesson-3/Folder-3');