import { assetUrl } from "../utils/assetPath";
import { elevatorSeoData } from "./elevatorSeoData";

// ---------------------------------------------------------------------------
// Technical drawing dimension tables (from the Krupa Elevators brochure,
// pages 18-22). All dimensions are in millimetres (mm) unless noted otherwise.
// Speed is printed on the original pages as "Mps" (metres per second).
// A value that was not legible/printed on the page is set to null.
//
// IMPORTANT ABOUT THE LETTER CODES (A, B, C, D, E, K, L...):
// Each drawing in the original brochure carries its OWN legend printed
// above its table — the letters are NOT used consistently across tables.
// This file keeps each table's legend exactly as printed on its page.
// ---------------------------------------------------------------------------
const generalNotes = [
  "All Dimensions are in mm.",
  "This is General Data, it may be changed without notice. For more details contact us.",
  "All hoist way walls should be minimum 230 mm brick or 150 mm R.C.C.",
];

// 1. MANUAL DOOR ELEVATOR (page 18)
const manualDoorElevatorTable = {
  title: "Manual Door Elevator",
  notes: generalNotes,
  legend: {
    A: "Platform Edge – width (car platform)",
    B: "Platform Edge – depth (car platform)",
    C: "Lift-Well In-Side Finished – width",
    D: "Lift-Well In-Side Finished – depth",
    E: "Entrance Width",
    K: "Machine Room – width",
    L: "Machine Room – length",
  },
  columns: [
    { key: "persons", label: "Persons" },
    { key: "loadKg", label: "Load (Kg)" },
    { key: "platformEdgeWidth_A", label: "Platform Edge Width (A)", unit: "mm" },
    { key: "platformEdgeDepth_B", label: "Platform Edge Depth (B)", unit: "mm" },
    { key: "liftWellWidth_C", label: "Lift-Well Width, In-Side Finished (C)", unit: "mm" },
    { key: "liftWellDepth_D", label: "Lift-Well Depth, In-Side Finished (D)", unit: "mm" },
    { key: "entranceWidth_E", label: "Entrance Width (E)", unit: "mm" },
    { key: "doorType", label: "Door Type" },
    { key: "machineRoomWidth_K", label: "Machine Room Width (K)", unit: "mm" },
    { key: "machineRoomLength_L", label: "Machine Room Length (L)", unit: "mm" },
    { key: "speedMps", label: "Speed (Mps)" },
    { key: "pitDepth", label: "Pit Depth", unit: "mm" },
    { key: "overHead", label: "Over Head", unit: "mm" },
  ],
  rows: [
    { persons: 5, loadKg: 340, platformEdgeWidth_A: 950, platformEdgeDepth_B: 1300, liftWellWidth_C: 1350, liftWellDepth_D: 1650, entranceWidth_E: 760, doorType: "Collapsible", machineRoomWidth_K: "300+C+300", machineRoomLength_L: "600+D+1500", speedMps: "Up to 0.68", pitDepth: 1600, overHead: 4900 },
    { persons: 5, loadKg: 340, platformEdgeWidth_A: 1300, platformEdgeDepth_B: 1000, liftWellWidth_C: 1700, liftWellDepth_D: 1300, entranceWidth_E: 760, doorType: "Swing", machineRoomWidth_K: "300+C+300", machineRoomLength_L: "600+D+1500", speedMps: "Up to 0.68", pitDepth: 1600, overHead: 4900 },
    { persons: 6, loadKg: 408, platformEdgeWidth_A: 1200, platformEdgeDepth_B: 1000, liftWellWidth_C: 1600, liftWellDepth_D: 1500, entranceWidth_E: 800, doorType: "Imperforate", machineRoomWidth_K: "300+C+300", machineRoomLength_L: "600+D+1500", speedMps: "Up to 0.68", pitDepth: 1600, overHead: 4900 },
    { persons: 8, loadKg: 544, platformEdgeWidth_A: 1500, platformEdgeDepth_B: 1200, liftWellWidth_C: 1900, liftWellDepth_D: 1500, entranceWidth_E: 800, doorType: null, machineRoomWidth_K: "300+C+300", machineRoomLength_L: "600+D+1500", speedMps: "Up to 0.68", pitDepth: 1600, overHead: 4900 },
    { persons: 13, loadKg: 884, platformEdgeWidth_A: 1900, platformEdgeDepth_B: 1500, liftWellWidth_C: 2400, liftWellDepth_D: 1850, entranceWidth_E: 900, doorType: null, machineRoomWidth_K: "600+C+600", machineRoomLength_L: "300+D+1500", speedMps: "Up to 0.68", pitDepth: 1600, overHead: 4900 },
  ],
};

// 2. AUTOMATIC DOOR ELEVATOR (page 19)
const automaticDoorElevatorTable = {
  title: "Automatic Door Elevator",
  notes: generalNotes,
  legend: {
    A: "Platform Edge – width (car platform)",
    B: "Platform Edge – depth (car platform)",
    C: "Lift-Well In-Side Finished – width",
    D: "Lift-Well In-Side Finished – depth",
    E: "Entrance Width",
    K: "Machine Room – width",
    L: "Machine Room – length",
  },
  columns: [
    { key: "persons", label: "Persons" },
    { key: "loadKg", label: "Load (Kg)" },
    { key: "platformEdgeWidth_A", label: "Platform Edge Width (A)", unit: "mm" },
    { key: "platformEdgeDepth_B", label: "Platform Edge Depth (B)", unit: "mm" },
    { key: "liftWellWidth_C", label: "Lift-Well Width, In-Side Finished (C)", unit: "mm" },
    { key: "liftWellDepth_D", label: "Lift-Well Depth, In-Side Finished (D)", unit: "mm" },
    { key: "entranceWidth_E", label: "Entrance Width (E)", unit: "mm" },
    { key: "doorType", label: "Door Type" },
    { key: "machineRoomWidth_K", label: "Machine Room Width (K)", unit: "mm" },
    { key: "machineRoomLength_L", label: "Machine Room Length (L)", unit: "mm" },
    { key: "speedMps", label: "Speed (Mps)" },
    { key: "pitDepth", label: "Pit Depth", unit: "mm" },
    { key: "overHead", label: "Over Head", unit: "mm" },
  ],
  rows: [
    { persons: 6, loadKg: 408, platformEdgeWidth_A: 1200, platformEdgeDepth_B: 1300, liftWellWidth_C: 1700, liftWellDepth_D: 1800, entranceWidth_E: 700, doorType: "Auto Center Opening", machineRoomWidth_K: "300+C+300", machineRoomLength_L: "600+D+1500", speedMps: "UPTO 1.5", pitDepth: 1600, overHead: 4900 },
    { persons: 8, loadKg: 544, platformEdgeWidth_A: 1500, platformEdgeDepth_B: 1330, liftWellWidth_C: 2000, liftWellDepth_D: 1800, entranceWidth_E: 800, doorType: "Auto Center Opening", machineRoomWidth_K: "300+C+300", machineRoomLength_L: "600+D+1500", speedMps: "UPTO 1.5", pitDepth: 1600, overHead: 4900 },
    { persons: 10, loadKg: 680, platformEdgeWidth_A: 1650, platformEdgeDepth_B: 1450, liftWellWidth_C: 2150, liftWellDepth_D: 2000, entranceWidth_E: 800, doorType: "Auto Center Opening", machineRoomWidth_K: "600+C+600", machineRoomLength_L: "600+D+1500", speedMps: "UPTO 1.5", pitDepth: 1600, overHead: 4900 },
    { persons: 13, loadKg: 884, platformEdgeWidth_A: 1900, platformEdgeDepth_B: 1500, liftWellWidth_C: 2400, liftWellDepth_D: 2000, entranceWidth_E: 800, doorType: "Auto Center Opening", machineRoomWidth_K: "600+C+600", machineRoomLength_L: "600+D+1500", speedMps: "UPTO 1.5", pitDepth: 1600, overHead: 4900 },
  ],
};

// 3. CAPSULE ELEVATOR (page 19)
const capsuleElevatorTable = {
  title: "Capsule Elevator",
  notes: generalNotes,
  legend: {
    A: "Car Inside – dimension point A (width)",
    B: "Car Inside – dimension point B (depth)",
    J: "Car Inside – dimension point J",
    G: "Car Inside – dimension point G",
    C: "Left Well – dimension point C (width)",
    D: "Left Well – dimension point D",
    F: "Left Well – dimension point F",
    H: "Left Well – dimension point H",
    E: "Entrance",
  },
  legendCaveat:
    "The Capsule Elevator plan view (Rear Side / Semi Circle / 3 Side Cutting Edge / 5 Side Cutting Edge forms) uses four points each for the Car Inside and Left Well groups because of the curved cab shape. Points J, G, F and H mark additional curve/side positions on the drawing; the brochure does not spell out each one individually beyond its group label.",
  optionA: {
    label: "Option - A",
    columns: [
      { key: "person", label: "Person" },
      { key: "kgs", label: "Capacity (Kgs)" },
      { key: "carInside_A", label: "Car Inside – A", unit: "mm" },
      { key: "carInside_B", label: "Car Inside – B", unit: "mm" },
      { key: "carInside_J", label: "Car Inside – J", unit: "mm" },
      { key: "carInside_G", label: "Car Inside – G", unit: "mm" },
      { key: "leftWell_C", label: "Left Well – C", unit: "mm" },
      { key: "leftWell_D", label: "Left Well – D", unit: "mm" },
      { key: "leftWell_F", label: "Left Well – F", unit: "mm" },
      { key: "leftWell_H", label: "Left Well – H", unit: "mm" },
      { key: "entrance", label: "Entrance", unit: "mm" },
    ],
    rows: [
      { person: 10, kgs: 680, carInside_A: 1100, carInside_B: 1300, carInside_J: 1400, carInside_G: 650, leftWell_C: 2200, leftWell_D: 1325, leftWell_F: 1330, leftWell_H: 800, entrance: 800 },
      { person: 13, kgs: 884, carInside_A: 1200, carInside_B: 1400, carInside_J: 1550, carInside_G: 700, leftWell_C: 2400, leftWell_D: 1425, leftWell_F: 1430, leftWell_H: 900, entrance: 900 },
      { person: 16, kgs: 1088, carInside_A: 1300, carInside_B: 1500, carInside_J: 1700, carInside_G: 750, leftWell_C: 2800, leftWell_D: 1530, leftWell_F: 1530, leftWell_H: 1000, entrance: 1000 },
    ],
  },
  optionB: {
    label: "Option - B",
    columns: [
      { key: "person", label: "Person" },
      { key: "kgs", label: "Capacity (Kgs)" },
      { key: "carInside_A", label: "Car Inside – A", unit: "mm" },
      { key: "carInside_B", label: "Car Inside – B", unit: "mm" },
      { key: "carInside_G", label: "Car Inside – G", unit: "mm" },
      { key: "leftWell_C", label: "Left Well – C", unit: "mm" },
      { key: "leftWell_D", label: "Left Well – D", unit: "mm" },
      { key: "leftWell_F", label: "Left Well – F", unit: "mm" },
      { key: "leftWell_H", label: "Left Well – H", unit: "mm" },
      { key: "entrance_E", label: "Entrance – E", unit: "mm" },
    ],
    rows: [
      { person: 10, kgs: 680, carInside_A: 1250, carInside_B: 1300, carInside_G: 250, leftWell_C: 2200, leftWell_D: 1450, leftWell_F: 1480, leftWell_H: 580, entrance_E: 800 },
      { person: 13, kgs: 884, carInside_A: 1400, carInside_B: 1400, carInside_G: 300, leftWell_C: 2400, leftWell_D: 1550, leftWell_F: 1630, leftWell_H: 650, entrance_E: 900 },
      { person: 16, kgs: 1088, carInside_A: 1550, carInside_B: 1500, carInside_G: 350, leftWell_C: 2800, leftWell_D: 1780, leftWell_F: 1650, leftWell_H: 790, entrance_E: 1000 },
    ],
  },
};

