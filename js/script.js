/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// 'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",


    ]
};
let promo = document.querySelectorAll(".promo__adv img")

promo.forEach(elen => {

    elen.remove()
})
function GEtBG() {
    let promo__interactive_list = document.querySelector(`.promo__interactive-list`)

    let text_bg = document.querySelector(`.promo__genre`)
    text_bg.innerHTML = `драма`



    movieDB.movies.filter(item => {

        let promo__interactive_item = document.createElement(`li`)
        let deleteOne = document.createElement(`div`)
        promo__interactive_item.classList.add(`promo__interactive-item`)
        deleteOne.classList.add(`delete`)


        promo__interactive_list.append(promo__interactive_item)
        promo__interactive_item.append(deleteOne)

        promo__interactive_item.innerHTML = item
        promo__interactive_item.onclick = () => {
            i = movieDB.movies.indexOf(item);
            if (i >= 0) {
                movieDB.movies.splice(i, 1);
                promo__interactive_item.innerHTML = ``
            }

        }


    })


}
function getNArry() {

    inputText = document.getElementsByClassName(`adding__input`).value;
    movieDB.movies.push(inputText);

}
GEtBG()
getNArry()

