import { assetUrl } from "../utils/assetPath";

/**
 * interiorsSeriesData.js
 *
 * Strict per-series cabin interior architecture and operating fixture data,
 * directly extracted from Krupa Elevators brochure pages 05, 06, 07, and 17
 * (Page 9 of FINAL ALL PAGES_260616_114835.pdf).
 *
 * Each series contains its own isolated specifications, descriptions, and imagery
 * without any cross-series contamination.
 */

// ---------------------------------------------------------------------------
// 1. BASIC SERIES (Brochure Page 05)
// ---------------------------------------------------------------------------
export const basicSeries = {
  id: "basic",
  seriesName: "Basic Series",
  badge: "Functional Simplicity",
  headline: "Clean Stainless Steel Architecture for Everyday Reliability",
  description:
    "Created for low-to-mid rise residential and commercial buildings demanding timeless durability, easy maintenance, and clean modern aesthetics.",
  models: [
    {
      id: "kec-01",
      model: "KEC-01",
      name: "Basic Series — KEC-01",
      tagline: "Minimalist Hairline Stainless Steel with Full Rear Mirror",
      image: assetUrl("/assets/interiors/kec-01.jpg"),
      clientOverview:
        "The KEC-01 cabin combines high-grade AISI 304 hairline stainless steel with an expansive full-width rear mirror that visually doubles the perceived interior space. Soft, glare-free ceiling LED lighting ensures pleasant everyday ride comfort.",
      keyHighlights: [
        "Sleek hairline stainless steel side and front walls",
        "Full-height rear silver mirror amplifies interior lighting and space",
        "Luminous digital COP with clear floor indicator",
        "Durable, easy-to-clean commercial PVC flooring"
      ],
      specifications: [
        { parameter: "Ceiling", value: "Stainless Steel Ceiling with Integrated Warm LED Lighting" },
        { parameter: "Car Operating Panel (COP)", value: "S.S. Wall Mounted Panel with Luminous Button (Square) & Digital Positioning Indicator" },
        { parameter: "Car Wall", value: "S.S. Hairline Finish with Back-Side Full Width Float Glass Mirror" },
        { parameter: "Flooring", value: "Durable Industrial PVC Flooring (Slip-Resistant)" },
        { parameter: "Car Door", value: "Stainless Steel Hairline Finish" },
        { parameter: "Handrail", value: "Stainless Steel Straight Cylindrical Grab Bar (38 mm dia)" },
        { parameter: "Illumination", value: "Recessed Low-Power LED Array (Warm White 3000K)" }
      ]
    }
  ]
};

// ---------------------------------------------------------------------------
// 2. STANDARD SERIES (Brochure Page 05)
// ---------------------------------------------------------------------------
export const standardSeries = {
  id: "standard",
  seriesName: "Standard Series",
  badge: "High-Traffic Comfort",
  headline: "Enhanced Airflow & Ergonomic Half-Mirror Design",
  description:
    "Engineered for busy residential communities, hospitals, and multi-tenant offices requiring active cross-ventilation, scratch-resistant wall surfaces, and integrated handrail clearances.",
  models: [
    {
      id: "kec-02",
      model: "KEC-02",
      name: "Standard Series — KEC-02",
      tagline: "Built-In High-Flow Blower Fan with Ergonomic Half-Mirror",
      image: assetUrl("/assets/interiors/kec-02.jpg"),
      clientOverview:
        "The KEC-02 cabin introduces an active, low-noise centrifugal blower fan built directly into the stainless steel ceiling canopy, ensuring continuous fresh air circulation. The half-height safety mirror allows center grab-bar clearance on all three sides.",
      keyHighlights: [
        "High-flow ceiling blower fan provides superior ventilation during peak hours",
        "Ergonomic half-height mirror with generous grab-bar hand clearance",
        "Scratch-resistant hairline stainless steel construction",
        "Commercial heavy-duty PVC flooring"
      ],
      specifications: [
        { parameter: "Ceiling", value: "S.S. Ceiling, Integrated LED Light with Built-in Centrifugal Blower Fan" },
        { parameter: "Car Operating Panel (COP)", value: "S.S. Wall Mounted Panel with Luminous Square Buttons & Digital Positioning Indicator" },
        { parameter: "Car Wall", value: "Stainless Steel Finish with Back-Side Half-Height Safety Mirror" },
        { parameter: "Flooring", value: "Heavy-Duty Wear-Resistant PVC Flooring" },
        { parameter: "Car Door", value: "Stainless Steel Finish (Hairline AISI 304)" },
        { parameter: "Handrail", value: "Stainless Steel Ergonomic Center Handrail" },
        { parameter: "Ventilation", value: "Integrated High-Flow Cross-Flow Ceiling Blower (250 m³/h)" }
      ]
    }
  ]
};

