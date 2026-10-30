import { applicationData } from "../data/application.js";
import { getClientLogo } from "../data/clientLogos.js";

/**
 * Presentation helpers for the installation records in data/application.js.
 * The records themselves are left untouched — everything here is derived.
 */

// Building types, in display order. A record may set `category` to one of these ids
// to override the keyword match below.
export const BUILDING_TYPES = [
  { id: "residential", label: "Residential Apartments", short: "Residential" },
  { id: "religious", label: "Temples & Religious Trusts", short: "Temples" },
  { id: "healthcare", label: "Hospitals & Healthcare", short: "Hospitals" },
  { id: "bungalow", label: "Bungalows & Private Homes", short: "Bungalows" },
  { id: "commercial", label: "Commercial, Retail & Hospitality", short: "Commercial" },
  { id: "industrial", label: "Industrial & Factories", short: "Industrial" },
  { id: "education", label: "Schools & Education", short: "Education" },
];

// First match wins, so more specific rules come first.
const TYPE_RULES = [
  ["healthcare", /HOSPITAL|RADIOLOGY|DIAGNOSTIC/i],
  ["religious", /MANDIR|SWAMINARAYAN|SANT NIWAS|YATRIK BHAVAN|UPASARAY|CHHATEDI|SANGH|HARIBHAGAT|SAJIVAN/i],
  ["education", /SCHOOL|COLLEGE/i],
  ["bungalow", /BUNGALOW|BUNGLOW/i],
  ["industrial", /PLASTIC|INDUSTRIES|INTERIOR PVT|WOODLINK/i],
  ["commercial", /SHOWROOM|MALL|TRADE CENTER|BUSINESS|JEWELLERS|HOTEL|PLAZA|INFRATECH/i],
  // Individual owners' private lifts (records named after a person)
  ["bungalow", /^(MR\.|MAHESHKUMAR|RAMAJI|BHIMJIBHAI)/i],
];

export function buildingTypeOf(client) {
  if (client.category) return client.category;
  const match = TYPE_RULES.find(([, re]) => re.test(client.clientName));
  return match ? match[0] : "residential";
}

// Drive technology, normalised from the free-text `type` (which has spelling variants).
export const DRIVE_TYPES = [
  { id: "mrl", label: "MRL (Machine-Room-Less)" },
  { id: "mr", label: "MR Traction" },
  { id: "hydraulic", label: "Hydraulic" },
];

export function driveOf(type = "") {
  const t = type.toUpperCase();
  if (/H[A]?YDRAULIC|HAYDRAULIC/.test(t)) return "hydraulic";
  if (/\bMRL\b/.test(t)) return "mrl";
  return "mr";
}

export function isGoodsLift(type = "") {
  return /GOODS/i.test(type);
}

// Lifts covered by one spec row: "11 LIFT" -> 11, "... YATRIK BHAVAN (10 LIFT)" -> 10,
// a named single unit such as "STORE LIFT" -> 1.
export function liftCountOf(lift) {
  const m = lift.unit.match(/(\d+)\s*LIFTS?\b/i);
  return m ? Number(m[1]) : 1;
}

// "SPEED -1.0MPS" -> "1.0 m/s"
export function formatSpeed(speed = "") {
  const m = speed.match(/([\d.]+)\s*MPS/i);
  return m ? `${m[1]} m/s` : speed;
}

// Locations outside Gujarat, used for the "states" count and labels.
const OUT_OF_STATE = {
  "PANVEL-MUMBAI": "Maharashtra",
  CHHAPAIYA: "Uttar Pradesh",
  INDORE: "Madhya Pradesh",
  UDAIPUR: "Rajasthan",
};

export function stateOf(location = "") {
  return OUT_OF_STATE[location.toUpperCase()] || "Gujarat";
}