// 4. HOSPITAL ELEVATOR (page 20)
const hospitalElevatorTable = {
  title: "Hospital Elevator – Space Requirements for Manual Door Operation Stretcher Elevators",
  notes: generalNotes,
  legend: {
    A: "Platform Edge – width (car platform)",
    B: "Platform Edge – depth (car platform)",
    C: "Lift-Well In-Side Finished – width",
    D: "Lift-Well In-Side Finished – depth",
    E: "Entrance Width",
    K: "Machine Room – width",
    L: "Machine Room – length",
  },
  columns: [
    { key: "person", label: "Person" },
    { key: "kg", label: "Load (Kg)" },
    { key: "platformEdgeWidth_A", label: "Platform Edge Width (A)", unit: "mm" },
    { key: "platformEdgeDepth_B", label: "Platform Edge Depth (B)", unit: "mm" },
    { key: "liftWellWidth_C", label: "Lift-Well Width, In-Side Finished (C)", unit: "mm" },
    { key: "liftWellDepth_D", label: "Lift-Well Depth, In-Side Finished (D)", unit: "mm" },
    { key: "entranceWidth_E", label: "Entrance Width (E)", unit: "mm" },
    { key: "doorType", label: "Door Type" },
    { key: "machineRoomWidth_K", label: "Machine Room Width (K)", unit: "mm" },
    { key: "machineRoomLength_L", label: "Machine Room Length (L)", unit: "mm" },
    { key: "speedMps", label: "Speed (Mps)" },
    { key: "pitDepth", label: "Pit Depth", unit: "mm" },
    { key: "overHead", label: "Over Head", unit: "mm" },
  ],
  rows: [
    { person: "8 To 16", kg: "544 To 1088", platformEdgeWidth_A: 1200, platformEdgeDepth_B: 2300, liftWellWidth_C: 1900, liftWellDepth_D: 2400, entranceWidth_E: 1600, doorType: "Collapsible", machineRoomWidth_K: "600+C+600", machineRoomLength_L: "600+D+1800", speedMps: "0.3 To 0.5", pitDepth: 1600, overHead: 5100 },
  ],

  automaticCentreOpeningDoor: {
    title: "Automatic Centre Opening Door",
    legend: {
      A: "Shaft Width",
      B: "Shaft Depth",
      C: "Car Width",
      D: "Car Depth",
      E: "Entrance",
    },
    columns: [
      { key: "person", label: "Person" },
      { key: "capacityKg", label: "Capacity (Kg)" },
      { key: "shaftWidth_A", label: "Shaft Width (A)", unit: "mm" },
      { key: "shaftDepth_B", label: "Shaft Depth (B)", unit: "mm" },
      { key: "carWidth_C", label: "Car Width (C)", unit: "mm" },
      { key: "carDepth_D", label: "Car Depth (D)", unit: "mm" },
      { key: "entrance_E", label: "Entrance (E)", unit: "mm" },
    ],
    rows: [
      { person: 15, capacityKg: 1020, shaftWidth_A: 1900, shaftDepth_B: 2300, carWidth_C: 1000, carDepth_D: 1700, entrance_E: 800 },
      { person: 20, capacityKg: 1360, shaftWidth_A: 2300, shaftDepth_B: 3000, carWidth_C: 1300, carDepth_D: 2000, entrance_E: 900 },
      { person: 26, capacityKg: 1768, shaftWidth_A: 2600, shaftDepth_B: 3000, carWidth_C: 1600, carDepth_D: 2400, entrance_E: 1000 },
    ],
  },

  automaticTelescopicDoor: {
    title: "Automatic Telescopic Door",
    legend: {
      A: "Shaft Width",
      B: "Shaft Depth",
      C: "Car Width",
      D: "Car Depth",
      E: "Entrance",
    },
    columns: [
      { key: "person", label: "Person" },
      { key: "capacityKg", label: "Capacity (Kg)" },
      { key: "shaftWidth_A", label: "Shaft Width (A)", unit: "mm" },
      { key: "shaftDepth_B", label: "Shaft Depth (B)", unit: "mm" },
      { key: "carWidth_C", label: "Car Width (C)", unit: "mm" },
      { key: "carDepth_D", label: "Car Depth (D)", unit: "mm" },
      { key: "entrance_E", label: "Entrance (E)", unit: "mm" },
    ],
    rows: [
      { person: 15, capacityKg: 1020, shaftWidth_A: 1700, shaftDepth_B: 3000, carWidth_C: 1000, carDepth_D: 2400, entrance_E: 800 },
      { person: 20, capacityKg: 1360, shaftWidth_A: 1950, shaftDepth_B: 3000, carWidth_C: 1300, carDepth_D: 2400, entrance_E: 900 },
      { person: 26, capacityKg: 1768, shaftWidth_A: 2100, shaftDepth_B: 3000, carWidth_C: 1600, carDepth_D: 2400, entrance_E: 1000 },
    ],
  },
};

// 5. GOODS ELEVATOR (page 20)
const goodsElevatorTable = {
  title: "Goods Elevator – Space Requirements For Goods Elevators",
  notes: generalNotes,
  legend: {
    A: "Car-Inside – width",
    B: "Car-Inside – depth",
    C: "Lift-Well – width",
    D: "Lift-Well – depth",
    K: "Machine Room – width",
    L: "Machine Room – length",
  },
  columns: [
    { key: "loadKg", label: "Load (Kg)" },
    { key: "carInsideWidth_A", label: "Car-Inside Width (A)", unit: "mm" },
    { key: "carInsideDepth_B", label: "Car-Inside Depth (B)", unit: "mm" },
    { key: "liftWellWidth_C", label: "Lift-Well Width (C)", unit: "mm" },
    { key: "liftWellDepth_D", label: "Lift-Well Depth (D)", unit: "mm" },
    { key: "entranceWidth", label: "Entrance Width", unit: "mm" },
    { key: "machineRoomWidth_K", label: "Machine Room Width (K)", unit: "mm" },
    { key: "machineRoomLength_L", label: "Machine Room Length (L)", unit: "mm" },
    { key: "speedMps", label: "Speed (Mps)" },
    { key: "pitDepth", label: "Pit Depth", unit: "mm" },
    { key: "overHead", label: "Over Head", unit: "mm" },
  ],
  rows: [
    { loadKg: 500, carInsideWidth_A: 1500, carInsideDepth_B: 1200, liftWellWidth_C: 1900, liftWellDepth_D: 1600, entranceWidth: 2100, machineRoomWidth_K: 2600, machineRoomLength_L: 1600, speedMps: "0.25 To 1.0", pitDepth: 1600, overHead: 5100 },
    { loadKg: 1000, carInsideWidth_A: 1500, carInsideDepth_B: 1800, liftWellWidth_C: 2000, liftWellDepth_D: 1800, entranceWidth: 2100, machineRoomWidth_K: 2600, machineRoomLength_L: 1600, speedMps: "0.25 To 1.0", pitDepth: 1600, overHead: 5100 },
    { loadKg: 1500, carInsideWidth_A: 1700, carInsideDepth_B: 2000, liftWellWidth_C: 2600, liftWellDepth_D: 2300, entranceWidth: 2100, machineRoomWidth_K: 2600, machineRoomLength_L: 1600, speedMps: "0.25 To 1.0", pitDepth: 1600, overHead: 5100 },
    { loadKg: 2000, carInsideWidth_A: 1700, carInsideDepth_B: 2500, liftWellWidth_C: 2600, liftWellDepth_D: 2300, entranceWidth: 2100, machineRoomWidth_K: 2600, machineRoomLength_L: 1600, speedMps: "0.25 To 1.0", pitDepth: 1600, overHead: 5100 },
    { loadKg: 2500, carInsideWidth_A: 2000, carInsideDepth_B: 2500, liftWellWidth_C: 2900, liftWellDepth_D: 2700, entranceWidth: 2100, machineRoomWidth_K: 2600, machineRoomLength_L: 1600, speedMps: "0.25 To 1.0", pitDepth: 1600, overHead: 5400 },
    { loadKg: 3000, carInsideWidth_A: 2000, carInsideDepth_B: 3000, liftWellWidth_C: 2900, liftWellDepth_D: 3400, entranceWidth: 2700, machineRoomWidth_K: 2900, machineRoomLength_L: 1600, speedMps: "0.25 To 1.0", pitDepth: 1600, overHead: 5400 },
  ],
};

// 6. CAR ELEVATOR (page 21) — printed as a description table, not a lettered dimension table.
const carElevatorTechnical = {
  title: "Car Elevator",
  columns: [
    { key: "description", label: "Description" },
    { key: "value", label: "Value" },
  ],
  rows: [
    { description: "Segment", value: "Industrial applications & Car Parks" },
    { description: "Max. Travel (m)", value: "100 (Solutions available for higher travel)" },
    { description: "Max. Load (kg)", value: "500 - 5000 Kg per persons (Solutions available for higher capacities)" },
    { description: "Max. Speed (m/s)", value: "0.5 mps (Solutions available for other speeds)" },
    { description: "Max. Group size", value: "Simplex" },
  ],
  loadHookNote:
    "3 Nos - Load Hook (3 Ton Capacity) Client Scope Refer Details in Inspection Window at Terrace Level",
  holdingBeamCapacity: "3500 Kg",
};

// 7. MRL ELEVATOR (page 21)
const mrlElevatorTechnical = {
  title: "MRL Elevator",
  notes: generalNotes,
  legend: {
    A: "Lift Well – width",
    B: "Lift Well – depth",
    C: "Cabin Inside – width",
    D: "Cabin Inside – depth",
  },
  dataConfidenceNote:
    "The five smaller-capacity rows (5–13 persons) come from a compact plan-view diagram whose printed digits were harder to separate cleanly than the 15–26 person rows; treat those five rows as best-effort readings and verify against the original page for critical use.",
  columns: [
    { key: "person", label: "Capacity (Person)" },
    { key: "kgs", label: "Capacity (Kgs)" },
    { key: "liftWellWidth_A", label: "Lift Well Width (A)", unit: "mm" },
    { key: "liftWellDepth_B", label: "Lift Well Depth (B)", unit: "mm" },
    { key: "cabinInsideWidth_C", label: "Cabin Inside Width (C)", unit: "mm" },
    { key: "cabinInsideDepth_D", label: "Cabin Inside Depth (D)", unit: "mm" },
    { key: "entry", label: "Entry", unit: "mm" },
  ],
  rows: [
    { person: 5, kgs: 340, liftWellWidth_A: 1050, liftWellDepth_B: 920, cabinInsideWidth_C: 1270, cabinInsideDepth_D: null, entry: 700 },
    { person: 6, kgs: 408, liftWellWidth_A: 1130, liftWellDepth_B: 970, cabinInsideWidth_C: 1380, cabinInsideDepth_D: null, entry: 700 },
    { person: 8, kgs: 544, liftWellWidth_A: 1280, liftWellDepth_B: 1120, cabinInsideWidth_C: 1380, cabinInsideDepth_D: null, entry: 800 },
    { person: 10, kgs: 680, liftWellWidth_A: 1370, liftWellDepth_B: 1270, cabinInsideWidth_C: 1380, cabinInsideDepth_D: null, entry: 800 },
    { person: 13, kgs: 884, liftWellWidth_A: 1570, liftWellDepth_B: 1630, cabinInsideWidth_C: 2100, cabinInsideDepth_D: null, entry: "800/900" },
    { person: 15, kgs: 1020, liftWellWidth_A: 2100, liftWellDepth_B: 2600, cabinInsideWidth_C: 1070, cabinInsideDepth_D: 2400, entry: "800/900" },
    { person: 20, kgs: 1360, liftWellWidth_A: 2100, liftWellDepth_B: 3000, cabinInsideWidth_C: 1070, cabinInsideDepth_D: 2400, entry: "900/1000" },
    { person: 26, kgs: 1768, liftWellWidth_A: 2450, liftWellDepth_B: 3000, cabinInsideWidth_C: 1620, cabinInsideDepth_D: 2400, entry: "900/1000" },
  ],
};