// ---------------------------------------------------------------------------
// 3. SEMI DESIGNER SERIES (Brochure Page 05)
// ---------------------------------------------------------------------------
export const semiDesignerSeries = {
  id: "semi-designer",
  seriesName: "Semi Designer Series",
  badge: "Prestige & Warmth",
  headline: "Titanium Gold Insets with Natural Veined Marble Floors",
  description:
    "Tailored for boutique hotels, upscale residential towers, and corporate headquarters seeking an atmosphere of warm hospitality and distinctive architectural prestige.",
  models: [
    {
      id: "kec-03",
      model: "KEC-03",
      name: "Semi Designer Series — KEC-03",
      tagline: "Titanium Gold Stainless Steel & Marble Texture Flooring",
      image: assetUrl("/assets/interiors/kec-03.jpg"),
      clientOverview:
        "The KEC-03 model merges titanium gold PVD-coated stainless steel with lustrous gold mirror panels. The reflective ceiling canopy casts a soft, inviting ambient glow across rich marble-texture flooring, setting a tone of executive elegance.",
      keyHighlights: [
        "Lustrous titanium gold mirror stainless steel accents",
        "Warm ambient gold ceiling illumination",
        "Classic marble-effect flooring with gold veining",
        "Polished titanium gold tubular handrails"
      ],
      specifications: [
        { parameter: "Ceiling", value: "Gold Finish Ceiling with Warm White LED Indirect Light" },
        { parameter: "Car Operating Panel (COP)", value: "S.S. Wall Mounted Panel with Luminous Button & Digital Indicator" },
        { parameter: "Car Wall", value: "Titanium Gold Stainless Steel & Titanium Gold Mirror Stainless Steel Panels" },
        { parameter: "Flooring", value: "PVC Marble Finish Flooring with Gold Veining" },
        { parameter: "Car Door", value: "Stainless Steel Titanium Gold Finish" },
        { parameter: "Handrail", value: "Polished Titanium Gold Tubular Handrail" },
        { parameter: "Illumination", value: "Cove-Lit Gold Ceiling Diffuser with Recessed Downlights" }
      ]
    }
  ]
};