// City / district each recorded location belongs to, so a search for "Ahmedabad" or
// "Kutch" finds projects recorded only by area name. Extend this when adding locations.
const AHMEDABAD_AREAS = [
  "NEW NAROL", "NAROL", "ISANPUR", "LAMBHA", "GHODASAR", "VATVA", "HATHIJAN", "VASTRAL",
  "ODHAV", "NIKOL", "HANSPURA", "NANA CHILODA", "NEW KATHWADA", "SINGARWA", "KATHWADA GIDC",
  "KATHWADA", "CGROAD", "USMANPURA", "SHYAMAL", "MEMNAGAR", "JUHAPURA",
];
const LOCATION_REGION = {
  ...Object.fromEntries(AHMEDABAD_AREAS.map((a) => [a, "Ahmedabad"])),
  ADALAJ: "Gandhinagar",
  KARAI: "Gandhinagar",
  DHOLERA: "Ahmedabad district",
  SALANGPUR: "Botad",
  BOTAD: "Botad",
  "KAPEDI-GADHADA": "Botad",
  NINGALA: "Botad",
  VADTAL: "Kheda",
  KHAMBHAT: "Anand",
  ANAND: "Anand",
  MODASA: "Aravalli",
  SHAMLAJI: "Aravalli",
  AMBAJI: "Banaskantha",
  UNJHA: "Mehsana",
  AMRELI: "Amreli",
  "RAJULA -AMRELI": "Amreli",
  DAHISARA: "Kutch",
  "FOTDI-BHUJ": "Kutch",
  "SUKHPUR - BHUJ": "Kutch",
  BHUJ: "Kutch",
  "BHUJ-KUTCH": "Kutch",
  MANKUVA: "Kutch",
  "PANVEL-MUMBAI": "Mumbai",
  GANDHINAGAR: "Gandhinagar",
  INDORE: "Indore",
  UDAIPUR: "Udaipur",
};

export function regionOf(location = "") {
  return LOCATION_REGION[location.toUpperCase()] || "";
}

// Town or city of a recorded location: Ahmedabad's neighbourhoods all count as Ahmedabad.
function townOf(location = "") {
  const loc = location.toUpperCase();
  return AHMEDABAD_AREAS.includes(loc) ? "AHMEDABAD" : loc;
}

// ---- Search -------------------------------------------------------------------------
// Lower-case, turn punctuation into spaces and collapse whitespace.
const normalize = (s = "") => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

// Optimal-string-alignment distance (edits incl. swapped neighbours), capped for speed.
function editDistance(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
  }
  return d[a.length][b.length];
}

function buildSearchIndex(client) {
  const text = normalize(
    [
      client.clientName,
      client.place,
      client.location,
      client.region,
      client.state,
      BUILDING_TYPES.find((t) => t.id === client.buildingType)?.label,
      ...client.drives.map((id) => DRIVE_TYPES.find((d) => d.id === id)?.label),
      ...client.elevators.map((e) => `${e.unit} ${e.type}`),
    ].join(" ")
  );
  return { text, compact: text.replace(/ /g, ""), words: [...new Set(text.split(" "))] };
}

// One query word matches if it appears anywhere (ignoring spaces, so "cg road" finds
// "CGROAD"), or is a close spelling of a recorded word ("imperial" finds "IMPERAIL").
function wordMatches(word, index) {
  if (index.compact.includes(word)) return true;
  if (word.length < 4) return false;
  const max = word.length >= 7 ? 2 : 1;
  return index.words.some((w) => w.length >= 4 && editDistance(word, w, max) <= max);
}

export function matchesSearch(client, query) {
  const q = normalize(query);
  if (!q) return true;
  // The whole query with spaces removed ("cg road" -> "cgroad"), or every word on its own.
  if (client.searchIndex.compact.includes(q.replace(/ /g, ""))) return true;
  return q.split(" ").every((word) => wordMatches(word, client.searchIndex));
}

// ---- Display text, derived only from the recorded name, location and lifts -------------
const KEEP_UPPER = new Set(["BAPS", "SMVS", "MLA", "LLP", "GIDC", "CG"]);

