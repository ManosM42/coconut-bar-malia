import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const en = {
  nav: { home: "Home", experience: "Experience", menu: "Menu", contact: "Contact" },
  hero: {
    headline: "THE NIGHT STARTS HERE",
    sub: "Cocktails · Shisha · RnB · Good Vibes · Malia, Crete",
    cta1: "Explore the Experience",
    cta2: "Find Us",
    scroll: "Scroll to discover",
  },
  gallery: {
    interior: "Inside the bar",
    crowd: "Sold-out crowd nights",
    cocktail: "Signature cocktails",
    shisha: "Premium shisha lounge",
    night: "Open-air sessions",
  },
  exp: {
    eyebrow: "THE EXPERIENCE",
    title: "MALIA'S FAVOURITE NIGHT OUT",
    items: [
      { n: 500, suffix: "+", label: "Nights of RnB & Party Music" },
      { n: 50, suffix: "+", label: "Cocktails & Drinks on the Menu" },
      { n: 12, suffix: "", label: "Premium Shisha Flavours" },
      { n: 0, suffix: "€", label: "Always Free Entry" },
      { n: 1, suffix: "", label: "Pole Dancing — Yes, Really" },
    ],
    quote: "Coconut Bar is Malia's favourite chill-out and party destination. Kind bartenders, brilliant staff, great promoters, and a vibe that keeps you coming back every night.",
  },
  menu: {
    eyebrow: "THE MENU",
    title: "DRINK · SMOKE · EAT",
    drinks: { label: "DRINKS", tag: "Cold, sharp, and always pouring." },
    cocktails: { label: "COCKTAILS", tag: "Shaken with attitude, served with neon." },
    shisha: { label: "SHISHA", tag: "Premium flavours, slow-burning clouds." },
    dishes: { label: "DISHES", tag: "Fuel for the long nights." },
  },
  reviews: {
    eyebrow: "WHAT PEOPLE SAY",
    title: "WHAT PEOPLE SAY",
  },
  contact: {
    eyebrow: "FIND US",
    title: "MEET US IN MALIA",
    address: "Malia, Heraklion, Crete, Greece",
    hours: "Open 20:00 – 05:00 daily",
    phoneLabel: "Phone",
    phone: "+30 28970 00000",
    instagram: "@coconutbarmalia",
    directions: "Get Directions",
  },
  footer: "© 2025 Coconut Bar Malia · Malia, Crete",
};

const gr: typeof en = {
  nav: { home: "Αρχική", experience: "Εμπειρία", menu: "Μενού", contact: "Επικοινωνία" },
  hero: {
    headline: "Η ΝΥΧΤΑ ΑΡΧΙΖΕΙ ΕΔΩ",
    sub: "Κοκτέιλ · Σίσα · RnB · Καλή Ενέργεια · Μάλια, Κρήτη",
    cta1: "Ανακάλυψε την Εμπειρία",
    cta2: "Βρες Μας",
    scroll: "Κύλισε για να δεις",
  },
  gallery: {
    interior: "Μέσα στο μπαρ",
    crowd: "Γεμάτες βραδιές",
    cocktail: "Signature κοκτέιλ",
    shisha: "Premium χώρος σίσα",
    night: "Υπαίθριες βραδιές",
  },
  exp: {
    eyebrow: "Η ΕΜΠΕΙΡΙΑ",
    title: "Η ΑΓΑΠΗΜΕΝΗ ΕΞΟΔΟΣ ΣΤΑ ΜΑΛΙΑ",
    items: [
      { n: 500, suffix: "+", label: "Βραδιές με RnB & Party" },
      { n: 50, suffix: "+", label: "Κοκτέιλ & Ποτά στο μενού" },
      { n: 12, suffix: "", label: "Premium Γεύσεις Σίσα" },
      { n: 0, suffix: "€", label: "Πάντα Δωρεάν Είσοδος" },
      { n: 1, suffix: "", label: "Pole Dancing — Ναι, αλήθεια" },
    ],
    quote: "Το Coconut Bar είναι ο αγαπημένος χώρος των Μαλίων για χαλάρωση και διασκέδαση. Φιλικό προσωπικό, υπέροχη ατμόσφαιρα και μια ενέργεια που σε κάνει να επιστρέφεις κάθε βράδυ.",
  },
  menu: {
    eyebrow: "ΤΟ ΜΕΝΟΥ",
    title: "ΠΙΕΣ · ΚΑΠΝΙΣΕ · ΦΑΕ",
    drinks: { label: "ΠΟΤΑ", tag: "Κρύα, δυνατά, πάντα έτοιμα." },
    cocktails: { label: "ΚΟΚΤΕΪΛ", tag: "Με ατμοσφαιρα και χρώμα." },
    shisha: { label: "ΣΙΣΑ", tag: "Premium γεύσεις, αργό κάψιμο." },
    dishes: { label: "ΠΙΑΤΑ", tag: "Καύσιμο για μεγάλες νύχτες." },
  },
  reviews: {
    eyebrow: "ΤΙ ΛΕΝΕ ΟΙ ΕΠΙΣΚΕΠΤΕΣ",
    title: "ΤΙ ΛΕΝΕ ΟΙ ΕΠΙΣΚΕΠΤΕΣ",
  },
  contact: {
    eyebrow: "ΒΡΕΣ ΜΑΣ",
    title: "ΣΥΝΑΝΤΗΣΟΥ ΜΑΖΙ ΜΑΣ ΣΤΑ ΜΑΛΙΑ",
    address: "Μάλια, Ηράκλειο, Κρήτη, Ελλάδα",
    hours: "Ανοιχτά 20:00 – 05:00 καθημερινά",
    phoneLabel: "Τηλέφωνο",
    phone: "+30 28970 00000",
    instagram: "@coconutbarmalia",
    directions: "Οδηγίες",
  },
  footer: "© 2025 Coconut Bar Malia · Μάλια, Κρήτη",
};

i18n.use(initReactI18next).init({
  resources: { en: { t: en }, gr: { t: gr } },
  lng: "en",
  fallbackLng: "en",
  ns: ["t"],
  defaultNS: "t",
  interpolation: { escapeValue: false },
  returnObjects: true,
});

export default i18n;