// ---------------------------------------------------------------------------
// 4. PREMIUM SERIES (Brochure Pages 06 & 07)
// ---------------------------------------------------------------------------
export const premiumSeries = {
  id: "premium",
  seriesName: "Premium Series",
  badge: "Architectural Masterpiece",
  headline: "Bespoke PVD Titanium Finishes, Laser Etchings & Micalex Ceilings",
  description:
    "The pinnacle of Krupa elevator craftsmanship. Featuring 8 distinct cabin themes ranging from Rose Gold micalex diffusers and antique bronze art walls to titanium gold geometric lattices and custom acrylic top canopies.",
  models: [
    {
      id: "kec-04",
      model: "KEC-04",
      name: "KEC-04 — Rose Gold Micalex",
      tagline: "Rose Gold Hairline with Luminescent Micalex Ceiling",
      image: assetUrl("/assets/interiors/kec-04.jpg"),
      clientOverview:
        "KEC-04 presents an opulent rose-gold palette paired with a high-transmittance micalex ceiling diffuser that mimics soft natural skylight. Ideal for luxury duplexes, penthouses, and private clubhouses.",
      keyHighlights: [
        "PVD Rose Gold hairline and titanium mirror panels",
        "Luminescent micalex ceiling with shadowless illumination",
        "Compatible with AG Series architectural laser etching patterns",
        "Optional real Italian marble floor inlay"
      ],
      specifications: [
        { parameter: "Ceiling", value: "Mirror Stainless Steel with Luminescent Micalex LED System" },
        { parameter: "Car Operating Panel (COP)", value: "S.S. Wall Mounted Panel with Luminous Square Buttons & Digital Positioning Indicator" },
        { parameter: "Car Wall", value: "Rose Gold Hairline Stainless Steel & Titanium Mirror Stainless Steel" },
        { parameter: "Flooring", value: "Standard Heavy-Duty PVC (Optional Natural Italian Marble)" },
        { parameter: "Car Door", value: "Stainless Steel Hairline Finish (Rose Gold Coating Available)" },
        { parameter: "Handrail", value: "Rose Gold Anodized Aluminum / SS Grab Handle" }
      ]
    },
    {
      id: "kec-05",
      model: "KEC-05",
      name: "KEC-05 — Antique Bronze Belt",
      tagline: "Imitation Bronze Stainless Steel with 4-Side LED Lamp Belt",
      image: assetUrl("/assets/interiors/kec-05.jpg"),
      clientOverview:
        "A warm, earthy interior featuring deep imitation bronze stainless steel side panels and a central decorative art panel framed by a continuous 4-sided LED lamp belt.",
      keyHighlights: [
        "Deep imitation bronze metal finish with matte texture",
        "360-degree perimeter LED lamp belt for subtle architectural lighting",
        "Custom rear wall decorative relief insets",
        "Antique bronze patina handrails"
      ],
      specifications: [
        { parameter: "Ceiling", value: "Four-Side LED Light, Imitation Bronze Stainless Steel LED Lamp Belt" },
        { parameter: "Car Operating Panel (COP)", value: "S.S. Wall Mounted Panel with Luminous Button & Digital Floor Indicator" },
        { parameter: "Car Wall", value: "Imitation Bronze Stainless Steel on Both Sides with Decorative Back Wall Art" },
        { parameter: "Flooring", value: "Standard PVC (Optional Natural Granite / Marble)" },
        { parameter: "Car Door", value: "Stainless Steel Bronze Finish" },
        { parameter: "Handrail", value: "Antique Bronze Patina Finish Handrail" }
      ]
    },
    {
      id: "kec-06",
      model: "KEC-06",
      name: "KEC-06 — Designer Mirror Linear",
      tagline: "Designer Stainless Steel with Dual-Side Strip Lighting",
      image: assetUrl("/assets/interiors/kec-06.jpg"),
      clientOverview:
        "Modernist stainless steel cabin featuring dual continuous architectural linear light bars and a laser-etched designer rear wall mirror with integrated handrail.",
      keyHighlights: [
        "Dual continuous vertical light bars for a bright, modern ambiance",
        "Designer laser-etched rear mirror wall",
        "Dual-tier stainless steel railing",
        "Matches contemporary glass and steel architectural facades"
      ],
      specifications: [
        { parameter: "Ceiling", value: "Designer Stainless Steel & Two-Side Linear LED Light" },
        { parameter: "Car Operating Panel (COP)", value: "S.S. Wall Mounted Panel with Luminous Button & Digital Positioning Indicator" },
        { parameter: "Car Wall", value: "Stainless Steel Designer Back Wall Mirror" },
        { parameter: "Flooring", value: "Standard PVC (Optional Marble Inlay)" },
        { parameter: "Car Door", value: "Stainless Steel Designer Pattern" },
        { parameter: "Handrail", value: "Dual-Tier Hairline Stainless Steel Railing" }
      ]
    },
    {
      id: "kec-07",
      model: "KEC-07",
      name: "KEC-07 — Powder Coated Minimalist",
      tagline: "Architectural M.S. Powder Coated Cabin with Recessed Downlights",
      image: assetUrl("/assets/interiors/kec-07.jpg"),
      clientOverview:
        "A highly robust, clean aesthetic utilizing precision powder-coated mild steel panels in curated architectural shades, combined with recessed LED downlights and heavy-duty grab handles.",
      keyHighlights: [
        "High-durability powder coating resists scuffs and fingerprints",
        "Clean ceiling canopy with recessed round LED downlights",
        "Full-width stainless steel ergonomic handle",
        "Ideal for corporate offices, medical centres, and modern apartments"
      ],
      specifications: [
        { parameter: "Ceiling", value: "M.S. Powder Coated with Recessed LED Lights" },
        { parameter: "Car Operating Panel (COP)", value: "Integrated S.S. Panel with Digital Floor Display" },
        { parameter: "Car Wall", value: "M.S. Powder Coated in Custom Architectural Tones" },
        { parameter: "Flooring", value: "Heavy-Duty Slip-Resistant Flooring" },
        { parameter: "Car Door", value: "M.S. Powder Coated Finish" },
        { parameter: "Handrail", value: "Stainless Steel Ergonomic Grab Bar" }
      ]
    },
    {
      id: "kec-08",
      model: "KEC-08",
      name: "KEC-08 — Strip Designer Array",
      tagline: "Four-Side Round LED Canopy with Strip Designer Panels",
      image: assetUrl("/assets/interiors/kec-08.jpg"),
      clientOverview:
        "An intricate ceiling design with 16 circular LED light ports surrounding a mirror centerpiece, complemented by vertical strip stainless steel wall panels and rear mirror glass.",
      keyHighlights: [
        "Signature 4-side circular LED ceiling array",
        "Vertical strip designer wall panels create visual height",
        "Center column mirror with frosted laser motifs",
        "Compatible with AG 117, AG 102, AG 112, AG 108 etchings"
      ],
      specifications: [
        { parameter: "Ceiling", value: "Stainless Steel Designer with Four-Side Round LED Light Array" },
        { parameter: "Car Operating Panel (COP)", value: "S.S. Wall Mounted Panel with Luminous Button (Square) & Digital Indicator" },
        { parameter: "Car Wall", value: "Stainless Steel Strip Designer with Back-Side Mirror" },
        { parameter: "Flooring", value: "Standard PVC (Optional Natural Marble)" },
        { parameter: "Car Door", value: "Stainless Steel Designer Pattern" },
        { parameter: "Handrail", value: "Stainless Steel Curved Contour Railing" }
      ]
    },
    {
      id: "kec-09",
      model: "KEC-09",
      name: "KEC-09 — Gold Decoration Suite",
      tagline: "Full Gold Decoration Stainless Steel with 6-Side LED Lighting",
      image: assetUrl("/assets/interiors/kec-09.jpg"),
      clientOverview:
        "Lavish gold decoration stainless steel throughout the car walls and doors, highlighted by a faceted 6-side hexagonal ceiling chandelier array.",
      keyHighlights: [
        "Lustrous full-gold decoration stainless steel panels",
        "6-side multi-angle LED ceiling lighting for radiant illumination",
        "Signature centerpiece for 5-star hotels and luxury residences",
        "Polished gold mirror finish doors and architraves"
      ],
      specifications: [
        { parameter: "Ceiling", value: "Gold Decoration Stainless Steel with Six-Side LED Lighting" },
        { parameter: "Car Operating Panel (COP)", value: "S.S. Wall Mounted Panel with Luminous Button & Digital Floor Indicator" },
        { parameter: "Car Wall", value: "Gold Decoration Stainless Steel Panels" },
        { parameter: "Flooring", value: "Standard PVC (Optional Italian Marble)" },
        { parameter: "Car Door", value: "Gold Decoration Stainless Steel" },
        { parameter: "Handrail", value: "Solid Brass & Gold Mirror Composite Handrail" }
      ]
    },
    {
      id: "kec-10",
      model: "KEC-10",
      name: "KEC-10 — Titanium Gold Mirror Lattice",
      tagline: "Titanium Gold Mirror Designer with Acrylic Backlit Skylight",
      image: assetUrl("/assets/interiors/kec-10.jpg"),
      clientOverview:
        "The flagship aesthetic in the Krupa portfolio. Features an illuminated acrylic sky ceiling with laser-cut gold lattice, titanium gold mirror walls, and ornate geometric marble flooring.",
      keyHighlights: [
        "Full acrylic backlit skylight creates soft, natural daytime lighting",
        "Titanium gold mirror designer panels with back wall mirror",
        "Hand-polished beveled mirror borders",
        "Intricate geometric marble floor medallion"
      ],
      specifications: [
        { parameter: "Ceiling", value: "Titanium Gold Mirror Designer S.S. & Acrylic LED Light Canopy" },
        { parameter: "Car Operating Panel (COP)", value: "S.S. Wall Mounted Panel with Luminous Button (Square) & Digital Floor Indicator" },
        { parameter: "Car Wall", value: "Titanium Gold Mirror Designer Stainless Steel with Back Wall Mirror" },
        { parameter: "Flooring", value: "Standard PVC (Optional Polished Geometric Marble)" },
        { parameter: "Car Door", value: "Titanium Gold Designer Finish" },
        { parameter: "Handrail", value: "Heavy-Gauge Ergonomic Gold Oval Profile Handrail" }
      ]
    },
    {
      id: "kec-11",
      model: "KEC-11",
      name: "KEC-11 — Dual-Tone Acrylic Top",
      tagline: "M.S. Powder Coated & Hairline S.S. with Acrylic Top Canopy",
      image: assetUrl("/assets/interiors/kec-11.jpg"),
      clientOverview:
        "A sophisticated hybrid design combining soft neutral powder-coated steel with crisp hairline stainless steel insets, illuminated by a frosted acrylic top canopy and half-height safety mirror.",
      keyHighlights: [
        "Harmonious dual-tone blend of warm powder coating and cool stainless steel",
        "Frosted acrylic top canopy provides gentle, diffused overhead lighting",
        "Half-mirror glass with stainless steel boundary grab rail",
        "Practical and luxurious for executive residential developments"
      ],
      specifications: [
        { parameter: "Ceiling", value: "M.S. Powder Coated, Translucent Acrylic on Top with LED Light" },
        { parameter: "Car Operating Panel (COP)", value: "Integrated S.S. Control Panel with Digital Positioning" },
        { parameter: "Car Wall", value: "M.S. Powder Coated, S.S. Hairline Insets, Half Mirror Glass" },
        { parameter: "Flooring", value: "Heavy-Duty Floor Composite" },
        { parameter: "Car Door", value: "M.S. Powder Coated with S.S. Accents" },
        { parameter: "Handrail", value: "S.S. Ergonomic Grab Handle" }
      ]
    }
  ]
};

