import { applicationData } from "../data/application";

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
};

export function regionOf(location = "") {
  return LOCATION_REGION[location.toUpperCase()] || "";
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

export const installations = applicationData.map((client) => {
  const record = {
    ...client,
    buildingType: buildingTypeOf(client),
    state: stateOf(client.location),
    region: regionOf(client.location),
    drives: [...new Set(client.elevators.map((e) => driveOf(e.type)))],
  };
  record.searchIndex = buildSearchIndex(record);
  return record;
});

export const installationStats = {
  projects: installations.length,
  locations: new Set(installations.map((c) => c.location.toUpperCase())).size,
  states: new Set(installations.map((c) => c.state)).size,
  byType: BUILDING_TYPES.map((t) => ({
    ...t,
    projects: installations.filter((c) => c.buildingType === t.id),
  })).filter((t) => t.projects.length > 0),
};
