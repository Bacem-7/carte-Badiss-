/* ==========================================================
   ✏️  MODIFIE CE FICHIER (profile.js) POUR CHANGER LE PROFIL
   Textes: soit une chaîne simple "Texte", soit en 3 langues
   { fr:"...", ar:"...", en:"..." }.  Laisse "" ou [] pour masquer.
   ========================================================== */
const PROFILE = {
  defaultLang: "fr",                      // "fr" | "ar" | "en"
  firstName: "Ahmed",
  lastName:  "Ben Ali",
  title: { fr: "Directeur commercial", ar: "مدير تجاري", en: "Sales Director" },
  company: "Ma Société SARL",
  bio: {
    fr: "Je vous accompagne dans le développement de votre activité en Tunisie et à l'international.",
    ar: "نرافقك في تطوير نشاطك في تونس وخارجها.",
    en: "I help businesses grow in Tunisia and abroad."
  },
  available: true,                        // affiche le badge "Disponible"
  cover:     "images/cover.jpg",          // grande image en haut (1200x400 conseillé)
  photo:     "images/photo.jpg",          // ta photo de profil (carrée)
  phone:     "+21612345678",
  whatsapp:  "21612345678",               // sans le +
  email:     "ahmed@masociete.tn",
  website:   "https://www.masociete.tn",
  address:   "Tunis, Tunisie",
  services: [
    { fr: "Conseil", ar: "استشارات", en: "Consulting" },
    { fr: "Marketing digital", ar: "تسويق رقمي", en: "Digital marketing" },
    { fr: "Formation", ar: "تكوين", en: "Training" }
  ],
  whatsappText: { fr: "Bonjour, je vous contacte depuis votre carte.", ar: "مرحبا، نتواصل معاك من البطاقة.", en: "Hello, I'm contacting you from your card." },
  // Réseaux sociaux: colle ton lien. Laisse "" pour masquer le réseau.
  social: {
    instagram: "https://www.instagram.com/ton_compte",
    facebook:  "https://www.facebook.com/ta.page",
    linkedin:  "https://www.linkedin.com/in/ton-profil",
    tiktok:    "",
    youtube:   "",
    x:         "",
    snapchat:  "",
    telegram:  ""
  },
  // Photos de tes réalisations: remplace les fichiers du dossier images/ ou ajoute-en
  gallery: ["images/work-1.jpg", "images/work-2.jpg", "images/work-3.jpg"]
};
/* ========================================================== */

/* (ne pas toucher) */
if (typeof module !== "undefined") module.exports = PROFILE;
