# Webnest - Design System (Covenant Neobrutalism)

## 1. Visual Aesthetics & Philosophy
Hard-Shadow Structuralism. Clinical, authoritative, and completely devoid of modern web "softness" or floating interactive widgets.

## 2. Color Palette
*   **Canvas Background:** Clinical White (`#FFFFFF`).
*   **Structural Elements:** Covenant Blue (`#0F3D70`) for borders, hard shadows, and headers.
*   **Action Elements:** High-Visibility Yellow (`#FFC107`) for CTAs. Text on these elements must be Covenant Blue.

## 3. Typography
*   **Font Family:** `Inter` (via `next/font/google`).
*   **Headers:** Bold, Covenant Blue (`#0F3D70`).

## 4. Component Styling Rules (Tailwind)
*   **Borders:** Sharp 2px geometric borders: `border-2 border-[#0F3D70]`.
*   **Shadows:** STRICTLY NO SOFT BLURRED SHADOWS.
    *   Standard elements: `shadow-[4px_4px_0_0_#0F3D70]`
    *   Hover/Active states: `shadow-[6px_6px_0_0_#0F3D70]` with `-translate-y-0.5 -translate-x-0.5`.