// ---------------------------------------------------------------------------
// 5. ARCHITECTURAL SURFACE DETAILING — AG SERIES (Brochure Pages 06 & 07)
// ---------------------------------------------------------------------------
export const architecturalSurfaceDetailing = {
  id: "ag-series",
  name: "Architectural Surface Detailing — AG Series",
  badge: "PVD Coating & Laser Etching",
  headline: "Exquisite Decorative Surface Patterns for Cabin Walls & Entrance Doors",
  description:
    "Elevate plain stainless steel into stunning architectural focal points. Our AG Series utilizes high-vacuum Physical Vapor Deposition (PVD) coloring paired with computer-controlled laser chemical etching to create resilient, non-fading geometric and floral motifs.",
  patterns: [
    { code: "AG 139", name: "Geometric Arabesque", finish: "Titanium Gold Etched", featuredOn: "KEC-04 Rose Gold Suite" },
    { code: "AG 155", name: "Modern Chevron Grid", finish: "Gold Mirror Etched", featuredOn: "KEC-04 Premium" },
    { code: "AG 179", name: "Floral Damask", finish: "Rose Gold Mirror Etched", featuredOn: "KEC-04 Luxury" },
    { code: "AG 117", name: "Linear Wave Deco", finish: "Stainless Steel Frosted", featuredOn: "KEC-08 Strip Designer" },
    { code: "AG 102", name: "Organic Mandala", finish: "Titanium Black Etched", featuredOn: "KEC-08 Executive" },
    { code: "AG 112", name: "Diamond Tessellation", finish: "Mirror Stainless Steel", featuredOn: "KEC-08 Modern" },
    { code: "AG 108", name: "Concentric Circles", finish: "Hairline Multi-Tone", featuredOn: "KEC-08 Geometric" }
  ],
  technicalFeatures: [
    { title: "PVD Color Fusion", desc: "Titanium Gold, Rose Gold, Champagne, and Titanium Black vaporized at molecular level — scratch resistant and 100% rustproof." },
    { title: "Chemical & Laser Etching", desc: "Micro-depth 0.05 mm surface texture creating beautiful light play and 3D depth without weakening the sheet metal." },
    { title: "Anti-Fingerprint Nano-Shield", desc: "Optically clear oleophobic coating prevents oil and fingerprint smudges, keeping cabin walls spotless." }
  ]
};

