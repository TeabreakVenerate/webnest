# Webnest - Technical Architecture

## 1. Core Framework & Hosting
*   **Framework:** Next.js (App Router).
*   **Hosting:** Vercel (zero-cost static deployment).

## 2. Styling
*   **Engine:** Tailwind CSS with hard-coded Neobrutalist shadow extensions.

## 3. Data & Authentication
*   **Database/Auth:** None.
*   **State Persistence:** Client-side `localStorage`.

## 4. External Integrations
*   **Email Dispatch:** Formsubmit via AJAX.
*   **Messaging:** WhatsApp parameterized URL API.
