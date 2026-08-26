# SPK — Studencki Portal Komunikacyjny

Fullstackowa platforma webowa ułatwiająca organizację i wymianę materiałów w grupie studenckiej.

## Kluczowe Funkcjonalności

* **Autoryzacja & Bezpieczeństwo:**
  * Logowanie przy użyciu konta Google (Google OAuth / Supabase Auth).
  * Zabezpieczenie zasobów — edycja i usuwanie wydarzeń/postów/plików ograniczone wyłącznie do ich autorów.
* **Dashboard (Pulpit Główny):**
  * Szybki podgląd nadchodzących wydarzeń z kalendarza na dziś i jutro.
  * Podgląd najnowszego posta z tablicy.
* **Interaktywny Kalendarz:**
  * Integracja z `React Day Picker`.
  * Wizualny wskaźnik dni z zaplanowanymi wydarzeniami (zmiana koloru akcentu).
  * Modal podglądu details/godzin po dwukliku z opcją zarządzania wpisem.
* **Tablica Postów:**
  * System publikacji wpisów z automatycznym przypisaniem avataru i danych autora z konta Google.
* **Chmura Plików (Storage):**
  * Dodawanie i pobieranie materiałów edukacyjnych.
  * **Sanityzacja nazw plików:** Autorski filtr przmapowujący polskie znaki diakrytyczne na odpowiedniki ASCII (np. `ą` -> `a`), eliminujący błędy kodowania w Supabase Storage.

## Stack Technologiczny

* **Frontend:** Next.js, React, Tailwind CSS, React Day Picker
* **Backend & Baza Danych:** Supabase (Database & Storage), Server Actions / API Routes
* **Autoryzacja:** Google OAuth via Supabase Auth
