function mathInfo() {
    var randomNumber = Math.floor(Math.random() * 100);
    //poniżej napisz rozwiązanie zadania
    if (randomNumber % 2 ==0) {
        console.log('Liczba ' + randomNumber + ' jast parzysta');
    } else {
        console.log('Liczba ' + randomNumber + ' jest nieparzysta');
    }

console.log('Liczba ' + randomNumber + ' jest ' + (randomNumber % 2 == 0 ? '' : 'nie') + 'parzysta');

var div = '';
for (var i = 1; i <= randomNumber / 2; i++) {
    if (randomNumber % i ==0) {
        div += i + '';
    }
}
console.log('Dzielniki '+div);
}
//to wywołanie ma spowodować wyświetlenie w konsoli informacji z zadania
matchInfo();
