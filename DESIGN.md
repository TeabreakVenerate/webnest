# Webnest - Design System (Covenant Neobrutalism)

## 1. Visual Aesthetics & Philosophy
The UI relies on Hard-Shadow Structuralism. It must feel clinical, authoritative, and completely devoid of modern web "softness."

## 2. Color Palette
*   **Canvas Background:** Clinical White (`#FFFFFF`) - Used for all primary backgrounds to ensure maximum contrast.
*   **Structural Elements:** Covenant Blue (`#0F3D70`) - Used for all borders, hard shadows, and typography headers.
*   **Action Elements:** High-Visibility Yellow (`#FFC107`) - Used exclusively for primary CTAs and interactive toggles. Text on these elements must be Covenant Blue.

## 3. Typography
*   **Font Family:** `Inter` (via `next/font/google`).
*   **Headers:** Bold, aggressive, Covenant Blue (`#0F3D70`).
*   **Body:** Dark, highly legible weights.

## 4. Component Styling Rules (Tailwind)
*   **Borders:** All structural components (cards, inputs, buttons) must feature sharp 2px geometric borders: `border-2 border-[#0F3D70]`.
*   **Shadows:** STRICTLY NO SOFT BLURRED SHADOWS. All shadows must be solid directional block shadows:
    *   Standard elements: `shadow-[4px_4px_0_0_#0F3D70]`
    *   Hover/Active states: `shadow-[6px_6px_0_0_#0F3D70]` with a slight negative translation (`-translate-y-0.5 -translate-x-0.5`).
*   **Transitions:** Fast, snappy transitions (`transition-all duration-150 ease-out`).
