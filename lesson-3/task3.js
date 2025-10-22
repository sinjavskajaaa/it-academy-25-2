const fs = require('fs-extra');

//Создать папку
    fs.mkdirpSync('./Folder-1');

//Создать текстовый файл в созданной папке
    fs.createFileSync('./Folder-1/file.txt');

//Cоздать вторую папку
    fs.mkdirpSync('./Folder-2');

//Переместить файл из первой папки во вторую
    fs.moveSync('./Folder-1/file.txt', './Folder-2/file.txt', { move: true })

//Создание третью папку
    fs.mkdirpSync('./Folder-3');

//Cкопировать файл из второй в третью папку
    fs.moveSync('./Folder-2/file.txt', './Folder-3/file.txt', { move: true })

//Удалить файлы
    fs.removeSync('./Folder-3/file.txt')

//Yдалить все папки
    fs.removeSync('./Folder-1');
    fs.removeSync('./Folder-2');
    fs.removeSync('./Folder-3');
