# rekrutacja-ah

## Budowanie projektu

```bash
# zainstaluj zależności
$ yarn install

# uruchom serwer z hot reload na localhost:3000
$ yarn dev

# zbuduj projekt produkcyjny i uruchom serwer
$ yarn build
$ yarn start
```

## Notatka od autora

Dodałem kilka funkcjonalności spoza pierwotnego zadania, aby dopełnić MVP projektu:

- loader: Dodałem loader wyświtlany podczas ładowania danych z API na stronie losowania Chuck-a, aby poprawić doświadczenie użytkownika,
- obsługa błędów: Dodałem mechanizmy obsługi błędów w przypadku niepowodzenia zapytań API, aby użytkownik był informowany o problemach z ładowaniem Chuck-ów,
- optymalizacja obrazów tła: W celu przyspieszenia ładowania FCP (first contentful paint) na startcie wstrzykiwany jest background w gorszej jakości. W tle ładuje się ten w wyższej jakości, po czym go zastępuje,
- animacja przejścia tła: Zgodnie z zadaniem tło wyświetla się w dwóch położeniach (zależnie czy korzystamy z protrait czy landscape view), aby unkinąć "skakania" obrazu zastosowałem tranzycję ease-in-out,
- reaktywość: Wszysstkie przyciski mają stany na hover, a po dodaniu Chuck-a do ulubionych wystrzeliwuje confetti (nie mogłem się oprzeć :D),
- jeśli użytkownik ma Chuck-a w swojej kolekcji ulubionych to nie zobaczy przycisku pinezki.

Wykonując zadanie przyszło mi do głowy kilka funkcjonalności, które można byłoby wprowadzić w kolejnych iteracjach:

- dodanie strony błędu 404,
- obsługa usuwania z ulubionych, np. wyświetlając ikonę przekreślonej pinezki przy wylosowaniu Chuck-a, który znajduje się już na liście ulubionych,
- autoryzacja użytkowników, żeby mogli zapisywać Chuck-i w bazie danych (chociaż to już raczej nie na MVP :D).
