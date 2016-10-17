document.addEventListener('DOMContentLoaded', function () {
    var divs = document.querySelectorAll('.listContainer');

    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('mouseover', function () {
            this.classList.add('hovered');
            var li = this.firstElementChild.children;
            for (var j = 0; j < li.length; j++) {
                li[j].style.backgroundColor = 'green';
            }
            li[0].style.backgroundColor = 'red';
            li[li.length - 1].style.backgroundColor = 'blue';
        });

    }
});
