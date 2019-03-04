--
-- Baza danych: projekt_php
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli uczniowie
--

CREATE TABLE uczniowie (
  id INTEGER PRIMARY KEY,
  imie TEXT NOT NULL,
  nazwisko TEXT NOT NULL,
  klasa TEXT,
  telefon INTEGER
);

--
-- Zrzut danych tabeli uczniowie
--

INSERT INTO "uczniowie" (id, imie, nazwisko, klasa, telefon) VALUES
(3, 'Jakub', 'Koralewski', '3d', 66666666);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli uzytkownicy
--

CREATE TABLE uzytkownicy (
  id INTEGER PRIMARY KEY,
  login TEXT NOT NULL,
  haslo TEXT NOT NULL
);

--
-- Zrzut danych tabeli uzytkownicy
--

INSERT INTO "uzytkownicy" (id, login, haslo) VALUES
(0, 'admin', 'admin');
