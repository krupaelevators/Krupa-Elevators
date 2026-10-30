import { assetUrl } from "../utils/assetPath.js";

/**
 * Krupa Elevators - client logo files, keyed by installation record id in data/application.js.
 * Only the image and building category live here: the client's name, location and lift
 * details (and so the logo alt text) come from the installation record itself, which
 * mirrors the official client list (Krupa Elevators Valued Clients 2026.pdf).
 */
export const clientLogos = {
  "aangan-sky-hanspura": { logo: "/assets/clients/AaganSky.jpg", category: "residential" },
  "antilia-business-hub-nana-chiloda": { logo: "/assets/clients/AantiliyaResidency.webp", category: "commercial" },
  "aditya-lavish-vastral": { logo: "/assets/clients/AdityaLavish.jpg", category: "residential" },
  "anmol-sky-narol": { logo: "/assets/clients/AnmolSky.png", category: "residential" },
  "balaji-residency-new-kathwada": { logo: "/assets/clients/BalajiResidency.jpg", category: "residential" },
  "creata-trade-center-odhav": { logo: "/assets/clients/CreataTradeCentre.jpg", category: "commercial" },
  "dev-aashish-pride-plaza-hanspura": { logo: "/assets/clients/DevAashishPridePlaza.jpg", category: "commercial" },
  "swaminarayan-mandir-dholera": { logo: "/assets/clients/DholeraDham.png", category: "religious" },
  "shree-swaminarayan-mandir-yatrik-bhavan-dholera": { logo: "/assets/clients/DholeraDham.png", category: "religious" },
  "gajanan-hill-2-vatva": { logo: "/assets/clients/GajananHill2.png", category: "residential" },
  "ganesha-48-hanspura": { logo: "/assets/clients/Ganesha48.jpg", category: "residential" },
  "hotel-grand-sarvottam-modasa": { logo: "/assets/clients/GrandSarvottamBanquetRestaurant.jpg", category: "commercial" },
  "highland-sky-nana-chiloda": { logo: "/assets/clients/HighlandResidency.jpg", category: "residential" },
  "prafulbhai-ramani-bunglow-nikol": { logo: "/assets/clients/ImperialMansion.jpg", category: "bungalow" },
  "nileshbhai-ramani-bunglow-nikol": { logo: "/assets/clients/ImperialMansion.jpg", category: "bungalow" },
  "joylukkas-showroom-cgroad": { logo: "/assets/clients/Joyalukkas.jpg", category: "commercial" },
  "kalrav-children-hospital-amreli": { logo: "/assets/clients/KalaravChildrenHospital.jpg", category: "healthcare" },
  "karnavati-7-new-narol": { logo: "/assets/clients/Karnavati7.jpg", category: "residential" },
  "khodiyar-plastic-singarwa": { logo: "/assets/clients/KhodiyarPlastic.jpg", category: "industrial" },
  "kothiya-hospital-nikol": { logo: "/assets/clients/Kothiya.jpg", category: "healthcare" },
  "malbar-prime-nikol": { logo: "/assets/clients/MalbarPrime.jpg", category: "commercial" },
  "zudio-showroom-malbar-prime-nikol": { logo: "/assets/clients/MalbarPrime.jpg", category: "commercial" },
  "maruti-amarkunj-3-gandhinagar": { logo: "/assets/clients/MarutiAmrakunj3.jpg", category: "residential" },
  "metro-wire-industries-modasa": { logo: "/assets/clients/Metro.jpg", category: "industrial" },
  "mitra-hospital-shyamal": { logo: "/assets/clients/MitraMultispecialityHospital.png", category: "healthcare" },
  "muni-sankalp-vastral": { logo: "/assets/clients/MuniswamiGroup.jpg", category: "residential" },
  "n-b-sky-kathwada": { logo: "/assets/clients/NBSky.jpg", category: "residential" },
  "oneplus-business-point-hanspura": { logo: "/assets/clients/OnePlusBisinessPoint.jpg", category: "commercial" },
  "zudio-showroom-one-plus-business-point-hanspura": { logo: "/assets/clients/OnePlusBisinessPoint.jpg", category: "commercial" },
  "patel-jewellers-pvt-ltd-panvel-mumbai": { logo: "/assets/clients/patelJewellers.jpg", category: "commercial" },
  "pushkar-laxmi-sky-vastral": { logo: "/assets/clients/PushkarLlaxmiSky.jpg", category: "residential" },
  "pushkar-status-isanpur": { logo: "/assets/clients/PushkarStatus.jpg", category: "residential" },
  "sanskruti-pride-new-kathwada": { logo: "/assets/clients/SanskrutiOride.jpg", category: "residential" },
  "sanskruti-heights-lambha": { logo: "/assets/clients/SansrutiHeights.png", category: "residential" },
  "sarita-residency-7-vastral": { logo: "/assets/clients/SaritaResidency.jpg", category: "residential" },
  "satyam-elegance-singarwa": { logo: "/assets/clients/SatyamElegance.jpg", category: "residential" },
  "sharnam-aayan-adalaj": { logo: "/assets/clients/SharanamAayan.jpg", category: "residential" },
  "slok-35-nikol": { logo: "/assets/clients/Shlok.jpg", category: "residential" },
  "shree-swaminarayan-mandir-chhapaiya": { logo: "/assets/clients/ShreeSwaminarayanTempleChhapaiya.jpg", category: "religious" },
  "shreemad-business-point-hanspura": { logo: "/assets/clients/ShreemadBusinessPoint.png", category: "commercial" },
  "shreemad-exotica-hanspura": { logo: "/assets/clients/ShreemadExotica.jpg", category: "residential" },
  "shree-abajibapa-ni-chhatedi-baladiya-bhuj-kutch": { logo: "/assets/clients/ShriAbajibapaniChatedi.png", category: "religious" },
  "shree-kashtbhanjan-dev-hanumanji-mandir-salangpur": { logo: "/assets/clients/ShriKashtabhanjanDevSalangpur.jpg", category: "religious" },
  "swaminarayan-mandir-vadtal": { logo: "/assets/clients/ShriSwaminarayanMandirVadatalDham.jpg", category: "religious" },
  "new-sant-niwas-vadtal": { logo: "/assets/clients/ShriSwaminarayanMandirVadatalDham.jpg", category: "religious" },
  "haribhagat-lift-vadtal": { logo: "/assets/clients/ShriSwaminarayanMandirVadatalDham.jpg", category: "religious" },
  "shubham-green-nana-chiloda": { logo: "/assets/clients/ShubhamGreens.jpg", category: "residential" },
  "shubham-sky-track-hanspura": { logo: "/assets/clients/ShubhamSkyTrack.jpg", category: "residential" },
  "signature-sky-hanspura": { logo: "/assets/clients/SignatureSky.jpg", category: "residential" },
  "silicon-valley-vastral": { logo: "/assets/clients/SiliconValley.jpg", category: "residential" },
  "sahajanand-green-nikol": { logo: "/assets/clients/TheSahajanandGreen.jpg", category: "residential" },
  "the-sun-imperail-nikol": { logo: "/assets/clients/TheSunImperial.jpg", category: "commercial" },
  "vedam-international-school-vastral": { logo: "/assets/clients/VedamInternationalShcool.jpg", category: "education" },
  "woodlink-interior-pvt-ltd-kathwada-gidc": { logo: "/assets/clients/Woodlink.png", category: "industrial" },
};

/** Logo for a client id, with its path resolved through assetUrl(), or null. */
export function getClientLogo(clientId) {
  const meta = clientLogos[clientId];
  if (!meta) return null;
  return { ...meta, src: assetUrl(meta.logo) };
}

export default clientLogos;
