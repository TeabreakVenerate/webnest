# Webnest - Technical Architecture

## 1. Core Framework & Hosting
*   **Framework:** Next.js (App Router, static/client-first rendering).
*   **Language:** TypeScript.
*   **Hosting:** Vercel (Edge-optimized, zero-cost static deployment).

## 2. Styling
*   **Engine:** Tailwind CSS.
*   **Configuration:** Custom extensions in `tailwind.config.ts` to support hard-coded Neobrutalist shadow classes and exact hex codes.

## 3. Data & Authentication (The Elikar Engine)
*   **Database:** None. (Zero Supabase/Prisma overhead).
*   **Authentication:** None. (Zero Clerk overhead).
*   **State Persistence:** Client-side `localStorage` exclusively for order ledger tracking.

## 4. External Integrations
*   **Email Dispatch:** Formsubmit via AJAX (`https://formsubmit.co/ajax/YOUR_EMAIL`).
*   **Direct Messaging:** WhatsApp parameterized URL API (`https://wa.me/234XXXXXXXXXX?text=...`).
