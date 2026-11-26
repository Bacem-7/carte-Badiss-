/* ==========================================================
   ✏️  MODIFIE CE FICHIER (profile.js) POUR CHANGER LE PROFIL
   Textes: soit une chaîne simple "Texte", soit en 3 langues
   { fr:"...", ar:"...", en:"..." }.  Laisse "" ou [] pour masquer.
   ========================================================== */
const PROFILE = {
  defaultLang: "fr",                      // "fr" | "ar" | "en"
  firstName: "Bassem",
  lastName:  "Fguiri",
  title: { fr: "Coach sportif · Musculation", ar: "مدرب رياضي · كمال أجسام", en: "Fitness coach · Bodybuilding" },
  company: "",
  bio: "",
  available: true,                        // affiche le badge "Disponible"
  cover:     "images/cover.jpg",
  photo:     "images/photo.jpg",
  phone:     "+21655226699",
  whatsapp:  "21629669418",               // sans le +
  email:     "",
  website:   "",
  address:   "",
  services: [],
  whatsappText: { fr: "Bonjour, je vous contacte depuis votre carte.", ar: "مرحبا، نتواصل معاك من البطاقة.", en: "Hello, I'm contacting you from your card." },
  social: {
    instagram: "https://www.instagram.com/coach_badis",
    facebook:  "https://www.facebook.com/bassem.fguiri",
    linkedin:  "",
    tiktok:    "",
    youtube:   "",
    x:         "",
    snapchat:  "",
    telegram:  ""
  },
  gallery: ["images/work-1.jpg", "images/work-2.jpg", "images/work-3.jpg"]
};

/* (ne pas toucher) */
if (typeof module !== "undefined") module.exports = PROFILE;
