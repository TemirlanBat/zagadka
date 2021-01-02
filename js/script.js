/* 
let numberOfFilms; 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false, 
    start: function(){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    let i = 0;
    while(i<2){
    const a = prompt('Один из последних просмотренных фильмов?', '');
    const b = prompt('Насколько оцените его?', '');
    i++;
   if(a != null && b != null && a.length < 50 && a != '' && b != ''){
        console.log('Well done');
        personalMovieDB.movies[a] = b;
   } else {
        console.log('You have mistake');
        i--;
    }
    }
    },
    rememberMyFilms: function(){
        if(personalMovieDB.count < 10){
            console.log('Просмотрено довольно мало фильмов');
        }
        else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Вы классический киноман');
        }
        else if(personalMovieDB.count>=30){
            console.log('Вы киноман');
        } 
        else{
            console.log("Произошла ошибка");
        }
        console.log(personalMovieDB);    
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i<2; i++){
            let genres = prompt(`Введите Ваши любимые жанры через запятую`).toLowerCase();
            if(genres != null || genres != ''){
                personalMovieDB.genres = genres.split(", ");
                personalMovieDB.genres.sort();
            } else { 
                i--;
            }    
        }
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Любимый жанр №${index + 1} - это ${item}`);
        });
    },
    toogleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

/* personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
alert( null || 2 && 3 || 4 ); */

const submit = document.querySelector('.submit');
let answer = document.querySelector('.answer');
const correct = document.querySelector('.correct_answer');
const incorrect = document.querySelector('.incorrect_answer');
submit.onclick = function() {
        if(answer.value == 'Зеркало' || answer.value == 'зеркало' || answer.value == 'зеркало '|| answer.value == 'Зеркало '){
            correct.style.cssText = 'display: block;';
        }
        else{
            incorrect.style.cssText = 'display: block';
        }
    };
