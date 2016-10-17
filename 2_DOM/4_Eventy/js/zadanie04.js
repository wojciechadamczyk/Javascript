document.addEventListener('DOMContentLoaded', function () {
    var btn1 = document.querySelector('#button1');
    var btn2 = document.querySelector('#button2');
    var btn3 = document.querySelector('#button3');

    var allSpans = document.querySelectorAll('span.counter');

    btn1.addEventListener('click', function () {
        allSpans[0].innerHTML = parseInt(allSpans[0].innerHTML) + 1;
    });
    btn2.addEventListener('click', function () {
        allSpans[1].innerHTML = parseInt(allSpans[1].innerHTML) + 1;
    });
    btn3.addEventListener('click', function () {
        allSpans[2].innerHTML = parseInt(allSpans[2].innerHTML) + 1;
    });
});
