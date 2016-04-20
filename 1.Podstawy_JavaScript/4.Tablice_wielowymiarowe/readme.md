# JavaScript - Ćwiczenia - Tablice wielowymiarowe

Zadania wprowadzające do korzystania z tablic wielowymiarowych.
Ćwiczenia powinny być rozwiązane w pliku app.js.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny i dobrze sformatowany kod.

## Ćwiczenia do zrobienia z wykładowcą

### Ćwiczenie 1
Napisz funkcję ```checkArray```, która bedzie przyjmować tablicę dwuwymiarową z liczbami całkowitymi jako argument.
Funkcja ma stworzyć i zwrócić nową tablicę w której kolejnymi elementami będą wartości boolean ```true``` lub ```false``` zależne od tego czy **każdy** element tablicy drugiego wymiaru jest parzysty.
```
Przykładowo:
-> input
var arr = [];
arr[0]=[3, 4, 56, 773, 1];
arr[1]=[7, 12, 0, 98, 34, 381];
arr[2]=[12, 66, 96, 54, 10];

output ->
arrayCheck[0] ma mieć wartość false
arrayCheck[1] ma mieć wartość false
arrayCheck[2] ma mieć wartość true
```
## Ćwiczenia do pracy samodzielnej

### Ćwiczenie 2
Napisz funkcje ```print2DArray``` która będzie przyjmować tablicę dwuwymiarową jako argument. Nastepnie funkcja ta ma wypisać w konsoli zawartość tej tablicy.

### Ćwiczenie 3
Stwórz ręcznie 2 wymiarową tablicę i przetestuj ją na rozwiązaniu zadania 1.

### Ćwiczenie 4
Napisz funckje ```create2DArray``` która przyjmuje 2 liczby całkowite ```rows``` i ```columns```. Zadaniem funkcji jest stworzenie i zwrócenie 2 wymiarowej tablicy o podanej ilości rzędów i kolumn. Każda komórka ma być wypełniona kolejną liczbą całkowitą. Nastepnie użyj rozwiązania z ćwiczenie 3 do wypisania tej tablicy w konsoli.

Hint: Musisz użyć petli zagnieżdżonych.