// ---------------------------------------------------------------------------
// 6. COP & LOP (Car Operating Panel & Landing Operating Panel)
// Grounded directly in Page 9 of FINAL ALL PAGES_260616_114835.pdf (Brochure Page 17)
// ---------------------------------------------------------------------------
export const copLopFixtures = {
  id: "cop-lop",
  name: "COP & LOP Operating Panels",
  badge: "Interactive Fixtures",
  headline: "Wide Variety of Operating Panels for Elevators with Architectural Flexibility",
  description:
    "KRUPA ELEVATORS features a wide variety of car operating panels (COP) mounted inside the cabin and landing operating panels (LOP) installed at each floor entrance. Engineered for tactile feedback, accessibility compliance, and visual clarity.",
  
  // Clear conceptual distinction
  systemsDistinction: {
    cop: {
      term: "COP (Car Operating Panel)",
      location: "Mounted Inside the Elevator Cabin",
      role: "Allows passengers to select destination floors, trigger door open/close, activate fan and lighting, and initiate emergency two-way intercom communication."
    },
    lop: {
      term: "LOP (Landing Operating Panel / Call Box)",
      location: "Mounted at Each Floor Landing / Hallway",
      role: "Allows waiting passengers to summon the elevator car (Up / Down) and view current elevator floor positioning, direction of travel, and arrival status."
    }
  },

  // 6 Verified Models from Brochure Page 17 (Page 9 of PDF)
  models: [
    {
      code: "KE-COP-LOP : 001",
      title: "Black Glass Column COP + Compact Hall LOP",
      copDescription: "Full-height black glass aesthetic with high-contrast red digital floor matrix and circular illuminated push buttons.",
      lopDescription: "Slim matching black glass rectangular wall call station with directional indicator arrow.",
      finish: "Hairline Stainless Steel with Gloss Black Tempered Glass Faceplate",
      display: "High-Visibility Dot Matrix LED Floor & Arrow Display",
      buttons: "Micro-stroke Round Stainless Steel with Soft White Backlight"
    },
    {
      code: "KE-COP-LOP : 002",
      title: "Rounded Crown Mirror Panel + Oval Capsule LOP",
      copDescription: "Curved top arch with red 7-segment digital display, integrated emergency telephone speaker, and dual column push buttons.",
      lopDescription: "Ergonomic capsule-profile stainless steel landing station with integrated red floor indicator.",
      finish: "Mirror Stainless Steel with Anti-Fingerprint Coating",
      display: "Classic Red Segmented LED Positioning Indicator",
      buttons: "Tactile Round Luminous Buttons with Braille Codes"
    },
    {
      code: "KE-COP-LOP : 003",
      title: "Sleek Hairline Column COP + Slimline Hall LOP",
      copDescription: "Ultra-clean hairline stainless steel column with yellow/amber digital indicator, speaker grill, and numbered call buttons.",
      lopDescription: "Narrow vertical profile landing call box suited for narrow architraves and brick mullions.",
      finish: "AISI 304 Hairline Brushed Stainless Steel",
      display: "Amber High-Contrast LED Screen",
      buttons: "Square Luminous Tactile Buttons with Center Glow"
    },
    {
      code: "KE-COP-LOP : 004",
      title: "High-Rise Multimedia Column COP + Touchless LOP",
      copDescription: "Full-height executive column featuring a rich color TFT multimedia LCD display showing live floor, time, weather, and notices.",
      lopDescription: "Compact black landing station with red LED arrow and illuminated call button.",
      finish: "Black Tempered Glass Panel with Brushed Satin Edges",
      display: "Full-Color TFT Multimedia LCD Display with Graphical Floor Themes",
      buttons: "Dual-Illuminated Array with Optional Touchless Wave Sensing"
    },
    {
      code: "KE-COP-LOP : 005",
      title: "Cylindrical Curved Mint/Champagne Profile COP + Matching LOP",
      copDescription: "Soft-curved architectural profile with cyan/blue segmented floor readout and flush illuminated touch points.",
      lopDescription: "Sleek wall-mounted landing box matching the soft pastel champagne/mint styling.",
      finish: "PVD Champagne Gold / Mint Powder Coat with Polished Accents",
      display: "Vertical Scroll Cyan LED Floor & Travel Direction Indicator",
      buttons: "Capacitive Soft-Touch Illumination"
    },
    {
      code: "KE-COP-LOP : 006",
      title: "Heavy-Duty Commercial Column COP + Surface Mount LOP",
      copDescription: "Heavy-gauge stainless steel with dual illuminated direction arrows, loud alarm siren grill, and tamper-resistant push buttons.",
      lopDescription: "Rugged surface-mounted stainless steel hall station with red digital floor readout.",
      finish: "Heavy 2.0 mm AISI 304 Stainless Steel Plate",
      display: "Extra-Large Jumbo Red Digital Indicator with Direction Arrows",
      buttons: "Vandal-Resistant Stainless Steel Push Buttons with Braille"
    }
  ],

  // Calling Box Display Screens from Bottom of Brochure Page 17
  displayCallingBoxes: [
    {
      id: "horizontal-display",
      name: "Horizontal Display Effect",
      type: "Widescreen Color TFT Screen",
      desc: "Horizontal wide-format graphical display showing elevator position, tenant directory, building announcements, and multimedia photos."
    },
    {
      id: "vertical-display",
      name: "Vertical Display Effect",
      type: "Portrait TFT Multimedia Screen",
      desc: "Portrait layout LCD indicator displaying animated directional arrows, floor level number, date/time, and elevator load status."
    },
    {
      id: "bvt-605",
      name: "BVT 605 Calling Box Indicator",
      type: "High-Contrast Dot Matrix Screen",
      desc: "Ultra-sharp blue dot matrix display engineered for high visibility in sunlit lobbies and low-light environments."
    },
    {
      id: "b2-multimedia",
      name: "B2 Multi-Floor Calling Console",
      type: "Interactive Touch Screen",
      desc: "Advanced multi-landing dispatch screen allowing touch selection of destination floors from the lobby entrance."
    }
  ]
};

// All cabin series in sequential order for easy traversal
export const allInteriorSeriesGroups = [
  basicSeries,
  standardSeries,
  semiDesignerSeries,
  premiumSeries
];
