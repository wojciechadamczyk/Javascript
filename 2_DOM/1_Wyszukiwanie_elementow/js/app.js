/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function () {
    /*
     Poniżej napisz kod rozwiązujący zadania
     */
    var articleFirst = document.querySelector('article.first'); //dostajemy pojedynczy element bo query selector!
    //var allH1 = articleFirst.getElementsByTagName('h1'); //tablica
    var allH1 = articleFirst.querySelectorAll('h1'); //tez tablica
    console.log(allH1.length);

    var allOferts = articleFirst.getElementsByClassName('oferts'); // tablica
    //var allOferts=articleFirst.querySelectorAll('.oferts'); //selektor css i tablica

    for (var i = 0; i < allOferts.length; i++) {
        console.log(allOferts[i]);
    }

    var allDivs = articleFirst.querySelectorAll('div'); //tablica !
    for (var j = 0; j < allDivs.length; j++) {
        console.log(allDivs[j]);
    }

});