# Webnest - Product Requirements Document

## 1. Product Objective
Webnest is a high-conversion, productized storefront agency designed to provide functional, fast e-commerce setups for campus entrepreneurs and local retail boutiques within 48 hours. It eliminates the friction of WhatsApp DM sales by structuring the intake and checkout process.

## 2. Target Audience
Student entrepreneurs (bakers, thrifters, gadget sellers) and local retail owners who require a structured digital presence without monthly SaaS fees.

## 3. Core Features & User Flow
*   **1. The Hook:** A high-impact landing section promising a fully operational store for ₦10,000 in 48 hours, emphasizing zero monthly fees.
*   **2. Proof Inspection (Showcase):** A visual grid displaying live case studies (Elikar and Light Pen Hub) highlighting real metrics.
*   **3. Dynamic Pricing Calculator:** An interactive pricing engine allowing users to select the Base Package (₦10,000) and toggle add-ons (Cart drawer, Order tracking, CMS, Custom domain, Analytics), or select the Pro Bundle (₦35,000).
*   **4. Structured Intake Form:** A checkout interface capturing the vendor's Name, Brand Name, Niche, WhatsApp/Phone, Email, and specific store requirements.
*   **5. Dual Dispatch Checkout:**
    *   *Email Payload:* Background AJAX push to Formsubmit containing the full order details and a unique Reference ID.
    *   *WhatsApp Routing:* Automatic redirection to a parameterized `wa.me` link with a summarized order brief and Reference ID to finalize the transaction.
*   **6. Client-Side Ledger:** Order history is saved to the browser's `localStorage` for returning user reference.
