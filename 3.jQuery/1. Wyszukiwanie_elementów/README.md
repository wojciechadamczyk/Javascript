# jQuery - Wyszukiwanie elementów

Ćwiczenia powinny być rozwiązane w pliku app.js. 
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny i dobrze sformatowany kod. 

Twój kod musi się znaleźć w miejscu gdzie będziesz mieć pewność, że drzewo DOM jest już załadowane.

## Ćwiczenia do zrobienia z wykładowcą

### Ćwiczenie 1
Dołącz do swojego pliku bibliotekę jQuery. W pliku app.js umieść kod sprawdzający czy DOM został załadowany.

### Ćwiczenie 2
Zapoznaj się z plikiem index.html oraz odpowiednimi css-ami . Dodaj klasę ```borderClass``` do każdego elementu ```li``` w elemencie ```section class="main"```. Pamiętaj, aby wykonać to w odpowiedniej funkcji.
Dodatkowo znajdź **wszytskie** elementy o klasie ```showMore``` i zmień kolor czcionki ```css()``` na niebieski ale tylko **pierwszemu** z nich.

## Ćwiczenia do pracy samodzielnej

### Ćwiczenie 3
Ustaw każdemu elementowi ```li``` (tylko tych w elemencie ```section class="main"```) dodatkowe trzy klasy, które znajdziesz w pliku css pod odpowiednim komentarzem. (Łącznie z poprzednią klasą ```borderClass```). Ustaw także dla tych elementów funkcję ```fadeOut``` z bardzo wolnym zanikaniem oraz funkcje ```fadeIn``` z bardzo wolnym pojawianiem się.

Pamiętaj, aby wykonać to w odpowiedniej funkcji.

Czy widzisz nadmiarowość w swoim kodzie?

### Ćwiczenie 4
Za pomocą jQuery:

 1. Spróbuj wyszukać wszystkie linki i ustawić im czerwony kolor za pomocą funkcji ```css()```.
 2. Zmodyfikuj kod tak, aby kolor czerwony miały linki tylko z menu.
 3. Dodaj klasę ```.redLinks``` w pliku styli (ustaw w niej kolor tekstu na czerwony ) i za pomocą ```addClass``` nadaj ją elementom ```li``` w menu (Zmodyfikuj kod z punktu 1 i 2))
 4. Spraw, aby pierwszy element menu miał większą czcionkę niz inne.  Stwórz odpowiednią klasę w pliku style.css.

### Ćwiczenie 5
Sprawdź czy nagłówek ```H1``` ma klasę ```creepyHeader``` jeśli nie, to dodaj ją do tego elementu. W przeciwnym przypadku wypisz w konsoli, że nagłówek ma już taką klasę.