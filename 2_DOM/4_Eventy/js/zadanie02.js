/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () { //ladujemy java DOM dodajemy funkcje
    var parentDiv = document.querySelector('#bubblingButtons'); // pobieramy pojedynczy element o id bubblingButtons

    parentDiv.addEventListener('click', function (event) { //do diva dopinamy event mowiacy ze jak ktos w niego kliknie wywolujemy funkcje,
//        console.log(event.target);
//        console.log(event.currentTarget);
        if (event.target.tagName === 'BUTTON') { //klikajac w button w targecie siedzi klikniecie a currenttarget jest podpiety do bubblingbuttons jezeli to jest button robimy nastepujace rzeczy
            var currCounter = parseInt(event.target.dataset.counter);
            event.target.dataset.counter = currCounter + 1;
//            console.log('currCounter');

        }
    });

});