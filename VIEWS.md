# Dashboard

- '/'
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  - listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- '/login'
  - pola na login i hasło
  - guzik do logowania (tymczasowo - link do dashboardu)

# Widok dostępności stolików

- '/tables'
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń (eventów)
    - każda kolumna = 1 stolik
    - każdy wiersz = 30 min
    - ma przypominać widok tygodnia w kalendarzy Google, gdzie w kolumnach zamiast dni są różne stoliki
    - po kliknięciu w rezerwację lub event, przechodzimy na stronę szczegółów
- '/tables/booking/:id'
  - zawiera wszystkie informacje dotyczące rezerwacji
  - umożliwia edycję i zapisanie zmian
- '/tables/booking/new'
  - analogicznie do powyższej, bez początkowych informacji
- '/tables/events/:id'
  - analogicznie do powyższej, tylko dla eventów
- '/tables/events/new'
  - analogicznie do powyższej, dla eventów - bez początkowych informacji


# Widok kelnera

- '/waiter'
  - tabela
    - w wierszach stoliki
    - w kolumnach różne informacje(status, czas od ostatniej aktywności)
    - w ostatniej kolumnie - dostępne akcje dla danego stolika
- '/waiter/order/new'
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwota zamówienia
- '/waiter/order/:id'
  - jak powyższa

# Widok kuchni

- '/kitchen'
  - wyświetla listę zamówień w kolejności ich złożenia
  - list musi zawierać:
    - numer stolika (lub zamówienia zdalnego)
    - pełne informacje dot. zamówionych dań
  - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane