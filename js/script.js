/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo__adv = document.querySelectorAll('.promo__adv');

for (let i = 0; i < promo__adv.length; i++) {
    promo__adv[i].remove();
};

const promo__genre = document.querySelectorAll('.promo__genre');
promo__genre[0].innerHTML = 'ДРАМА';

const promo__bg = document.querySelectorAll('.promo__bg');
console.log(promo__bg);