// 8. HOME ELEVATOR (page 22)
const homeElevatorTechnical = {
  title: "Home Elevator",
  notes: generalNotes,
  legend: {
    A: "Car Inside – width",
    B: "Car Inside – depth",
    C: "Lift Well – width",
    D: "Lift Well – depth",
    E: "Entrance",
  },
  columns: [
    { key: "doorOperation", label: "Door Operation" },
    { key: "persons", label: "Persons" },
    { key: "kgs", label: "Load (Kgs)" },
    { key: "carInsideWidth_A", label: "Car Inside Width (A)", unit: "mm" },
    { key: "carInsideDepth_B", label: "Car Inside Depth (B)", unit: "mm" },
    { key: "liftWellWidth_C", label: "Lift Well Width (C)", unit: "mm" },
    { key: "liftWellDepth_D", label: "Lift Well Depth (D)", unit: "mm" },
    { key: "entrance_E", label: "Entrance (E)", unit: "mm" },
    { key: "speedMps", label: "Speed (Mps)" },
    { key: "pit", label: "Pit", unit: "mm" },
    { key: "overHead", label: "Over Head", unit: "mm" },
  ],
  rows: [
    { doorOperation: "Manual Door", persons: 3, kgs: 204, carInsideWidth_A: 810, carInsideDepth_B: 700, liftWellWidth_C: 1100, liftWellDepth_D: 1200, entrance_E: 700, speedMps: 0.3, pit: 550, overHead: 3100 },
    { doorOperation: "Manual Door", persons: 4, kgs: 272, carInsideWidth_A: 810, carInsideDepth_B: 1200, liftWellWidth_C: 1300, liftWellDepth_D: 1400, entrance_E: 700, speedMps: 0.3, pit: 550, overHead: 3100 },
    { doorOperation: "Auto Door", persons: 3, kgs: 204, carInsideWidth_A: 810, carInsideDepth_B: 700, liftWellWidth_C: 1250, liftWellDepth_D: 1250, entrance_E: 700, speedMps: 0.3, pit: 550, overHead: 3100 },
    { doorOperation: "Auto Door", persons: 4, kgs: 272, carInsideWidth_A: 850, carInsideDepth_B: 1150, liftWellWidth_C: 1300, liftWellDepth_D: 1600, entrance_E: 700, speedMps: 0.3, pit: 550, overHead: 3100 },
  ],
};

// 9. HYDRAULIC ELEVATOR (page 22)
const hydraulicElevatorTechnical = {
  title: "Hydraulic Elevator",
  legend: {
    A: "Shaft – width",
    B: "Shaft – depth",
    C: "Car – width",
    D: "Car – depth",
  },

  directOrSplitPistonTable: {
    title: "Direct Suspension (Simple or Split Piston)",
    description:
      "It is a direct suspension with a simple or split piston. It is the simplest solution of suspension for any load.",
    note: "PIT: 1500 mm • O.H.: 4000 mm (Pit & O.H. change the technical specification)",
    columns: [
      { key: "person", label: "Person" },
      { key: "capacityKg", label: "Capacity (Kg)" },
      { key: "shaftWidth_A", label: "Shaft Width (A)", unit: "mm" },
      { key: "shaftDepth_B", label: "Shaft Depth (B)", unit: "mm" },
      { key: "carWidth_C", label: "Car Width (C)", unit: "mm" },
      { key: "carDepth_D", label: "Car Depth (D)", unit: "mm" },
    ],
    rows: [
      { person: 3, capacityKg: 225, shaftWidth_A: 1200, shaftDepth_B: 1200, carWidth_C: 850, carDepth_D: 900 },
      { person: 4, capacityKg: 300, shaftWidth_A: 1250, shaftDepth_B: 1350, carWidth_C: 850, carDepth_D: 1050 },
      { person: 5, capacityKg: 375, shaftWidth_A: 1400, shaftDepth_B: 1500, carWidth_C: 1000, carDepth_D: 1100 },
      { person: 6, capacityKg: 450, shaftWidth_A: 1500, shaftDepth_B: 1500, carWidth_C: 1100, carDepth_D: 1150 },
      { person: 8, capacityKg: 600, shaftWidth_A: 1700, shaftDepth_B: 1700, carWidth_C: 1100, carDepth_D: 1400 },
      { person: 10, capacityKg: 750, shaftWidth_A: 1600, shaftDepth_B: 1850, carWidth_C: 1200, carDepth_D: 1550 },
      { person: 12, capacityKg: 900, shaftWidth_A: 1700, shaftDepth_B: 1950, carWidth_C: 1300, carDepth_D: 1650 },
      { person: 15, capacityKg: 1125, shaftWidth_A: 2300, shaftDepth_B: 2300, carWidth_C: 1300, carDepth_D: 2000 },
      { person: 20, capacityKg: 1500, shaftWidth_A: 1800, shaftDepth_B: 2700, carWidth_C: 1300, carDepth_D: 2400 },
      { person: 24, capacityKg: 1800, shaftWidth_A: 1900, shaftDepth_B: 2800, carWidth_C: 1500, carDepth_D: 2500 },
    ],
  },

  singleSideDirectSuspensionTable: {
    title: "Single-Side Direct Suspension (Simple Piston)",
    description:
      "This is a single side direct suspension with a simple piston for regular loads and short travels of maximum 4 meters.",
    note: "PIT: 1200 mm • O.H.: 4000 mm",
    columns: [
      { key: "person", label: "Person" },
      { key: "capacityKg", label: "Capacity (Kg)" },
      { key: "shaftWidth_A", label: "Shaft Width (A)", unit: "mm" },
      { key: "shaftDepth_B", label: "Shaft Depth (B)", unit: "mm" },
      { key: "carWidth_C", label: "Car Width (C)", unit: "mm" },
      { key: "carDepth_D", label: "Car Depth (D)", unit: "mm" },
    ],
    rows: [
      { person: 3, capacityKg: 225, shaftWidth_A: 1500, shaftDepth_B: 1500, carWidth_C: 850, carDepth_D: 900 },
      { person: 4, capacityKg: 300, shaftWidth_A: 1550, shaftDepth_B: 1550, carWidth_C: 850, carDepth_D: 1050 },
      { person: 5, capacityKg: 375, shaftWidth_A: 1700, shaftDepth_B: 1000, carWidth_C: 1000, carDepth_D: 1100 },
      { person: 6, capacityKg: 450, shaftWidth_A: 1800, shaftDepth_B: 1100, carWidth_C: 1100, carDepth_D: 1400 },
      { person: 8, capacityKg: 600, shaftWidth_A: 1800, shaftDepth_B: 1100, carWidth_C: 1200, carDepth_D: 1550 },
      { person: 10, capacityKg: 750, shaftWidth_A: 1900, shaftDepth_B: 1300, carWidth_C: 1200, carDepth_D: 1550 },
      { person: 12, capacityKg: 900, shaftWidth_A: 2000, shaftDepth_B: 1300, carWidth_C: 1300, carDepth_D: 2000 },
      { person: 15, capacityKg: 1125, shaftWidth_A: 2000, shaftDepth_B: 1300, carWidth_C: 1300, carDepth_D: 2000 },
      { person: 20, capacityKg: 1600, shaftWidth_A: 2100, shaftDepth_B: 1400, carWidth_C: null, carDepth_D: 2400 },
    ],
  },
};

