import { assetUrl } from "../utils/assetPath";

export const technologiesMaster = {
  headline: "Technology That Moves More Efficiently",
  subheadline: "Best-in-class energy-saving engineering that minimizes environmental carbon footprints while maximizing passenger ride comfort and system longevity.",
  
  pillars: [
    {
      id: "pms",
      name: "PMS Technology",
      title: "Permanent Magnet Synchronous Technology",
      brochurePage: 3,
      tag: "Green Energy Champion",
      image: assetUrl("/assets/technologies/pms-motor.jpg"),
      claim: "Consumes up to 30% less energy than conventional geared traction machines",
      summary: "Our green, environment-friendly Permanent Magnet Synchronous (PMS) traction motor uses high-coercivity rare earth magnets. With zero mechanical transmission loss from worm gears, the motor runs with near-zero heat dissipation, whisper-quiet acoustics (<50 dB), and total freedom from gear oil lubricants.",
      benefits: [
        "Up to 30% electricity savings compared to standard induction machines",
        "100% gear oil free — eliminates oil leaks, disposal hazards, and odors",
        "Extremely compact profile suitable for both overhead and MRL installations",
        "High torque output at low RPMs ensuring buttery-smooth start/stop transitions"
      ]
    },
    {
      id: "gearless",
      name: "Gearless Traction",
      title: "Advanced Gearless Traction Machines",
      brochurePage: "3 & 18",
      tag: "Whisper Operation",
      image: assetUrl("/assets/technologies/pms-motor.jpg"),
      claim: "Direct-drive rotor-to-sheave mechanical efficiency",
      summary: "In a gearless traction machine, the drive sheave is mounted directly to the rotor shaft of the permanent magnet motor. By completely eliminating intermediate gears, acoustic vibrations and mechanical backlash are abolished, giving riders a silky, cloud-like journey.",
      models: [
        {
          name: "I-127 Gearless Machine",
          type: "High-Efficiency PMS Gearless",
          speed: "1.0 - 2.0 MPS",
          capacity: "Up to 1088 Kgs",
          desc: "Compact permanent magnet synchronous machine engineered for high cycling, residential towers, and machine-roomless shafts."
        },
        {
          name: "PMS Radial Gearless Machine",
          type: "Heavy Commercial Gearless",
          speed: "1.5 - 2.5 MPS",
          capacity: "Up to 1768 Kgs",
          desc: "High-torque multi-pole motor designed for hospital stretcher lifts and heavy commercial high-rise transit."
        }
      ],
      advantages: [
        "Zero mechanical wear parts in transmission line",
        "Acoustic noise lower than 48 dB inside the hoistway",
        "Substantially reduced annual maintenance overheads",
        "Precision closed-loop vector encoder positioning"
      ]
    },
    {
      id: "geared",
      name: "Geared Traction Machines",
      title: "Heavy-Duty Helical & Worm Geared Machines",
      brochurePage: 18,
      tag: "High Torque Workhorse",
      image: assetUrl("/assets/drawings/page_18.png"),
      claim: "Proven high-tonnage mechanical dependability",
      summary: "For heavy industrial goods elevators, automobile parking platforms, and economical residential walk-ups, Krupa manufactures robust geared traction machines featuring high-grade alloy bronze worm gears and precision-ground helical pinions.",
      models: [
        {
          name: "M67 Geared Traction Machine",
          type: "Medium Duty Geared Machine",
          speed: "0.50 - 1.0 MPS",
          capacity: "Up to 884 Kgs (13 Persons)",
          desc: "Heavy-duty helical/worm gearing engineered for standard residential apartments and commercial buildings."
        },
        {
          name: "M76 Geared Traction Machine",
          type: "High-Capacity Geared Machine",
          speed: "0.25 - 1.0 MPS",
          capacity: "Up to 4000 Kgs (Freight / Goods)",
          desc: "Reinforced cast-iron housing and oversized bronze gear wheel built to withstand industrial freight shocks and car lifts."
        }
      ],
      advantages: [
        "Proven reliability over decades of harsh continuous industrial duty",
        "Massive initial torque delivery for moving heavy pallet trucks and SUVs",
        "Cost-effective installation and simplified maintenance protocols",
        "Dual electromechanical failsafe shoe brakes"
      ]
    },
    {
      id: "inverter",
      name: "Energy-Efficient Inverters",
      title: "V3F Drive with German Know-How",
      brochurePage: 3,
      tag: "Precision Curve Dynamics",
      image: assetUrl("/assets/technologies/v3f-control.jpg"),
      claim: "Millimeter-level leveling accuracy with zero jerk",
      summary: "Specially engineered for elevators with German know-how, the high-performance Variable Voltage Variable Frequency (V3F) closed-loop inverter continuously modulates motor voltage and frequency to generate optimal S-curve acceleration and deceleration profiles.",
      benefits: [
        "S-curve acceleration eliminates sudden start jolts and stopping jerks",
        "Power factor correction prevents building electrical peak demand spikes",
        "Regenerative energy braking support feeds excess power back into the grid",
        "Millimeter-level leveling precision (±3 mm) ensuring safe, trip-free boarding"
      ]
    },
    {
      id: "led",
      name: "Eco LED Lighting",
      title: "Long-Lasting Energy-Efficient LED Lighting",
      brochurePage: 3,
      tag: "Intelligent Power Saving",
      claim: "Consumes up to 50% less energy than fluorescent fixtures with 6x lifespan",
      summary: "All Krupa elevator cabins feature solid-state LED downlights and architectural ambient lighting. Built-in smart idle management detects passenger absence and automatically shuts off cabin illumination and blower fans when the elevator is parked.",
      benefits: [
        "Up to 50% lower electrical consumption compared to fluorescent tubes",
        "Six times longer operational life, eliminating frequent bulb replacement hassles",
        "Smart automatic sleep timer activates after 90 seconds of elevator inactivity",
        "Flicker-free, eye-soothing color temperatures from warm 3000K to daylight 6000K"
      ]
    },
    {
      id: "microprocessor",
      name: "Microprocessor Control",
      title: "Advanced 32-Bit Microprocessor Control Panels",
      brochurePage: 18,
      tag: "Intelligent Core",
      image: assetUrl("/assets/technologies/v3f-control.jpg"),
      claim: "CAN bus serial communication with real-time fault diagnostics",
      summary: "The brain of every Krupa elevator is an industrial 32-bit microprocessor controller. It coordinates elevator group dispatch, door operator synchronization, closed-loop floor positioning, safety chain monitoring, and self-diagnostic fault logging.",
      benefits: [
        "High-speed CAN bus serial communication reduces shaft traveling cable bulk by 70%",
        "Real-time fault code memory logs the last 100 system events for instant troubleshooting",
        "Group supervisory dispatch algorithms minimize passenger lobby waiting times",
        "Integrated electronic door lock safety supervision and anti-nuisance call cancellation"
      ]
    },
    {
      id: "ard",
      name: "Automatic Rescue Device",
      title: "Emergency Rescue Device (ARD / ERD)",
      brochurePage: 3,
      tag: "Failsafe Evacuation",
      claim: "100% passenger peace of mind during municipal blackout",
      summary: "During sudden power grid blackouts or phase failures, Krupa's Automatic Rescue Device immediately senses the interruption, activates its maintenance-free sealed lead-acid battery array, smoothly drives the cabin to the nearest floor using least-torque logic, and opens the doors automatically to let passengers exit safely.",
      benefits: [
        "Instant automatic activation within 3 seconds of power failure",
        "Least-torque direction search ensures minimal battery discharge",
        "Clear audio-visual passenger indicator announces rescue operation in progress",
        "Automatic return to normal operation upon power grid restoration"
      ]
    },
    {
      id: "mrl-controller",
      name: "MRL Integrated Controller",
      title: "Ultra-Slim Machine Roomless Controller",
      brochurePage: 18,
      tag: "Zero Penthouse Space",
      claim: "Built directly into the top landing door architrave",
      summary: "Designed specifically for machine-roomless installations, this compact controller fits seamlessly inside the wall jamb or architrave at the top landing floor. Inspection, emergency brake release, and test operations can be carried out safely by technicians from the landing without entering the hoistway.",
      benefits: [
        "Completely eliminates the rooftop concrete machine room penthouse",
        "Emergency rescue hand-pump and electrical release accessible from landing door jamb",
        "Space-saving wall flush design with lockable brushed stainless steel cover",
        "Integrated motor thermal sensors and dynamic line filter suppression"
      ]
    },
    {
      id: "monitoring",
      name: "Elevator Monitoring System",
      title: "24-Hour IoT Telemetry Monitoring",
      brochurePage: 12,
      tag: "Predictive Intelligence",
      image: assetUrl("/assets/technologies/cop-display.jpg"),
      claim: "Continuous real-time status and proactive alert dispatch",
      summary: "Achieve round-the-clock visibility over all elevator operations with 24-hour IoT monitoring. Sensors track travel cycles, door opening times, vibration thresholds, and error codes in real time, alerting our technical engineering team before minor anomalies become service interruptions.",
      benefits: [
        "24/7 continuous operational telemetry and predictive fault warning",
        "Automated service ticket generation directly to regional technician squads",
        "Transparent maintenance dashboards for society and facility managers",
        "Rapid emergency response coordination with on-board cabin intercoms"
      ]
    }
  ],

  machineComparison: {
    title: "Traction Machine Engineering: Gearless PMSM vs. Geared Traction",
    subtitle: "Direct technical comparison per Krupa Elevators engineering standards.",
    parameters: [
      {
        feature: "Motor & Drive Architecture",
        gearless: "Permanent Magnet Synchronous Motor (PMSM) with direct-drive rotor sheave",
        geared: "High-torque AC Induction Motor coupled to bronze worm / helical reduction gearbox",
        highlight: "Gearless eliminates intermediate transmission loss"
      },
      {
        feature: "Energy Consumption",
        gearless: "Up to 30% to 40% lower power draw; lower peak electrical kVA demand",
        geared: "Standard industrial efficiency with higher starting current",
        highlight: "30% - 40% PMS energy savings"
      },
      {
        feature: "Acoustic Noise & Vibration",
        gearless: "Sub-50 dB whisper-quiet operation; zero gear mesh vibration",
        geared: "58 - 65 dB smooth mechanical hum with vibration isolation dampers",
        highlight: "Ideal for residential & hospital silence"
      },
      {
        feature: "Lubrication & Maintenance",
        gearless: "100% Gear Oil Free — zero oil changes, no seal leaks, zero oil odor",
        geared: "Sealed synthetic oil bath requiring scheduled oil changes & seal checks",
        highlight: "Gearless is 100% eco-green"
      },
      {
        feature: "Machine Room Space",
        gearless: "Total flexibility: fits inside hoistway top (MRL) or standard overhead room",
        geared: "Requires dedicated overhead machine room to house motor & gearbox base",
        highlight: "Gearless enables rooftop space savings"
      },
      {
        feature: "Speed Range",
        gearless: "0.63 m/s up to 2.50 m/s with silky closed-loop vector control",
        geared: "0.25 m/s up to 1.00 m/s optimized for heavy torque and steady transit",
        highlight: "Gearless supports high-speed high-rise"
      },
      {
        feature: "Primary Applications",
        gearless: "Passenger elevators, luxury villas, commercial atriums, hospitals, MRL shafts",
        geared: "Heavy industrial goods lifts, high-tonnage freight, automobile car elevators",
        highlight: "Both engineered for lifetime reliability"
      }
    ]
  },

  safetyEcosystem: [
    {
      id: "cdl",
      title: "Inbuilt CDL (Car Door Lock)",
      desc: "Automatically locks cabin doors when the elevator is stopped between floors, preventing hazardous attempts by passengers to force doors open."
    },
    {
      id: "light-curtain",
      title: "Full Height Door Light Curtain",
      image: assetUrl("/assets/technologies/safety-curtain.jpg"),
      desc: "An infrared screen with up to 128 invisible beams covers the full door height, instantly reopening doors if a passenger, child, or pet enters the threshold."
    },
    {
      id: "brake-inspection",
      title: "Automatic Daily Brake Inspection",
      desc: "Automated daily test cycle verifies brake holding torque, spring force, and air gap clearance to guarantee fail-safe deceleration."
    },
    {
      id: "hoisting-system",
      title: "Reliable & Safe Hoisting System",
      desc: "High-tensile steel wire ropes and robust sheaves engineered with an 8x+ safety factor for ultimate structural reliability."
    },
    {
      id: "accurate-leveling",
      title: "Accurate Closed-Loop Leveling",
      desc: "High-precision optical vane switches ensure the cabin stops within ±3 mm flush with the landing floor, preventing tripping hazards."
    }
  ]
};
