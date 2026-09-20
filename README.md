# 🐘 Ganpati Bappa Business Drishti - Mahant Software

An authentic, human-crafted Indian festive web experience and business audit tool designed for business networking groups (GBS / BNI / Rotary) and Indian trade enterprises.

Delivering divine blessings, evaluating their enterprise with cultural warmth and humor, pinpointing an industry-specific **Digital Vighna**, and delivering the punchline:

> **🐘 Bappa says:**  
> *“Business ke vighna main dekh lunga... Digital wale Yash ko de do!” 🙏*  
> **Mahant Software**

---

## 🌟 Key Features

1. **Human-Crafted Indian Festive Aesthetic (Shubh Patrika)**:
   - Warm handcrafted ivory parchment (`#FAF7F2`, `#FFFDF9`), royal kumkum crimson (`#751113`), and antique gold leaf accents.
   - Respectful sacred deity medallion framed inside a traditional gold temple arch flanked by twin brass Diyas.
   - Clean, bespoke SVG vector iconography (no raw emojis).
   - Auspicious ceremonial consultation with gentle drifting marigold petals and resonant acoustic brass temple bell harmonics (via Web Audio API, zero external dependencies).

2. **50 Unique Solutions for GBS Networking Groups**:
   - Curated library of **50 distinct industry profiles** (Chartered Accountant, Architect & Interior, Real Estate, Catering, CNC Jobwork, Corrugated Packaging, Dental, Solar, Legal, Logistics, etc.).
   - **Smart Industry Keyword Matcher**: Automatically recognizes the trade from the business name and serves a pinpointed observation and recommendation.
   - **Zero-Collision Fallback Algorithm**: For generic firm names, an intelligent deterministic distribution ensures that across 50 members in your networking group, **no two members receive the same diagnosis**.
   - Optional industry sector selector in Step 1.

3. **1-Tap Direct WhatsApp Consultation**:
   - Generates a pre-filled WhatsApp message to Yash mentioning their business name, detected trade category, specific vighna, and the tailored digital solution Mahant Software can build for them.
   - 1-Tap viral share button using native Web Share API for WhatsApp business groups.

---

## ⚙️ Configuration (Updating Yash's WhatsApp Number)

Open `app.js` and edit line 9:
```javascript
const CONFIG = {
  // Yash's WhatsApp phone number with country code (e.g., '919876543210')
  YASH_WHATSAPP_PHONE: '919000000000',
  ...
};
```

---

## 🚀 How to Run Locally

You can run it with any static server:
```bash
# Using Python
python -m http.server 3000

# Or using Node.js
npx serve .
```
Then open `http://localhost:3000` in your browser.

---

## 🌐 Instant Free Hosting & Sharing

To share one link with all members in your GBS group:
1. **GitHub Pages**: In your repository Settings -> Pages, select branch `main` and root `/`. Your site will be live at `https://yashpanchal089.github.io/Vighnaharta-Ganpati/`
2. **Vercel / Netlify**: Connect your GitHub repository for instantaneous HTTPS deployment.
