# jQuery - Eventy

Ćwiczenia powinny być rozwiązane w pliku app.js. 
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny i dobrze sformatowany kod. 

## Ćwiczenia do zrobienia z wykładowcą

### Ćwiczenie 1
Znajdź w pliku index.html 3 buttony w elemencie o klasie ```hero-buttons```. Stwórz funkcję, w której wykonaj następujące czynności:
 1. ustaw każdy z 3 button-ów pod inną zmienną,
 2. dla elementu pierwszego ustaw event click, który po kliknięciu wyświetli w consoli napis (kliknięto mnie),
 3. dla elementu drugiego ustaw event click, który po kliknięciu wyświetli w consoli napis (kliknięto mnie, ale już się drugi raz nie dam kliknąć),
 4. dla trzeciego wywołaj metodę off, która odczepi wszystkie eventy z poprzednich butonów.

Przetestuj działanie Twojej funkcji.

### Ćwiczenie 2
W pliku counter.html znajduje się pusty formularz, umieść w nim pole textarea.
Poniżej pola ma znaleźć się licznik wpisanych aktualnie znaków w to pole np. ```63/100```, licznik ma zwiększać i zmniejszać swoją wartość po każdym wpisanym/usuniętym znaku.
Zablokuj możliwość wpisania więcej niż 100 znaków w to pole.

Dodatkowo: Kolor napisu z ilością wpisanych znaków ma mieć kolor w zależności od ilości wpisanych znaków:
 1. Zielony 0-33
 2. Żółty 34-66
 3. Czerwony 67-100
 
 Zadanie rozwiąż w pliku counter.js i pamietaj o podpięciu jQuery.

## Ćwiczenia do pracy samodzielnej

### Ćwiczenie 3
Znajdź w pliku index.html sekcję z klasą ```superhero-description```, a nastepnie napisz funkcję, w której:
 1. ukryj domyślnie wszystkie elementy ```dd```.
 2. po kliknięciu w element ```dt``` spraw, by elementy ```dd``` rozwijały się jeśli są ukryte, a zwijały jeśli są widoczne.

### Ćwiczenie 4
W pliku html znajdź formularz z klasą ```login```. W pliku app.js stwórz funkcję, która będzie reagować na wciśnięcie przycisku ```show-hide-btn```. Na początek ustaw event tak, aby po wciśnięciu wypisał w konsoli ```dzialam```. Nastepnie wypełnij funkcję w taki sposób, aby sprawdzała jakiego typu jest element przechowujący hasło. Jeśli password, zmień type na ```text```. Jeśli text, zmień na password.

### Ćwiczenie 5
Po najechaniu myszką na element w menu, wypisz tekst ```Hura``` w consoli.

### Ćwiczenie 6
Znajdź w pliku index.html formularz o klasie ```login```, a nastepnie napisz funkcję, w której:
 1. ustaw lekki cień wewnętrzny po kliknięciu wewnątrz inputa
 2. zmień background-color na szary po wyjściu kursorem z pola input