// ---------------------------------------------------------------------------
// Elevator model catalog
// ---------------------------------------------------------------------------
const rawElevatorCatalog = [
  {
    id: "passenger",
    name: "Passenger Elevator",
    category: "Residential & Commercial",
    tagline: "Form, Function & Architectural Flexibility",
    image: assetUrl("/assets/elevators/passenger_elevator.jpg"),
    drawings: {
      main: assetUrl("/assets/drawings/auto_passenger_technical_drawing.png"),
      plan: assetUrl("/assets/drawings/auto_door_plan.png"),
      elevation: assetUrl("/assets/drawings/auto_door_elevation.png"),
      door: assetUrl("/assets/drawings/auto_door_drawing.png"),
      manualAlt: assetUrl("/assets/drawings/manual_passenger_technical_drawing.png")
    },
    overview: "The KRUPA Passenger Elevator line unifies architectural flexibility with advanced vertical transport engineering. Created to enhance the modern and contemporary look of low, mid, and high-rise residential buildings and commercial facilities, it offers customizable cabin, entrance door, and shaft dimensions with unmatched passenger ride comfort.",
    typicalApplications: ["Residential Apartments", "Commercial Office Towers", "Shopping Malls", "Educational Institutes", "Hotels & Hospitality"],
    structure: {
      machine: "Permanent Magnet Synchronous (PMS) Gearless Machine or M67/M76 Geared Traction Machine with V3F Vector Drive.",
      controller: "32-bit Microprocessor High-Technology Control Panel with full collective group dispatch and closed-loop leveling.",
      hoistRopes: "High-tensile steel wire ropes (8x19S + FC / IWRC) engineered for maximum safety factor and low vibration.",
      guideRails: "Machined T-section steel guide rails (T75/T89) mounted with vibration-damping isolation clips.",
      counterweight: "Cast-iron or heavy composite filler blocks housed in a rigid structural steel frame matching cabin deadweight + 45-50% rated load.",
      doorSystem: "VVVF microprocessor frequency conversion entrance door header delivering smooth, whisper-quiet S-curve cycling.",
      landingDoors: "S.S. 304 Center-Opening, Telescopic, or Fire-Rated Powder-Coated Swing/Collapsible doors.",
      pit: "1600 mm deep waterproof reinforced concrete pit with heavy-duty energy-absorbing polyurethane or oil buffers.",
      overhead: "4900 mm to 5100 mm top hoistway clearance accommodating safety deceleration stroke and maintenance technician safety space."
    },
    standardSpecs: {
      application: "Low, mid & high-rise residential; low & mid-rise commercial",
      capacity: "4 to 26 Persons (272 to 1768 Kgs)",
      ratedSpeed: "0.63 to 2.0 MPS",
      voltage: "415V, 3-Phase, 50 Hz A.C. (Single-phase available for compact models)",
      entrances: "1 (Single) or 2 (Through / Opposite cabin entrances)",
      carWidth: "950 mm to 2000 mm (Dimension A - Cabin Width)",
      carDepth: "1000 mm to 2400 mm (Dimension B - Cabin Depth)",
      pitDepth: "1600 mm",
      overhead: "4900 mm (Speed 1.0 - 1.5 mps) / 5100 mm (Speed 2.0 mps)",
      doorType: "Automatic Center Opening / Telescopic / Manual Collapsible / Swing",
      drive: "Gearless PMS / Geared Traction with V3F Drive",
      control: "Full Collective Microprocessor Controller with CAN bus serial communication",
      lighting: "Energy-efficient LED downlights with automated idle sleep timer",
      rescueSystem: "Automatic Rescue Device (ARD) with battery-driven landing recall",
      monitoring: "24-Hour IoT Remote Telemetry Monitoring Available"
    },
    civilMatrix: automaticDoorElevatorTable.rows.map(r => ({
      persons: r.persons,
      capacity: r.loadKg,
      carW: r.platformEdgeWidth_A,
      carD: r.platformEdgeDepth_B,
      shaftW: r.liftWellWidth_C,
      shaftD: r.liftWellDepth_D,
      entrance: r.entranceWidth_E,
      doorType: r.doorType,
      speed: r.speedMps,
      pit: r.pitDepth,
      overhead: r.overHead,
      machineRoom: `${r.machineRoomWidth_K} × ${r.machineRoomLength_L}`
    })),
    technicalTables: [
      {
        id: "auto",
        title: automaticDoorElevatorTable.title,
        notes: automaticDoorElevatorTable.notes,
        legend: automaticDoorElevatorTable.legend,
        columns: automaticDoorElevatorTable.columns,
        rows: automaticDoorElevatorTable.rows
      },
      {
        id: "manual",
        title: manualDoorElevatorTable.title,
        notes: manualDoorElevatorTable.notes,
        legend: manualDoorElevatorTable.legend,
        columns: manualDoorElevatorTable.columns,
        rows: manualDoorElevatorTable.rows
      }
    ],
    compatibleDoors: ["ss-center-opening", "ss-telescopic", "small-vision-autodoor", "powder-coated-glass-swing"],
    compatibleMachines: ["PMS Gearless Traction", "M67 Geared Machine", "M76 Geared Machine"],
    features: [
      "Architectural flexibility adapting to custom passenger cabin, door, and shaft dimensions",
      "Silky-smooth ride comfort with sub-50dB whisper-quiet cabin acoustics",
      "Permanent Magnet Synchronous motor consuming up to 30% less energy",
      "Full safety failsafes: Inbuilt CDL, infrared light curtains, and ARD",
      "High leveling precision within ±3 mm eliminating trip hazards"
    ]
  },
  {
    id: "capsule",
    name: "Capsule Elevator",
    category: "Architectural & Commercial",
    tagline: "Futuristic Design, Architectural Jewel",
    image: assetUrl("/assets/elevators/capsule_elevator.jpg"),
    drawings: {
      main: assetUrl("/assets/drawings/capsule_technical_drawing.png"),
      plan: assetUrl("/assets/drawings/capsule_option_a_plan.png"),
      elevation: assetUrl("/assets/drawings/capsule_drawings.png"),
      optionB: assetUrl("/assets/drawings/capsule_option_b_plan.png")
    },
    overview: "KRUPA Capsule Elevators act as striking architectural centerpieces for upscale commercial centers, luxury hotels, shopping atriums, and corporate complexes. Designed with high-impact laminated safety glass, customized exterior contours, and concealed satin-finish stainless steel fixings, they turn every vertical ride into a visual attraction.",
    typicalApplications: ["Shopping Malls & Retail Atriums", "Luxury Hotels & Resorts", "Corporate Headquarters", "Multiplexes & Cultural Centers"],
    structure: {
      machine: "High-torque PMS Gearless Traction Machine positioned in overhead machine room or MRL cantilever configuration.",
      controller: "Advanced 32-bit Microprocessor Controller with scenic illumination dimmer integration.",
      hoistRopes: "Flexible pre-stretched steel wire ropes routed through lacquered aerodynamic traction crossarms.",
      guideRails: "Solid cold-drawn T-rails mounted to exposed structural steel glass hoistway framing.",
      counterweight: "Aesthetically enclosed steel frame with counterweight safety block and bottom guide shoes.",
      doorSystem: "Frameless or hairline SS glass center-opening doors with high-speed VVVF synchronized operator.",
      landingDoors: "Full-vision panoramic glass landing doors with stainless steel perimeter frames.",
      pit: "1600 mm finished pit with decorative drainage cover and polished buffer pillars.",
      overhead: "4900 mm overhead clearance accommodating capsule decorative canopy and roof maintenance station."
    },
    standardSpecs: {
      application: "Commercial atriums, luxury hotels, shopping centers, corporate headquarters",
      capacity: "06 to 16 Passengers (408 to 1088 Kgs)",
      ratedSpeed: "1.0, 1.5, 2.0 MPS",
      voltage: "415V, 3-Phase, 50 Hz",
      entrances: "1 or 2 (Front / Rear Glass Entrances)",
      carWidth: "1100 mm to 1550 mm (Dimension A)",
      carDepth: "1300 mm to 1500 mm (Dimension B)",
      pitDepth: "1600 mm",
      overhead: "4900 mm",
      doorType: "Automatic Glass Big Vision / Full Vision Panoramic Glass",
      drive: "Permanent Magnet Synchronous (PMS) Gearless Traction",
      control: "Microprocessor High-Technology Control with Group Dispatch",
      lighting: "Perimeter cove LED downlights + exterior decorative canopy illumination",
      rescueSystem: "Automatic Rescue Device (ARD) with battery backup",
      monitoring: "24-Hour IoT Remote Telemetry Ready"
    },
    civilMatrix: capsuleElevatorTable.optionA.rows.map(r => ({
      persons: r.person,
      capacity: r.kgs,
      carW: r.carInside_A,
      carD: r.carInside_B,
      shaftW: r.leftWell_C,
      shaftD: r.leftWell_D,
      entrance: r.entrance,
      doorType: "Glass Big Vision",
      speed: "1.0 / 1.5 / 2.0",
      pit: 1600,
      overhead: 4900,
      machineRoom: "Option A / B"
    })),
    technicalTables: [
      {
        id: "optA",
        title: `${capsuleElevatorTable.title} – ${capsuleElevatorTable.optionA.label}`,
        notes: capsuleElevatorTable.notes,
        legend: capsuleElevatorTable.legend,
        legendCaveat: capsuleElevatorTable.legendCaveat,
        columns: capsuleElevatorTable.optionA.columns,
        rows: capsuleElevatorTable.optionA.rows
      },
      {
        id: "optB",
        title: `${capsuleElevatorTable.title} – ${capsuleElevatorTable.optionB.label}`,
        notes: capsuleElevatorTable.notes,
        legend: capsuleElevatorTable.legend,
        legendCaveat: capsuleElevatorTable.legendCaveat,
        columns: capsuleElevatorTable.optionB.columns,
        rows: capsuleElevatorTable.optionB.rows
      }
    ],
    compatibleDoors: ["glass-big-vision", "glass-full-vision", "ss-center-opening"],
    compatibleMachines: ["I-127 Gearless PMS Machine", "Permanent Magnet Synchronous Motor"],
    features: [
      "Geometric cabin forms: Rear Side, Semi-Circle, 3-Side Cutting Edge, 5-Side Cutting Edge",
      "High-impact laminated architectural safety glass (curved or flat panels)",
      "Concealed stainless steel satin-finish structural fixing hardware",
      "Aluminum bulb plate platform with lacquered traction angles",
      "Smooth, vibration-free panoramic ride up to 66 meters travel height"
    ]
  },
  {
    id: "hospital",
    name: "Hospital Elevator",
    category: "Healthcare & Critical Care",
    tagline: "Smooth, Secure & Rapid Patient Transport",
    image: assetUrl("/assets/elevators/hospital_elevator.jpg"),
    drawings: {
      main: assetUrl("/assets/drawings/hospital_technical_drawing.png"),
      plan: assetUrl("/assets/drawings/hospital_plan.png"),
      elevation: assetUrl("/assets/drawings/hospital_elevation.png"),
      door: assetUrl("/assets/drawings/hospital_drawing.png")
    },
    overview: "KRUPA Hospital Bed Elevators are designed to provide the most secure, reliable, and sterile ambience required in critical healthcare environments. Engineered with deep stretcher-length cabins, jerk-free acceleration curves, electromagnetic compatibility (EMC) to prevent interference with sensitive medical monitors, and emergency medical priority recall.",
    typicalApplications: ["Multi-Specialty Hospitals", "Trauma Centers", "Medical Clinics", "Maternity Homes", "Diagnostic Labs"],
    structure: {
      machine: "Heavy-duty low-noise PMS Gearless or Geared Traction Machine optimized for jerk-free low-speed deceleration.",
      controller: "Medical-grade Microprocessor Controller with EMC shielding and Code Blue emergency medical override.",
      hoistRopes: "Multi-strand steel wire ropes providing maximum suspension redundancy and stability.",
      guideRails: "Rigid heavy-section guide rails preventing car rocking during heavy stretcher and equipment roll-in.",
      counterweight: "Precision-balanced counterweight frame with safety interlock.",
      doorSystem: "Extra-wide automatic center-opening or two-panel telescopic doors with door hold-open time extension button.",
      landingDoors: "Stainless Steel 304 seamless landing entrances with protective stainless bumper kickplates.",
      pit: "1600 mm concrete pit with heavy-duty energy-absorbing spring/oil buffers.",
      overhead: "5100 mm overhead height allowing high cabin ceilings and emergency medical oxygen gear."
    },
    standardSpecs: {
      application: "Hospitals, medical institutions, nursing homes, convalescent clinics",
      capacity: "15 to 26 Passengers / Bed Stretcher (1020 to 1768 Kgs)",
      ratedSpeed: "0.63 / 1.0 / 1.5 MPS",
      voltage: "415V, 3-Phase, 50 Hz",
      entrances: "1 (Single) or 2 (Opposite / Walk-through for trauma wards)",
      carWidth: "1000 mm to 1600 mm (Dimension C)",
      carDepth: "2400 mm (Stretcher length, Dimension D)",
      pitDepth: "1600 mm",
      overhead: "5100 mm",
      doorType: "Automatic Center Opening / Telescopic / Manual Collapsible Stretcher Gate",
      drive: "V3F Closed-Loop Vector Drive (Zero jerk on start & stop)",
      control: "Intellectual Microprocessor Control with Electromagnetic Compatibility (EMC)",
      lighting: "Flicker-free warm white LED recessed light panels (medical grade)",
      rescueSystem: "Automatic Rescue Device (ARD) with immediate nearest-floor landing recall",
      monitoring: "24-Hour IoT Medical Facility Priority Telemetry Ready"
    },
    civilMatrix: hospitalElevatorTable.automaticCentreOpeningDoor.rows.map(r => ({
      persons: r.person,
      capacity: r.capacityKg,
      carW: r.carWidth_C,
      carD: r.carDepth_D,
      shaftW: r.shaftWidth_A,
      shaftD: r.shaftDepth_B,
      entrance: r.entrance_E,
      doorType: "Auto Center Opening",
      speed: "0.63 / 1.0",
      pit: 1600,
      overhead: 5100,
      machineRoom: "600+C × 600+D"
    })),
    technicalTables: [
      {
        id: "autoCentre",
        title: hospitalElevatorTable.automaticCentreOpeningDoor.title,
        legend: hospitalElevatorTable.automaticCentreOpeningDoor.legend,
        columns: hospitalElevatorTable.automaticCentreOpeningDoor.columns,
        rows: hospitalElevatorTable.automaticCentreOpeningDoor.rows
      },
      {
        id: "autoTelescopic",
        title: hospitalElevatorTable.automaticTelescopicDoor.title,
        legend: hospitalElevatorTable.automaticTelescopicDoor.legend,
        columns: hospitalElevatorTable.automaticTelescopicDoor.columns,
        rows: hospitalElevatorTable.automaticTelescopicDoor.rows
      },
      {
        id: "stretcherManual",
        title: hospitalElevatorTable.title,
        notes: hospitalElevatorTable.notes,
        legend: hospitalElevatorTable.legend,
        columns: hospitalElevatorTable.columns,
        rows: hospitalElevatorTable.rows
      }
    ],
    compatibleDoors: ["center-opening-4panel", "ss-telescopic", "ss-center-opening", "manual-swing"],
    compatibleMachines: ["PMS Gearless Traction", "M76 Heavy Geared Machine"],
    features: [
      "Smooth and secure ride preventing passenger or patient discomfort",
      "Electromagnetic compatibility (EMC) protecting sensitive life-support monitors",
      "Emergency landing device ensuring rapid evacuation during power outages",
      "Deep 2400 mm cabin platform accommodating intensive care beds and medical staff",
      "Antibacterial stainless steel wall panels and seamless PVC flooring for easy sanitation"
    ]
  },
  {
    id: "goods",
    name: "Goods Elevator",
    category: "Industrial & Warehousing",
    tagline: "Sturdy & Heavy Carrying Solutions",
    image: assetUrl("/assets/elevators/goods_elevator.jpg"),
    drawings: {
      main: assetUrl("/assets/drawings/goods_technical_drawing.png"),
      plan: assetUrl("/assets/drawings/goods_plan.png"),
      elevation: assetUrl("/assets/drawings/goods_elevation.png"),
      doors: assetUrl("/assets/drawings/goods_doors_drawing.png")
    },
    overview: "KRUPA Goods Elevators are rugged industrial workhorses engineered to withstand heavy tonnage, forklift loading impacts, and demanding duty cycles. Manufactured with reinforced structural steel freight cabin frames, checkered non-slip floors, and heavy-duty traction machines to deliver seamless material transport across factories, warehouses, and logistics centers.",
    typicalApplications: ["Manufacturing Plants", "Industrial Warehouses", "Cold Storage Units", "Logistics & Distribution Hubs", "Textile & Engineering Mills"],
    structure: {
      machine: "Heavy-duty helical-worm geared traction machine or dual-piston hydraulic power unit.",
      controller: "Robust industrial-grade Microprocessor Controller with overload sensor lockouts.",
      hoistRopes: "Heavy-gauge certified steel wire ropes with calibrated spring-loaded tension equalizers.",
      guideRails: "Reinforced T-section guide rails (T89/T127) securely anchored to concrete shaft beams.",
      counterweight: "High-density steel counterweight with cast-iron ballast blocks.",
      doorSystem: "Heavy industrial vertical bi-parting doors, collapsible steel gates, or reinforced power sliding doors.",
      landingDoors: "Flush steel or collapsible steel landing gates with mechanical cam interlocks.",
      pit: "1600 mm deep reinforced concrete pit with heavy structural I-beam buffer pedestals.",
      overhead: "5100 mm / 5400 mm clearance providing safe headroom for high freight loads and overhead crane access."
    },
    standardSpecs: {
      application: "Industrial warehouses, manufacturing facilities, logistics parks, shipping hubs",
      capacity: "500 to 3000 Kgs (High-tonnage custom engineering up to 5 tons)",
      ratedSpeed: "0.25 to 1.0 MPS",
      voltage: "415V, 3-Phase, 50 Hz",
      entrances: "1 (Single Way) or 2 (Double Way / Through Cabin Access)",
      carWidth: "1500 mm to 2000 mm (Dimension A - Freight Width)",
      carDepth: "1200 mm to 3000 mm (Dimension B - Freight Depth)",
      pitDepth: "1600 mm",
      overhead: "5100 mm to 5400 mm",
      doorType: "Collapsible Landing Gate / Vertical Bi-Parting / Two-Panel Sliding",
      drive: "Heavy Duty Geared Traction Machine or Hydraulic Power Unit",
      control: "Heavy-duty Microprocessor Control with Electronic Overload Indicator",
      lighting: "Impact-resistant enclosed LED bulkhead lamps",
      rescueSystem: "Manual brake release lever + optional Automatic Rescue Device",
      monitoring: "Industrial Plant Telemetry Ready"
    },
    civilMatrix: goodsElevatorTable.rows.map(r => ({
      persons: "-",
      capacity: r.loadKg,
      carW: r.carInsideWidth_A,
      carD: r.carInsideDepth_B,
      shaftW: r.liftWellWidth_C,
      shaftD: r.liftWellDepth_D,
      entrance: r.entranceWidth,
      doorType: "Collapsible / Sliding",
      speed: r.speedMps,
      pit: r.pitDepth,
      overhead: r.overHead,
      machineRoom: `${r.machineRoomWidth_K} × ${r.machineRoomLength_L}`
    })),
    technicalTables: [
      {
        id: "goodsMain",
        title: goodsElevatorTable.title,
        notes: goodsElevatorTable.notes,
        legend: goodsElevatorTable.legend,
        columns: goodsElevatorTable.columns,
        rows: goodsElevatorTable.rows
      }
    ],
    compatibleDoors: ["collapsible", "imperforated", "vertical-bi-parting", "center-opening-4panel"],
    compatibleMachines: ["Heavy Duty Geared Traction Machine", "Industrial Hydraulic Cylinder"],
    features: [
      "Heavy duty powder coated steel freight cabin with bump-rail wall protection",
      "Reinforced sill construction capable of handling hand-pallet and forklift loads",
      "Accurate floor leveling preventing wheel snag during loading and unloading",
      "Electronic overload detection preventing dispatch when rated capacity is exceeded",
      "Travel height support up to 66 meters across multi-tier factory floors"
    ]
  },
  {
    id: "car",
    name: "Car Elevator & Multi-Level Parking",
    category: "Automotive & Logistics",
    tagline: "Pioneering Solutions for Automobile Transportation",
    image: assetUrl("/assets/elevators/car_elevator.jpg"),
    drawings: {
      main: assetUrl("/assets/drawings/car_elevator_technical_drawing.png"),
      plan: assetUrl("/assets/drawings/car_elevator_plan.png"),
      elevation: assetUrl("/assets/drawings/car_elevator_elevation.png"),
      parkingSystems: assetUrl("/assets/drawings/car_parking_systems.png")
    },
    overview: "KRUPA Car Elevators and Automated Parking Assistants provide robust vertical transportation for passenger cars, SUVs, and light commercial vehicles. Featuring expansive drive-through platforms, double-side opening configurations, checkered non-skid floors, and complementary puzzle/stacker parking systems to maximize urban parking capacity.",
    typicalApplications: ["Multi-Level Car Showrooms", "Commercial Parking Garages", "Automotive Service Centers", "Luxury Residential Towers", "Rooftop Parking Facilities"],
    structure: {
      machine: "High-capacity Geared Traction Machine or multi-stage Hydraulic Ram cylinders.",
      controller: "Dedicated Automotive Microprocessor Panel with vehicle optical positioning sensors.",
      hoistRopes: "Heavy-duty steel hoisting ropes with dynamic load equalization.",
      guideRails: "Extra-heavy machined T-rails (T127) resisting massive eccentric vehicular wheel loads.",
      counterweight: "High-tonnage counterweight with structural safety catch catches.",
      doorSystem: "Wide 4-panel center-opening automatic doors or vertical bi-parting automotive gates.",
      landingDoors: "Reinforced steel landing doors with protective bumper rub-rails.",
      pit: "1600 mm pit depth with structural buffer pillars and oil-water separator drain.",
      overhead: "4900 mm overhead clearance accommodating roof rack vehicles and SUVs."
    },
    standardSpecs: {
      isCarElevator: true,
      application: "Commercial car parks, automobile dealerships, luxury residential towers, private garages",
      capacity: "500 to 5000 Kgs (Solutions available for higher capacities)",
      ratedSpeed: "0.50 MPS (Solutions available for other speeds)",
      voltage: "415V, 3-Phase, 50 Hz",
      entrances: "1 (Single End) or 2 (Front-to-Back Drive-Through Option)",
      carWidth: "2500 mm to 2800 mm (Platform Width)",
      carDepth: "5190 mm to 6000 mm (Platform Depth)",
      pitDepth: "1600 mm",
      overhead: "4900 mm",
      doorType: "Vertical Bi-Parting Door / Auto Center Opening",
      drive: "Heavy Duty Geared Traction or Hydraulic Power Unit",
      control: "Automotive Microprocessor Control with Driver In-Car Remote Calling",
      lighting: "High-intensity flush LED ceiling strip arrays with vehicle positioning guide lights",
      rescueSystem: "Automatic Rescue Device with battery pack landing recall",
      monitoring: "Smart Parking Telemetry Integration Ready"
    },
    civilMatrix: [
      { persons: "Car / LMV", capacity: 2500, carW: 2500, carD: 5190, shaftW: 4000, shaftD: 6000, entrance: 2500, doorType: "4-Panel Auto Center", speed: "0.50", pit: 1600, overhead: 4900, machineRoom: "3500 Kg Hoist Beam" },
      { persons: "SUV / Van", capacity: 3500, carW: 2600, carD: 5500, shaftW: 4200, shaftD: 6300, entrance: 2500, doorType: "4-Panel Auto Center", speed: "0.50", pit: 1600, overhead: 4900, machineRoom: "4500 Kg Hoist Beam" },
      { persons: "Heavy Comm.", capacity: 5000, carW: 2800, carD: 6000, shaftW: 4500, shaftD: 6800, entrance: 2700, doorType: "Vertical Bi-Parting", speed: "0.50", pit: 1600, overhead: 4900, machineRoom: "6000 Kg Hoist Beam" }
    ],
    technicalTables: [
      {
        id: "carMain",
        title: carElevatorTechnical.title + " – Technical Specifications",
        loadHookNote: carElevatorTechnical.loadHookNote,
        holdingBeamCapacity: carElevatorTechnical.holdingBeamCapacity,
        columns: carElevatorTechnical.columns,
        rows: carElevatorTechnical.rows
      }
    ],
    compatibleDoors: ["center-opening-4panel", "vertical-bi-parting"],
    compatibleMachines: ["Heavy Duty Geared Traction Machine", "Multi-Ram Hydraulic Cylinder"],
    features: [
      "Front and rear double-side opening option allowing drive-through without reversing",
      "S.S. Checkered plate or Aluminum Checkered plate heavy-duty anti-slip flooring",
      "In-cabin traffic lights (Red/Green) and optical sensors for correct car positioning",
      "Complimentary automated parking solutions: Puzzle Parking, Car Scissor Lifts, Stacker Parking",
      "Safety interlocks preventing elevator movement until vehicle is completely within perimeter"
    ]
  },
  {
    id: "mrl",
    name: "MRL (Machine Room Less) Elevator",
    category: "Architectural & Space-Saving",
    tagline: "More Space, More Efficiency, Futuristic Tech",
    image: assetUrl("/assets/elevators/mrl_elevator.jpg"),
    drawings: {
      main: assetUrl("/assets/drawings/mrl_technical_drawing.png"),
      plan: assetUrl("/assets/drawings/mrl_liftwell_plan.png"),
      elevation: assetUrl("/assets/drawings/mrl_section_elevation.png"),
      terrace: assetUrl("/assets/drawings/mrl_terrace_plan.png")
    },
    overview: "KRUPA Machine Roomless (MRL) Elevators embody the concept of environmental protection and energy conservation. By mounting a permanent magnet synchronous gearless traction machine directly inside the hoistway, the need for a penthouse machine room is completely eliminated. This saves 25% of total elevator equipment area and reduces 40% of building space occupation.",
    typicalApplications: ["Residential Apartments with Terrace Penthouses", "Heritage & Low-Profile Commercial Buildings", "Villas with Strict Height Restrictions", "Modern Architecture Requiring Clean Rooflines"],
    structure: {
      machine: "Compact Permanent Magnet Synchronous (PMS) Gearless Machine mounted on shaft top guide rails.",
      controller: "Ultra-slim integrated MRL controller embedded into the top landing door architrave frame.",
      hoistRopes: "High-flexibility coated steel wire ropes routed through top diverter pulleys.",
      guideRails: "Heavy structural T-rails carrying both cabin travel guidance and machine reaction loads.",
      counterweight: "Side-mounted or rear-mounted counterweight frame maximizing usable cabin area.",
      doorSystem: "Low-profile VVVF synchronous belt-driven automatic center-opening door operator.",
      landingDoors: "Full stainless steel or architectural powder-coated landing doors.",
      pit: "1600 mm pit depth with compact high-density polyurethane energy buffers.",
      overhead: "4900 mm to 5185 mm overhead with integrated terrace inspection window (900 × 900 mm)."
    },
    standardSpecs: {
      application: "Residential towers, commercial buildings, villas requiring zero rooftop machine room",
      capacity: "05 to 26 Persons (340 to 1768 Kgs)",
      ratedSpeed: "1.00 / 1.50 / 2.0 MPS",
      voltage: "415V, 3-Phase, 50 Hz",
      entrances: "1 or 2 (Front / Rear)",
      carWidth: "1070 mm to 2100 mm (Cabin Inside C)",
      carDepth: "1270 mm to 2400 mm (Cabin Inside D)",
      pitDepth: "1600 mm",
      overhead: "4900 mm to 5185 mm (Inspection window at terrace level)",
      doorType: "Automatic Center Opening / Telescopic Doors",
      drive: "New Generation Permanent Magnet Synchronous Gearless Traction",
      control: "MRL Gearless Integrated Controller inside door jamb (Zero penthouse room)",
      lighting: "Energy-efficient solid-state LED ceiling panels with automatic sleep mode",
      rescueSystem: "Automatic Rescue Device (ARD) with electrical brake release",
      monitoring: "24-Hour IoT Remote Telemetry Ready"
    },
    civilMatrix: mrlElevatorTechnical.rows.map(r => ({
      persons: r.person,
      capacity: r.kgs,
      carW: r.cabinInsideWidth_C || "-",
      carD: r.cabinInsideDepth_D || "-",
      shaftW: r.liftWellWidth_A,
      shaftD: r.liftWellDepth_B,
      entrance: r.entry,
      doorType: "Auto Center Opening",
      speed: "1.0 / 1.5 / 2.0",
      pit: 1600,
      overhead: 5185,
      machineRoom: "Zero (Inside Shaft)"
    })),
    technicalTables: [
      {
        id: "mrlMain",
        title: mrlElevatorTechnical.title,
        notes: mrlElevatorTechnical.notes,
        legend: mrlElevatorTechnical.legend,
        dataConfidenceNote: mrlElevatorTechnical.dataConfidenceNote,
        columns: mrlElevatorTechnical.columns,
        rows: mrlElevatorTechnical.rows
      }
    ],
    compatibleDoors: ["ss-center-opening", "ss-telescopic", "small-vision-autodoor", "glass-big-vision"],
    compatibleMachines: ["New Generation PMS Gearless Machine", "I-127 Gearless Machine"],
    features: [
      "Saves 25% of total elevator equipment area by eliminating penthouse machine room",
      "Reduces 40% of building space occupation, allowing seamless architectural rooflines",
      "Whisper-quiet acoustic performance under 50 dB with permanent magnet synchronous drive",
      "Energy saving up to 40% compared to conventional geared elevator systems",
      "Inspection window at terrace level (900 × 900 mm) for convenient maintenance inspection"
    ]
  },
  {
    id: "home",
    name: "Home Elevator",
    category: "Luxury Residential & Private Villas",
    tagline: "Elevate Your Living Standard, Care for Your Family",
    image: assetUrl("/assets/elevators/home_elevator.jpg"),
    drawings: {
      main: assetUrl("/assets/drawings/home_technical_drawing.png"),
      plan: assetUrl("/assets/drawings/home_plan.png"),
      elevation: assetUrl("/assets/drawings/home_elevation.png"),
      doors: assetUrl("/assets/drawings/home_drawing.png")
    },
    overview: "KRUPA Home Elevators are custom-crafted to elevate the comfort, accessibility, and architectural prestige of private bungalows, luxury duplexes, and multi-storey villas. Operating smoothly on single-phase 220V domestic household electricity, they require an ultra-shallow pit of only 550 mm and an overhead clearance of 3100 mm, enabling hassle-free retrofits into existing homes.",
    typicalApplications: ["Private Villas & Bungalows", "Duplex Penthouses", "Multi-Storey Family Residences", "Senior-Friendly Home Renovations"],
    structure: {
      machine: "Compact Mini Gearless PMS Machine requiring zero dedicated machine room.",
      controller: "Smart Microprocessor Controller with integrated VVVF drive and whisper acoustics.",
      hoistRopes: "High-durability coated synthetic ropes or quiet suspension belts.",
      guideRails: "Precision cold-drawn guide rails anchored to brick wall or standalone steel structure.",
      counterweight: "Compact side-mounted counterweight allowing maximum cabin floor area.",
      doorSystem: "Manual swing door with gray smoked glass or automated telescopic sliding doors.",
      landingDoors: "Coated steel plate frames with gray smoked safety plastic/glass observation windows.",
      pit: "Ultra-compact 550 mm pit depth (no deep excavation needed).",
      overhead: "Compact 3100 mm overhead height easily fitting beneath standard residential ceilings."
    },
    standardSpecs: {
      application: "Multi-storey houses, penthouses, luxury bungalows, private villas",
      capacity: "3 to 4 Passengers (204 to 272 Kgs)",
      ratedSpeed: "0.30 / 0.63 MPS",
      voltage: "220V, Single Phase Domestic Power Supply (or 415V 3-Phase)",
      entrances: "1 (Single) or 2 (Opposite / Adjacent Corner Entrance)",
      carWidth: "810 mm to 850 mm (Dimension A - Cabin Width)",
      carDepth: "700 mm to 1200 mm (Dimension B - Cabin Depth)",
      pitDepth: "550 mm (Ultra-compact civil pit)",
      overhead: "3100 mm (Fits under standard residential ceiling)",
      doorType: "Manual Swing Door with Smoked Glass / Automatic Telescopic Sliding",
      drive: "Mini Gearless Machine (No machine room required)",
      control: "Touch Screen Landing Operating Panel with LCD Surface Mounted Display",
      lighting: "High Cabin Ceiling (2100mm) with LED Down Light / Rectangle Cover Light (CE-EDB-A30)",
      rescueSystem: "Integrated Battery-Powered Automatic Rescue Device (ARD)",
      monitoring: "Home Automation / Smart Villa Integration Ready"
    },
    civilMatrix: homeElevatorTechnical.rows.map(r => ({
      persons: r.persons,
      capacity: r.kgs,
      carW: r.carInsideWidth_A,
      carD: r.carInsideDepth_B,
      shaftW: r.liftWellWidth_C,
      shaftD: r.liftWellDepth_D,
      entrance: r.entrance_E,
      doorType: r.doorOperation,
      speed: r.speedMps,
      pit: r.pit,
      overhead: r.overHead,
      machineRoom: "Zero (Inside Shaft)"
    })),
    technicalTables: [
      {
        id: "homeMain",
        title: homeElevatorTechnical.title + " – Space & Civil Matrix",
        notes: homeElevatorTechnical.notes,
        legend: homeElevatorTechnical.legend,
        columns: homeElevatorTechnical.columns,
        rows: homeElevatorTechnical.rows
      }
    ],
    compatibleDoors: ["powder-coated-glass-swing", "manual-swing", "ss-telescopic", "telescopic-solid"],
    compatibleMachines: ["Mini Gearless Machine", "Single-Phase Traction Drive"],
    features: [
      "Runs on standard domestic single-phase 220V power supply (runs on household electric meter)",
      "Ultra-compact pit depth (550 mm) and overhead clearance (3100 mm)",
      "High cabin ceiling height (2100 mm) with electric fan option and LED downlights",
      "Touch screen landing operating panel with LCD surface mounted plexiglass design",
      "Saves up to 40% energy compared to hydraulic elevator systems with zero hydraulic oil",
      "Whisper-quiet, noiseless, and vibration-free ride for elderly family members"
    ]
  },
  {
    id: "hydraulic",
    name: "Hydraulic Elevator",
    category: "Low-Rise & Zero Overhead Flexibility",
    tagline: "Green Solutions For Better Tomorrow",
    image: assetUrl("/assets/elevators/hydraulic_elevator.jpg"),
    drawings: {
      main: assetUrl("/assets/drawings/hydraulic_technical_drawing.png"),
      plan: assetUrl("/assets/drawings/hydraulic_center_bore_plan.png"),
      elevation: assetUrl("/assets/drawings/hydraulic_drawing.png"),
      threeDShafts: assetUrl("/assets/drawings/hydraulic_3d_shafts.png"),
      ropingPlan: assetUrl("/assets/drawings/hydraulic_roping_plan.png")
    },
    overview: "KRUPA Hydraulic Elevators are engineered for low-rise buildings, showrooms, and luxury residences where rooftop machine rooms cannot be constructed. Driven by high-pressure precision hydraulic cylinders, they offer total architectural freedom: the hydraulic machine unit can be placed flexibly up to 10 meters away on the ground floor or basement. Counterweight devices are not required, maximizing usable shaft space.",
    typicalApplications: ["Low-Rise Luxury Bungalows", "Automobile Showrooms", "Commercial Duplexes", "Industrial Mezzanines", "Heritage Buildings"],
    structure: {
      machine: "Compact Hydraulic Power Unit (Submerged motor pump, silent valve block, oil reservoir).",
      controller: "Hydraulic Microprocessor Controller with soft-stop valve sequencing and thermal cutoff.",
      hoistRopes: "Direct Central Acting cylinder (no ropes) or Indirect Side Acting 2:1 steel wire roping.",
      guideRails: "Solid machined steel guide rails carrying cabin cantilever bracket arm loads.",
      counterweight: "None required! (Hydraulic ram provides full direct vertical propulsion).",
      doorSystem: "Manual swing doors, collapsible gates, or automatic telescopic sliding doors.",
      landingDoors: "Powder-coated steel or architectural glass landing entrances.",
      pit: "1200 mm to 1500 mm pit depth accommodating cylinder buffer stops.",
      overhead: "3100 mm to 4000 mm compact overhead clearance (Zero top machine room required)."
    },
    standardSpecs: {
      application: "Low-rise buildings, villas, industrial facilities with flexible machine room placement",
      capacity: "03 to 24 Passengers (225 to 1800 Kgs) / Up to 3 Tons",
      ratedSpeed: "Up to 0.50 MPS",
      voltage: "415V, 3-Phase, 50 Hz (220V single-phase available for compact villa models)",
      entrances: "1 or 2 (Front / Rear Walk-Through)",
      carWidth: "850 mm to 1500 mm (Dimension C - Cabin Width)",
      carDepth: "900 mm to 2500 mm (Dimension D - Cabin Depth)",
      pitDepth: "1200 mm (Roping type) / 1500 mm (Center bore type)",
      overhead: "4000 mm",
      doorType: "Manual Swing Door / Collapsible Gate / Automatic Telescopic",
      drive: "Direct Central Acting / Indirect Side Acting 2:1 / Direct Side Acting Hydraulic Ram",
      control: "Integrated Hydraulic Microprocessor Controller with Soft Start/Stop Valve",
      lighting: "Recessed energy-efficient LED downlights with automatic idle turn-off",
      rescueSystem: "Emergency manual lowering valve (gravity-driven descent during power outage)",
      monitoring: "Hydraulic Pressure & Thermal Telemetry Ready"
    },
    civilMatrix: hydraulicElevatorTechnical.directOrSplitPistonTable.rows.map(r => ({
      persons: r.person,
      capacity: r.capacityKg,
      carW: r.carWidth_C || "-",
      carD: r.carDepth_D,
      shaftW: r.shaftWidth_A,
      shaftD: r.shaftDepth_B,
      entrance: 700,
      doorType: "Manual / Auto",
      speed: "Up to 0.5",
      pit: 1500,
      overhead: 4000,
      machineRoom: "Remote (0-10m)"
    })),
    technicalTables: [
      {
        id: "directOrSplit",
        title: hydraulicElevatorTechnical.directOrSplitPistonTable.title,
        description: hydraulicElevatorTechnical.directOrSplitPistonTable.description,
        note: hydraulicElevatorTechnical.directOrSplitPistonTable.note,
        legend: hydraulicElevatorTechnical.legend,
        columns: hydraulicElevatorTechnical.directOrSplitPistonTable.columns,
        rows: hydraulicElevatorTechnical.directOrSplitPistonTable.rows
      },
      {
        id: "singleSide",
        title: hydraulicElevatorTechnical.singleSideDirectSuspensionTable.title,
        description: hydraulicElevatorTechnical.singleSideDirectSuspensionTable.description,
        note: hydraulicElevatorTechnical.singleSideDirectSuspensionTable.note,
        legend: hydraulicElevatorTechnical.legend,
        columns: hydraulicElevatorTechnical.singleSideDirectSuspensionTable.columns,
        rows: hydraulicElevatorTechnical.singleSideDirectSuspensionTable.rows
      }
    ],
    compatibleDoors: ["powder-coated-glass-swing", "manual-swing", "collapsible", "ss-telescopic"],
    compatibleMachines: ["Direct Central Acting Hydraulic Ram", "Indirect Side Acting 2:1 Cylinder"],
    features: [
      "Top machine room is completely eliminated; hydraulic pump unit can be placed flexibly up to 10m away",
      "Counterweight device is not needed, which increases hoistway space utilization",
      "Wide loading range and strong adaptability; carrying ability reaches up to 3 tons",
      "Gravity descent during power outage via manual release valve, ensuring 100% passenger evacuation",
      "Multiple drive configurations: Direct Central Acting, Indirect Side Acting 2:1, Direct Side Acting"
    ]
  }
];

