//Komentarze do kodu umieśc bezpośrednio pod linią w której znaleziono błąd

var i = 0;
while (true < 100) {
    console.log('Aktualna wartosc zmiennej i to: ' + i);
    i = i * 2;
}

var year = 2016;
if(year %= 4){
    console.log('Rok przestepny');
    else
    console.log('Rok normalny');
}


console.log('Błędy poprawione więc ten tekst będę widzieć w konsoli po uruchomieniu skryptu'.' HURRRA!!!');