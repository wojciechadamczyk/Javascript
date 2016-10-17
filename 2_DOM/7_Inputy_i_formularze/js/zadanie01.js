document.addEventListener('DOMContentLoaded', function () {
    var inputCardNr = document.getElementById('card'); //input
    var inputCardType = document.getElementById('type'); //div 

    inputCardNr.addEventListener('keyup', function () {
        //pobieramy aktualna wartosc inputa
        var cardNr = inputCardNr.value; // value bo to jest input zawsze tak robimy
        if(isVisa(cardNr)) {
            inputCardType.innerHTML = 'VISA';
        } else if (isMC(cardNr)) {
            inputCardType.innerHTML = 'MC';
        } else if (isAE(cardNr)) {
            inputCardType.innerHTML = 'AE';
        } else {
            inputCardType.innerHTML = '--';
        }

    });

    function isVisa(nr) {
        if (nr.length >= 13 && nr.length <= 16 && parseInt(nr[0]) === 4) {
            return true;
        }
        return false;
    }

    function isMC(nr) {
        if (nr.length === 16 && parseInt(nr[0]) === 5) { // rowno 16 cyfr i zaczyna sie od cyfry 5
            return true;
        }
        return false;
    }
    function isAE(nr) {
        if (nr.length === 15 && parseint(nr[0]) === 3 && (parseInt(nr[1]) === 4 || parseInt(nr[1]) === 7)) {
            return true; // rowno 15 cyfr zaczyna sie od cyfry 3 a kolejna 4 lub 7
        }
        return false;
    }
});