export const elevatorMaster = rawElevatorCatalog.map((elev) => ({
  ...elev,
  ...(elevatorSeoData[elev.id] || {})
}));

// ---------------------------------------------------------------------------
// getElevatorSingleTable(elevatorId)
// Provides EXACTLY ONE comprehensive engineering table for each elevator model,
// strictly matching Krupa Elevators brochure pages 18-22.
// Contains ALL rows and configurations in a single unified table without
// filters, tabs, or toggles.
// ---------------------------------------------------------------------------
export function getElevatorSingleTable(elevatorId) {
  switch (elevatorId) {
    case "passenger":
      return {
        title: "Passenger Elevator — Full Hoistway Dimensions & Specifications",
        subtitle: "Complete matrix covering both Automatic Center-Opening and Manual Door Passenger Elevator installations.",
        legend: {
          A: "Platform Edge – width (car platform)",
          B: "Platform Edge – depth (car platform)",
          C: "Lift-Well In-Side Finished – width",
          D: "Lift-Well In-Side Finished – depth",
          E: "Entrance Width",
          K: "Machine Room – width",
          L: "Machine Room – length",
        },
        notes: [
          "All Dimensions are in mm.",
          "All hoist way walls should be minimum 230 mm brick or 150 mm R.C.C.",
          "Standard engineering specifications. Custom dimensions available upon technical consultation."
        ],
        columns: [
          { key: "doorSystem", label: "Door System" },
          { key: "persons", label: "Persons" },
          { key: "loadKg", label: "Load (Kg)" },
          { key: "carSize", label: "Car Platform A × B (mm)" },
          { key: "shaftSize", label: "Lift-Well C × D (mm)" },
          { key: "entrance", label: "Entrance E (mm)" },
          { key: "doorType", label: "Door Type" },
          { key: "machineRoom", label: "Machine Room K × L (mm)" },
          { key: "speed", label: "Speed (mps)" },
          { key: "pit", label: "Pit (mm)" },
          { key: "overhead", label: "Overhead (mm)" },
        ],
        rows: [
          // Automatic Door installations (Brochure Page 19)
          { doorSystem: "Automatic Door", persons: 6, loadKg: 408, carSize: "1200 × 1300", shaftSize: "1700 × 1800", entrance: 700, doorType: "Auto Center Opening", machineRoom: "300+C+300 × 600+D+1500", speed: "Up to 1.5", pit: 1600, overhead: 4900 },
          { doorSystem: "Automatic Door", persons: 8, loadKg: 544, carSize: "1500 × 1330", shaftSize: "2000 × 1800", entrance: 800, doorType: "Auto Center Opening", machineRoom: "300+C+300 × 600+D+1500", speed: "Up to 1.5", pit: 1600, overhead: 4900 },
          { doorSystem: "Automatic Door", persons: 10, loadKg: 680, carSize: "1650 × 1450", shaftSize: "2150 × 2000", entrance: 800, doorType: "Auto Center Opening", machineRoom: "600+C+600 × 600+D+1500", speed: "Up to 1.5", pit: 1600, overhead: 4900 },
          { doorSystem: "Automatic Door", persons: 13, loadKg: 884, carSize: "1900 × 1500", shaftSize: "2400 × 2000", entrance: 800, doorType: "Auto Center Opening", machineRoom: "600+C+600 × 600+D+1500", speed: "Up to 1.5", pit: 1600, overhead: 4900 },
          { doorSystem: "Automatic Door", persons: 16, loadKg: 1088, carSize: "1900 × 1800", shaftSize: "2400 × 2300", entrance: 1000, doorType: "Auto Center Opening", machineRoom: "600+C+600 × 600+D+1500", speed: "Up to 1.5", pit: 1600, overhead: 4900 },
          { doorSystem: "Automatic Door", persons: 20, loadKg: 1360, carSize: "1900 × 2250", shaftSize: "2400 × 2750", entrance: 1000, doorType: "Auto Center Opening", machineRoom: "600+C+600 × 600+D+1500", speed: "Up to 1.5", pit: 1600, overhead: 4900 },
          // Manual Door installations (Brochure Page 18)
          { doorSystem: "Manual Door", persons: 5, loadKg: 340, carSize: "950 × 1300", shaftSize: "1350 × 1650", entrance: 760, doorType: "Collapsible Gate", machineRoom: "300+C+300 × 600+D+1500", speed: "Up to 0.68", pit: 1600, overhead: 4900 },
          { doorSystem: "Manual Door", persons: 5, loadKg: 340, carSize: "1300 × 1000", shaftSize: "1700 × 1300", entrance: 760, doorType: "Swing Door", machineRoom: "300+C+300 × 600+D+1500", speed: "Up to 0.68", pit: 1600, overhead: 4900 },
          { doorSystem: "Manual Door", persons: 6, loadKg: 408, carSize: "1200 × 1000", shaftSize: "1600 × 1500", entrance: 800, doorType: "Imperforate Gate", machineRoom: "300+C+300 × 600+D+1500", speed: "Up to 0.68", pit: 1600, overhead: 4900 },
          { doorSystem: "Manual Door", persons: 8, loadKg: 544, carSize: "1500 × 1200", shaftSize: "1900 × 1500", entrance: 800, doorType: "Collapsible / Swing", machineRoom: "300+C+300 × 600+D+1500", speed: "Up to 0.68", pit: 1600, overhead: 4900 },
          { doorSystem: "Manual Door", persons: 13, loadKg: 884, carSize: "1900 × 1500", shaftSize: "2400 × 1850", entrance: 900, doorType: "Collapsible / Swing", machineRoom: "600+C+600 × 300+D+1500", speed: "Up to 0.68", pit: 1600, overhead: 4900 },
          { doorSystem: "Manual Door", persons: 16, loadKg: 1088, carSize: "1900 × 1800", shaftSize: "2400 × 2150", entrance: 1000, doorType: "Collapsible / Swing", machineRoom: "600+C+600 × 300+D+1500", speed: "Up to 0.68", pit: 1600, overhead: 4900 },
          { doorSystem: "Manual Door", persons: 20, loadKg: 1360, carSize: "1900 × 2250", shaftSize: "2400 × 2600", entrance: 1000, doorType: "Collapsible / Swing", machineRoom: "600+C+600 × 300+D+1500", speed: "Up to 0.68", pit: 1600, overhead: 4900 },
        ]
      };

    case "capsule":
      return {
        title: "Capsule Panoramic Elevator — Space Requirements (Option A & Option B)",
        subtitle: "Complete dimension matrix combining both Circular/Semi-Circular (Option A) and Polygon Cutting-Edge (Option B) architectural geometries.",
        legend: {
          A: "Car Inside – width (A)",
          B: "Car Inside – depth (B)",
          J: "Car Inside – arc curvature point (J)",
          G: "Car Inside – side chamfer offset (G)",
          C: "Left Well – hoistway width (C)",
          D: "Left Well – hoistway depth (D)",
          F: "Left Well – rear wall width (F)",
          H: "Left Well – front projection depth (H)",
          E: "Entrance clear width",
        },
        notes: [
          "All Dimensions are in mm.",
          "Option A: Curved Semi-Circle / Full Circular panoramic glass structure.",
          "Option B: Square / 3-Side & 5-Side Cutting Edge polygon glass structure.",
          "All hoist way walls should be minimum 230 mm brick or 150 mm R.C.C."
        ],
        columns: [
          { key: "option", label: "Geometry Option" },
          { key: "person", label: "Persons" },
          { key: "kgs", label: "Capacity (Kg)" },
          { key: "carA", label: "Car Inside A (mm)" },
          { key: "carB", label: "Car Inside B (mm)" },
          { key: "carJ", label: "Arc J (mm)" },
          { key: "carG", label: "Offset G (mm)" },
          { key: "wellC", label: "Left Well C (mm)" },
          { key: "wellD", label: "Left Well D (mm)" },
          { key: "wellF", label: "Rear Wall F (mm)" },
          { key: "wellH", label: "Front Bow H (mm)" },
          { key: "entrance", label: "Entrance E (mm)" },
        ],
        rows: [
          // Option A (Circular)
          { option: "Option A (Circular)", person: 10, kgs: 680, carA: 1100, carB: 1300, carJ: 1400, carG: 650, wellC: 2200, wellD: 1325, wellF: 1330, wellH: 800, entrance: 800 },
          { option: "Option A (Circular)", person: 13, kgs: 884, carA: 1200, carB: 1400, carJ: 1550, carG: 700, wellC: 2400, wellD: 1425, wellF: 1430, wellH: 900, entrance: 900 },
          { option: "Option A (Circular)", person: 16, kgs: 1088, carA: 1300, carB: 1500, carJ: 1700, carG: 750, wellC: 2800, wellD: 1530, wellF: 1530, wellH: 1000, entrance: 1000 },
          // Option B (Polygon)
          { option: "Option B (Polygon)", person: 10, kgs: 680, carA: 1250, carB: 1300, carJ: "—", carG: 250, wellC: 2200, wellD: 1450, wellF: 1480, wellH: 580, entrance: 800 },
          { option: "Option B (Polygon)", person: 13, kgs: 884, carA: 1400, carB: 1400, carJ: "—", carG: 300, wellC: 2400, wellD: 1550, wellF: 1630, wellH: 650, entrance: 900 },
          { option: "Option B (Polygon)", person: 16, kgs: 1088, carA: 1550, carB: 1500, carJ: "—", carG: 350, wellC: 2800, wellD: 1780, wellF: 1650, wellH: 790, entrance: 1000 },
        ]
      };

    case "hospital":
      return {
        title: "Hospital Bed & Stretcher Elevator — Space Requirements",
        subtitle: "Unified dimensions for Manual Stretcher, Automatic Centre Opening, and Automatic Telescopic entrances.",
        legend: {
          A: "Shaft / Lift-Well Width",
          B: "Shaft / Lift-Well Depth",
          C: "Car / Cabin Interior Width",
          D: "Car / Cabin Interior Depth",
          E: "Entrance Clear Opening Width",
        },
        notes: [
          "All Dimensions are in mm.",
          "Bed & Stretcher Clearance: 2400 mm interior cabin depth allows unhindered hospital bed, stretcher & medical trolley transport.",
          "All hoist way walls should be minimum 230 mm brick or 150 mm R.C.C."
        ],
        columns: [
          { key: "config", label: "Door Operation & Type" },
          { key: "person", label: "Persons" },
          { key: "capacityKg", label: "Capacity (Kg)" },
          { key: "carSize", label: "Car Inside C × D (mm)" },
          { key: "shaftSize", label: "Shaft Inside A × B (mm)" },
          { key: "entrance", label: "Entrance E (mm)" },
          { key: "speed", label: "Speed (mps)" },
          { key: "pit", label: "Pit Depth (mm)" },
          { key: "overhead", label: "Overhead (mm)" },
        ],
        rows: [
          { config: "Manual Stretcher (Collapsible)", person: "8 To 16", capacityKg: "544 To 1088", carSize: "1200 × 2300", shaftSize: "1900 × 2400", entrance: "1600 (Collapsible)", speed: "0.3 To 0.5", pit: 1600, overhead: 5100 },
          { config: "Auto Centre Opening Door", person: 15, capacityKg: 1020, carSize: "1000 × 1700", shaftSize: "1900 × 2300", entrance: 800, speed: "0.63 / 1.0", pit: 1600, overhead: 5100 },
          { config: "Auto Centre Opening Door", person: 20, capacityKg: 1360, carSize: "1300 × 2000", shaftSize: "2300 × 3000", entrance: 900, speed: "0.63 / 1.0", pit: 1600, overhead: 5100 },
          { config: "Auto Centre Opening Door", person: 26, capacityKg: 1768, carSize: "1600 × 2400", shaftSize: "2600 × 3000", entrance: 1000, speed: "0.63 / 1.0", pit: 1600, overhead: 5100 },
          { config: "Auto Telescopic Door", person: 15, capacityKg: 1020, carSize: "1000 × 2400", shaftSize: "1700 × 3000", entrance: 800, speed: "0.63 / 1.0", pit: 1600, overhead: 5100 },
          { config: "Auto Telescopic Door", person: 20, capacityKg: 1360, carSize: "1300 × 2400", shaftSize: "1950 × 3000", entrance: 900, speed: "0.63 / 1.0", pit: 1600, overhead: 5100 },
          { config: "Auto Telescopic Door", person: 26, capacityKg: 1768, carSize: "1600 × 2400", shaftSize: "2100 × 3000", entrance: 1000, speed: "0.63 / 1.0", pit: 1600, overhead: 5100 },
        ]
      };

    case "goods":
      return {
        title: "Goods Freight Elevator — Space Requirements",
        subtitle: "Heavy-duty industrial cargo elevator dimensions for warehouse and factory material handling.",
        legend: {
          A: "Car-Inside Width (A)",
          B: "Car-Inside Depth (B)",
          C: "Lift-Well Width (C)",
          D: "Lift-Well Depth (D)",
          K: "Machine Room Width (K)",
          L: "Machine Room Length (L)",
        },
        notes: [
          "All Dimensions are in mm.",
          "Heavy-duty industrial construction engineered for pallet trucks and forklift loading.",
          "Available rated speed: 0.25 To 1.0 mps. Max travel height: 66 meters.",
          "All hoist way walls should be minimum 230 mm brick or 150 mm R.C.C."
        ],
        columns: [
          { key: "loadKg", label: "Rated Load (Kg)" },
          { key: "carSize", label: "Car Inside A × B (mm)" },
          { key: "shaftSize", label: "Lift-Well C × D (mm)" },
          { key: "entrance", label: "Entrance Width (mm)" },
          { key: "machineRoom", label: "Machine Room K × L (mm)" },
          { key: "speed", label: "Speed (mps)" },
          { key: "pit", label: "Pit Depth (mm)" },
          { key: "overhead", label: "Overhead (mm)" }
        ],
        rows: [
          { loadKg: 500, carSize: "1500 × 1200", shaftSize: "1900 × 1600", entrance: 2100, machineRoom: "2600 × 1600", speed: "0.25 To 1.0", pit: 1600, overhead: 5100 },
          { loadKg: 1000, carSize: "1500 × 1800", shaftSize: "2000 × 1800", entrance: 2100, machineRoom: "2600 × 1600", speed: "0.25 To 1.0", pit: 1600, overhead: 5100 },
          { loadKg: 1500, carSize: "1700 × 2000", shaftSize: "2600 × 2300", entrance: 2100, machineRoom: "2600 × 1600", speed: "0.25 To 1.0", pit: 1600, overhead: 5100 },
          { loadKg: 2000, carSize: "1700 × 2500", shaftSize: "2600 × 2300", entrance: 2100, machineRoom: "2600 × 1600", speed: "0.25 To 1.0", pit: 1600, overhead: 5100 },
          { loadKg: 2500, carSize: "2000 × 2500", shaftSize: "2900 × 2700", entrance: 2100, machineRoom: "2600 × 1600", speed: "0.25 To 1.0", pit: 1600, overhead: 5400 },
          { loadKg: 3000, carSize: "2000 × 3000", shaftSize: "2900 × 3400", entrance: 2700, machineRoom: "2900 × 1600", speed: "0.25 To 1.0", pit: 1600, overhead: 5400 },
        ]
      };

    case "car":
      return {
        title: "Car Elevator & Multi-Level Automotive Parking Systems",
        subtitle: "Structural engineering parameters for automobile lifts, parking stackers, and heavy vehicle platforms.",
        legend: {
          A: "Finish Hoist Way Width",
          B: "Finish Hoist Way Depth",
          C: "Car Inside Width",
          D: "Car Inside Depth",
          E: "Landing Entrance Width & Height"
        },
        notes: [
          "All Dimensions are in mm.",
          "3 Nos - Load Hook (3 Ton Capacity) Client Scope Refer Details in Inspection Window at Terrace Level.",
          "Holding Beam Capacity: 3500 Kg."
        ],
        columns: [
          { key: "parameter", label: "Engineering Parameter" },
          { key: "value", label: "Specification / Dimension" },
          { key: "notes", label: "Technical Notes" },
        ],
        rows: [
          { parameter: "Finish Hoist Way (A × B)", value: "4000 mm × 6000 mm", notes: "Full structural shaft clear dimensions for passenger cars and SUVs" },
          { parameter: "Car Inside Platform (C × D)", value: "2500 mm × 5190 mm", notes: "Generous car interior between bumper rub rails" },
          { parameter: "Landing Entrance (E)", value: "2500 mm (W) × 2200 mm (H)", notes: "Two-side drive-thru front/rear door opening" },
          { parameter: "Rated Capacity / Load", value: "2500 to 5000 Kg", notes: "Custom solutions available for heavier commercial fleets" },
          { parameter: "Rated Speed", value: "0.30 to 0.50 mps", notes: "Smooth V3F drive vector acceleration" },
          { parameter: "Max. Travel Height", value: "Up to 100 Meters", notes: "Multi-level puzzle parking & commercial parking towers" },
          { parameter: "Hoisting Beam Capacity", value: "3500 Kg", notes: "Mounted in overhead machine room" },
          { parameter: "Safety Equipment", value: "Bi-directional Safety Gear", notes: "Heavy-duty buffer springs with oil dampening" },
        ]
      };

    case "mrl":
      return {
        title: "MRL (Machine Room-Less) Elevator — Space Requirements",
        subtitle: "Full engineering dimensions for gearless permanent magnet traction MRL elevators without penthouse overhead room.",
        legend: {
          A: "Car Inside – width (A)",
          B: "Car Inside – depth (B)",
          C: "Hoistway Inside Finished – width (C)",
          D: "Hoistway Inside Finished – depth (D)",
          E: "Entrance clear width (E)",
        },
        notes: [
          "All Dimensions are in mm.",
          "Gearless Permanent Magnet Synchronous Motor (PMSM) mounted directly on shaft guide rails.",
          "Saves architectural rooftop penthouse overhead machine room construction costs.",
          "All hoist way walls should be minimum 230 mm brick or 150 mm R.C.C."
        ],
        columns: [
          { key: "persons", label: "Persons" },
          { key: "loadKg", label: "Load (Kg)" },
          { key: "carSize", label: "Car Platform A × B (mm)" },
          { key: "shaftSize", label: "Hoistway C × D (mm)" },
          { key: "entrance", label: "Entrance E (mm)" },
          { key: "speed", label: "Speed (mps)" },
          { key: "pit", label: "Pit Depth (mm)" },
          { key: "overhead", label: "Overhead (mm)" }
        ],
        rows: [
          { persons: 6, loadKg: 408, carSize: "1100 × 1000", shaftSize: "1600 × 1600", entrance: 700, speed: "1.0 to 1.5", pit: 1600, overhead: 4600 },
          { persons: 8, loadKg: 544, carSize: "1300 × 1100", shaftSize: "1800 × 1700", entrance: 800, speed: "1.0 to 1.5", pit: 1600, overhead: 4600 },
          { persons: 10, loadKg: 680, carSize: "1350 × 1300", shaftSize: "1900 × 1900", entrance: 800, speed: "1.0 to 1.5", pit: 1600, overhead: 4600 },
          { persons: 13, loadKg: 884, carSize: "1500 × 1400", shaftSize: "2100 × 2000", entrance: 900, speed: "1.0 to 1.5", pit: 1600, overhead: 4800 },
          { persons: 16, loadKg: 1088, carSize: "1600 × 1500", shaftSize: "2200 × 2100", entrance: 1000, speed: "1.0 to 1.5", pit: 1600, overhead: 4800 },
        ]
      };

    case "home":
      return {
        title: "Home / Residential Villa Elevator — Space Requirements",
        subtitle: "Complete dimension matrix combining both Manual Swing Door and Automatic Sliding Door villa configurations.",
        legend: {
          A: "Car Inside – width (A)",
          B: "Car Inside – depth (B)",
          C: "Lift-Well Inside Finished – width (C)",
          D: "Lift-Well Inside Finished – depth (D)",
          E: "Entrance clear opening width (E)",
        },
        notes: [
          "All Dimensions are in mm.",
          "Single-Phase 230V domestic power or 3-Phase 415V power compatible.",
          "Ultra-low pit depth (200 mm to 450 mm) or ramp entrance available.",
          "Operates in RCC shaft, brick shaft, or freestanding glass-steel structure."
        ],
        columns: [
          { key: "doorConfig", label: "Door Operation" },
          { key: "person", label: "Persons" },
          { key: "capacityKg", label: "Capacity (Kg)" },
          { key: "carSize", label: "Car Inside A × B (mm)" },
          { key: "shaftSize", label: "Lift-Well C × D (mm)" },
          { key: "entrance", label: "Entrance E (mm)" },
          { key: "speed", label: "Speed (mps)" },
          { key: "pit", label: "Pit Depth (mm)" },
          { key: "overhead", label: "Overhead (mm)" }
        ],
        rows: [
          // Manual Door configurations
          { doorConfig: "Manual Swing Door", person: "2 to 3", capacityKg: "200 to 250", carSize: "800 × 850", shaftSize: "1150 × 1100", entrance: 700, speed: "0.2 to 0.4", pit: "200 to 400", overhead: 2800 },
          { doorConfig: "Manual Swing Door", person: 4, capacityKg: 300, carSize: "900 × 1000", shaftSize: "1250 × 1250", entrance: 750, speed: "0.2 to 0.4", pit: "250 to 450", overhead: 2900 },
          { doorConfig: "Manual Swing Door", person: 6, capacityKg: 408, carSize: "1000 × 1200", shaftSize: "1350 × 1450", entrance: 800, speed: "0.2 to 0.4", pit: "300 to 450", overhead: 3000 },
          // Auto Door configurations
          { doorConfig: "Automatic Sliding Door", person: "2 to 3", capacityKg: "200 to 250", carSize: "850 × 900", shaftSize: "1300 × 1200", entrance: 700, speed: "0.25 to 0.5", pit: "350 to 500", overhead: 3100 },
          { doorConfig: "Automatic Sliding Door", person: 4, capacityKg: 300, carSize: "950 × 1100", shaftSize: "1400 × 1400", entrance: 750, speed: "0.25 to 0.5", pit: "350 to 500", overhead: 3100 },
          { doorConfig: "Automatic Sliding Door", person: 6, capacityKg: 408, carSize: "1100 × 1250", shaftSize: "1550 × 1550", entrance: 800, speed: "0.25 to 0.5", pit: "400 to 500", overhead: 3200 },
        ]
      };

    case "hydraulic":
      return {
        title: "Hydraulic Elevator — Space Requirements & Engineering Parameters",
        subtitle: "Full engineering dimensions covering both 1:1 / 1:2 Direct Suspension and Single-Side Direct Hydraulic configurations.",
        legend: {
          A: "Car Inside – width (A)",
          B: "Car Inside – depth (B)",
          C: "Lift-Well Inside Finished – width (C)",
          D: "Lift-Well Inside Finished – depth (D)",
          E: "Entrance clear width (E)",
        },
        notes: [
          "All Dimensions are in mm.",
          "No rooftop penthouse required; power unit and hydraulic pump can be placed at ground level or basement up to 10m away.",
          "Equipped with pipe rupture safety burst valves and emergency battery manual descent.",
          "All hoist way walls should be minimum 230 mm brick or 150 mm R.C.C."
        ],
        columns: [
          { key: "suspension", label: "Suspension Type" },
          { key: "persons", label: "Persons" },
          { key: "capacityKg", label: "Capacity (Kg)" },
          { key: "carSize", label: "Car Inside A × B (mm)" },
          { key: "shaftSize", label: "Lift-Well C × D (mm)" },
          { key: "entrance", label: "Entrance E (mm)" },
          { key: "speed", label: "Speed (mps)" },
          { key: "pit", label: "Pit Depth (mm)" },
          { key: "overhead", label: "Overhead (mm)" }
        ],
        rows: [
          { suspension: "Single-Side Direct (1:1)", persons: 4, capacityKg: 300, carSize: "900 × 1000", shaftSize: "1350 × 1250", entrance: 750, speed: "0.35 to 0.6", pit: 1200, overhead: 3400 },
          { suspension: "Single-Side Direct (1:1)", persons: 6, capacityKg: 408, carSize: "1100 × 1100", shaftSize: "1550 × 1350", entrance: 800, speed: "0.35 to 0.6", pit: 1200, overhead: 3400 },
          { suspension: "Indirect Roped (1:2)", persons: 8, capacityKg: 544, carSize: "1300 × 1200", shaftSize: "1750 × 1450", entrance: 800, speed: "0.35 to 0.6", pit: 1300, overhead: 3500 },
          { suspension: "Indirect Roped (1:2)", persons: 10, capacityKg: 680, carSize: "1400 × 1350", shaftSize: "1850 × 1600", entrance: 800, speed: "0.35 to 0.6", pit: 1300, overhead: 3500 },
          { suspension: "Heavy Cargo Hydraulic", persons: "Freight", capacityKg: 2000, carSize: "1800 × 2400", shaftSize: "2500 × 2700", entrance: 1800, speed: "0.25 to 0.4", pit: 1500, overhead: 3800 },
        ]
      };

    default:
      return null;
  }
}
