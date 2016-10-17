document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    var email = document.getElementById('email'); // do zmiennych poszczegolne elementy formularza przypisalismy
    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var agree = document.getElementById('agree');

    form.addEventListener('submit', function (event) { //dodalismy event ktory zostanie wykonany po wyslaniu formularza
        if (email.value.indexOf('@') === -1) {
            event.preventDefault();
            console.log('Mail nie posiada @');
        }
        if (name.value.length <= 5) {
            event.preventDefault();
            console.log('Imie ma mniej niz 6 znakow');
        }
        if (surname.value.length <= 5) { //sprawdzamy czy nazwisko ma 5 lub wiecej znakow
            event.preventDefault();
            console.log('Nazwisko ma mniej niz 6 znakow');
        }
        if(pass1.value != pass2.value || pass1.value.length ===0) {
            event.preventDefault();
            console.log('Hasla sa rozne lub maja 0 znakow dluosci');
        }
        if (!agree.checked) { //sprawdzamy czy zaznaczony jest checkbox
            event.preventDefault();
            console.log('zaznacz checkbox');
        }

    });
});
