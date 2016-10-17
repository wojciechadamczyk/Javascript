$(function () {
    var inputUserName = $('#addUser');
    var inputAge = $('#age');
    var submit = $('input[type=submit]');

    submit.on('click', function () { //po klikniecie w submit pobieramy wartosci wpisane w inputy
        var name = inputUserName.val();
        var age = inputAge.val();

        var newLi = $('<li data-age=" ' + age + '">' + name + '</li>'); //nowy element jeszcze nie wstawiony do drzewa DOM
        age = parseInt(age, 10);

        if (age <= 15) {
            newLi.css('color', 'green');
        } else if (age <= 40) {
            newLi.css('color', 'blue');
        } else {
            newLi.css('color', 'brown');
        }

        $('ul.main').append(newLi);

        //newLi.appendTo($('ul.main'));
    });
});