// Capitalises ALL-CAPS words only, so already mixed-case text in a name is kept as written.
function titleCase(s = "") {
  return s.replace(/[A-Za-z]+/g, (w) => {
    if (w !== w.toUpperCase()) return w;
    return KEEP_UPPER.has(w) ? w : w[0] + w.slice(1).toLowerCase();
  });
}

// The client's name exactly as on the official list, in normal case:
// "AANGAN SKY (HANSPURA)" -> "Aangan Sky (Hanspura)". The lift total is shown separately,
// so "KARNAVATI 7 (NEW NAROL) (TOTAL 22 LIFT)" -> "Karnavati 7 (New Narol)".
function displayNameOf(client) {
  const name = client.clientName
    .replace(/\(TOTAL \d+ LIFTS?\)/i, " ")
    .replace(/\bCGROAD\b/i, "CG ROAD")
    .replace(/\s+/g, " ")
    .trim();
  return titleCase(name);
}

// "HANSPURA" -> "Hanspura, Ahmedabad"; "PANVEL-MUMBAI" -> "Panvel-Mumbai, Maharashtra".
function placeOf(client) {
  const loc = client.location.toUpperCase() === "CGROAD" ? "CG Road" : titleCase(client.location);
  const parts = [loc];
  if (client.region && !loc.toUpperCase().includes(client.region.toUpperCase())) parts.push(client.region);
  parts.push(client.state);
  return parts.join(", ");
}

// "22 MRL lifts" / "15 lifts (10 MRL, 4 MR, 1 hydraulic)"
function liftSummaryOf(client) {
  const byDrive = {};
  for (const e of client.elevators) byDrive[driveOf(e.type)] = (byDrive[driveOf(e.type)] || 0) + liftCountOf(e);
  const label = { mrl: "MRL", mr: "MR", hydraulic: "hydraulic" };
  const drives = Object.entries(byDrive);
  const noun = client.lifts === 1 ? "lift" : "lifts";
  if (drives.length === 1) return `${client.lifts} ${label[drives[0][0]]} ${noun}`;
  return `${client.lifts} ${noun} (${drives.map(([d, n]) => `${n} ${label[d]}`).join(", ")})`;
}

export const installations = applicationData.map((client) => {
  const logoInfo = getClientLogo(client.id);
  const record = {
    ...client,
    logo: logoInfo?.src || null,
    // The logo's category wins so /clients and /about/projects always agree.
    buildingType: client.category || logoInfo?.category || buildingTypeOf(client),
    state: stateOf(client.location),
    region: regionOf(client.location),
    drives: [...new Set(client.elevators.map((e) => driveOf(e.type)))],
    lifts: client.elevators.reduce((n, e) => n + liftCountOf(e), 0),
  };
  record.name = displayNameOf(record);
  record.place = placeOf(record);
  record.liftSummary = liftSummaryOf(record);
  record.logoAlt = record.logo
    ? `${record.name} logo - ${record.liftSummary} installed by Krupa Elevators in ${record.place}`
    : null;
  record.searchIndex = buildSearchIndex(record);
  return record;
});

// Every client on the official list, one entry each, for the /clients page.
// Clients without a logo file are shown by name only.
export const clientShowcase = installations.map((c) => ({
  id: c.id,
  name: c.name,
  location: c.place,
  category: c.buildingType,
  lifts: c.lifts,
  src: c.logo,
  alt: c.logoAlt,
}));

// Home-page logo strip: clients with a logo, each logo image once.
export const clientLogoStrip = clientShowcase.filter(
  (c, i, all) => c.src && all.findIndex((o) => o.src === c.src) === i
);

export const installationStats = {
  projects: installations.length,
  lifts: installations.reduce((n, c) => n + c.lifts, 0),
  // Distinct towns & cities (Ahmedabad's areas counted once).
  locations: new Set(installations.map((c) => townOf(c.location))).size,
  states: new Set(installations.map((c) => c.state)).size,
  byType: BUILDING_TYPES.map((t) => ({
    ...t,
    projects: installations.filter((c) => c.buildingType === t.id),
  })).filter((t) => t.projects.length > 0),
};
