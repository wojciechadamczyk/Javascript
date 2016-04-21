# JacaScript - Cwiczenia DOM - Wyszukiwanie elementów

Zadania z wyszukiwania elementów na stronie HTML.
Ćwiczenia powinny być rozwiązane w pliku app.js. 
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny i dobrze sformatowany kod. 

## Ćwiczenia do zrobienia z wykładowcą

### Ćwiczenie 1
Wyszukaj na stronie i zapisz do odpowiednio nazwanej zmiennej tag ```article``` o klasie ```first```. Następnie:
  1. Wypisz w konsoli, ile elementów ```h1``` znajduje się w tym tagu.
  2. Wyszukaj w nim wszystkie elementy o klasie ```oferts```. Przeiteruj je i wypisz nazwy ich tagów w konsoli.
  3. Wyszukaj w nim wszystkie elementy ```div```. Przeiteruj je i wypisz nazwy ich klas w konsoli.
  4. Każdemu elementowi ```div``` z punktu 3 ustaw klasę ```exercise```.

Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiednie elementy.
Pamiętaj, żeby używać funkcji, które wyszukują **wiele** elementów. 
Za każdym razem wypisz w konsoli, ile jest znalezionych przez ciebie elementów.

### Ćwiczenie 2
Wyszukaj na stronie i zapisz do zmiennej korzystając z selektora CSS element na stronie, który posiada id ```exercise2```, znajduje się on w menu.
Nie wolno użyć Ci bezpośredniego odwołania do klasy lub id jakiegokolwiek elementu.
Użyj selektorów potomków, dzieci, n-tych dzieci itp.

## Ćwiczenia do pracy samodzielnej

### Ćwiczenie 3
Wyszukaj na stronie i zapisz do odpowiednio nazwanych zmiennych nastepujące elementy:
  1. Element o id ```home``` (na dwa sposoby),
  2. Pierwszy element li **nie** posiadający atrybutu ```data-direction```,
  3. Pierwszy element o klasie ```block```,

Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiedni element.
Pamiętaj, żeby używać funkcji, które wyszukują tylko **jeden** element. 


### Ćwiczenie 4
Wyszukaj na stronie i zapisz do odpowiednio nazwanych zmiennych nastepujące elementy:
  1. Wszystkie elementy ```li```, które znajdują się w tagu ```nav```,
  2. Wszystkie paragrafy należące do wszystkich elementów ```div```,
  3. Wszystkie divy znajdujące się w tagu ```article```,

Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiednie elementy.
Pamiętaj, żeby używać funkcji, które wyszukują **wiele** elementów. 
Za każdym razem wypisz w konsoli, ile jest znalezionych przez ciebie elementów.


### Ćwiczenie dodatkowe
Znajdź wszystkie elementy li, które znajdują się w tagu nav. Następnie nadaj każdemu elementowi li atrybut ```data-direction = „top”```, ale tylko dla tych elementów, które nie posiadają ustawionego tego atrybutu.
