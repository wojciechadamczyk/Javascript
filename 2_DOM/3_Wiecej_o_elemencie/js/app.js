/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function () {
    /*
     Poniżej napisz kod rozwiązujący zadania
     */

//    var ex1 = document.querySelector('div.exercise.ex1'); //div o klasie exercise o klasie ex1
//
//    var li = ex1.querySelectorAll('li:not([data-direction])');//tablica
//    for (var i = 0; i < li.length; i++) {
//        li[i].dataset.direction = 'up';
////        li[i].setAttribute('data-direction','up'); //drugi sposob
//    }
//
//    var each2 = ex1.querySelectorAll('li:nth-child(even)'); //tablica
//    for (var i = 0; i < each2.length; i++) {
//        each2[i].style.backgroundColor = 'green';
//
//    }
//
//    var liFifth = ex1.querySelector('li:nth-child(5)'); //5 elementowi dajemy klase big
//    liFifth.classList.add('big');
//
//    var every3 = ex1.querySelectorAll('li:nth-child(3n)'); // co trzeci
//    for (var i = 0; i < every3.length; i++) {
//        every3[i].style.textDecoration = 'underline';
//    }

//    var ex2 = document.querySelector('div.exercise.ex2'); //zadanie2
//    
//    var allOption = ex2.querySelectorAll('option'); //tablica
//    for (var i = 0; i < allOption.length; i++) {
//        var singleOption = allOption[i]; //pojedyncza opcja
//        var val = singleOption.getAttribute('value');
//        singleOption.innerHTML = val;
//        singleOption.dataset.year = parseInt(val,10) + 20;
//    }

var ex3 = document.querySelector('div.exercise.ex3'); // zadanie 3

var aTags = ex3.querySelectorAll('div a');
console.log(aTags);

aTags[0].innerText = "Chrome"; // poprawiam nazwe wyswietlana linku
aTags[1].setAttribute('href', "https://www.microsoft.com/pl-pl/windows/microsoft-edge"); //poprawiamy link
aTags[2].innerText = "Firefox";
aTags[2].setAttribute('href', "https://www.mozilla.org/pl/firefox/new/");
 //aTags[0] - chrome aTags[1] - edge aTags[2] firefox
var chrome = ex3.querySelector('div.chrome');
chrome.style.width = "100px";

var mEdge = ex3.querySelector('div.edge');
mEdge.style.backgroundImage = 'url("assets/img/edge.png")';

var fireFox = ex3.querySelector('div.firefox');
fireFox.style.backgroundImage = 'url("assets/img/firefox.png")';



//var ex4 = document.querySelector('div.exercise.ex4'); //zadanie 4 

});
