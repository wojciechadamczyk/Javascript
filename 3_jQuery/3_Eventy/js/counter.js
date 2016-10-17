$(function () {
    var textArea = $('#counterField');
    var counterNumber = $('#countChars');

    textArea.on('keyup', function () { //pobieramy wartosc naszego textarea po kliknieciu
        var currentVal = textArea.val(); //.value 

        var len = currentVal.length;
        //innerHTML ->html();
        //innerTEXT ->text();
        if (len > 100) {
            var newVal = currentVal.substring(0, 100);
            textArea.val(newVal);
            len = 100;

        }


        counterNumber.text(len);
        
        if(len<=33){
            counterNumber.css('color', 'green');
        } else if(len<=66) {
            counterNumber.css('color', 'yellow');
        } else {
            counterNumber.css('color', 'red');
        }

    });
});