import { assetUrl } from "../utils/assetPath";

export const companyData = {
  name: "KRUPA ELEVATORS",
  shortName: "Krupa",
  tagline: "Reliable Riding Experience",
  mission: "A flexible solution that unifies form and function. An all-round elevator applicable to multiple building types, with outstanding architectural flexibility for car, door and shaft dimensions. Precision assures a smooth and safe user experience.",
  servicesSummary: "Elevators Servicing, Installation, Upgrades & Maintenance",
  contacts: {
    phone: "+91 82008 59171",
    phoneRaw: "+918200859171",
    whatsapp: "918200859171",
    // whatsapp: "916353344875",
    emailPrimary: "info@krupaelevators.com",
    emailSales: "sales@krupaelevators.com",
    website: "www.krupaelevators.com",
    factory: {
      title: "Manufacturing Works",
      address: "1, Heritage Industrial Hub, Nr. Global Industrial Estate, Nr. Kotak Mahindra Bank, Kathwada GIDC Road No 5, Ahmedabad-382430, Gujarat, India",
      city: "Ahmedabad",
      pincode: "382430"
    }
  },
  brochurePdf: assetUrl("/assets/krupa-brochure.pdf"),
  logo: assetUrl("/assets/logo-clean.png"),
  logoWebp: assetUrl("/assets/logo-clean.webp"),
  heroImage: assetUrl("/assets/generated/capsule-hero.webp"),
  villaElevatorImage: assetUrl("/assets/generated/home-elevator.webp"),
  stats: [
    { label: "Energy Cut (PMS)", value: "30%", detail: "PMS Gearless traction machine vs conventional geared machine" },
    { label: "Lighting Savings", value: "50%", detail: "Eco LED lighting with smart auto-shutoff when idle" },
    { label: "Space Reduction", value: "40%", detail: "MRL machine-roomless technology & compact home lift footprint" },
    { label: "Product Portfolio", value: "10+", detail: "Specialized elevator classes engineered to international safety standards" }
  ],
  pillars: [
    {
      title: "Inspiring Design",
      desc: "Futuristic aesthetics and 11 distinct cabin finish series that elevate the look, feel and class of any building."
    },
    {
      title: "Improved Comfort",
      desc: "Ultra-smooth acceleration, low-noise gearless machines, and precision millimeter levelling for a serene ride."
    },
    {
      title: "Increased Eco-Efficiency",
      desc: "Cutting-edge PMS permanent magnet drives, V3F inverters, and auto-idle shutoff cutting carbon emissions."
    },
    {
      title: "Ideal Partner",
      desc: "Comprehensive lifecycle support from site survey, bespoke CAD planning, flawless installation to 24/7 AMC."
    }
  ],
  attributes: [
    { title: "Smart", desc: "Touchless call options, microprocessor logic & telemetry." },
    { title: "Sophisticated", desc: "Titanium gold, rose gold, hairline finishes & LED ceilings." },
    { title: "Strength", desc: "Up to 4000kg freight capacity with reinforced steel construction." },
    { title: "Spacious", desc: "Maximized car dimensions with minimal shaft overhead and pit requirements." },
    { title: "Smooth", desc: "Closed-loop V3F drive for gentle starts and bump-free stops." }
  ]
};

// "Monopoly-Free" ownership promise — shown on Home and detailed on the AMC page.
export const ownershipPolicy = {
  badge: "100% Monopoly-Free Elevators",
  questions: [
    "Are you still not the true owner of your elevator, even after buying it?",
    "Are you locked in with your elevator company, unable to switch maintenance providers while paying exorbitant AMC fees?"
  ],
  headline: "Switch to Krupa Elevators — 100% Monopoly-Free Elevators!",
  summary:
    "We deliver non-proprietary elevator systems with no password locks and no restricted protocols. Once installed, the elevator is truly yours — giving you complete freedom to choose any service provider you trust at competitive rates.",
  promises: [
    {
      id: "no-locks",
      title: "No Password Locks",
      desc: "No hidden service passwords or locked controllers. Your elevator never stops working because a contract ended."
    },
    {
      id: "open-systems",
      title: "No Restricted Protocols",
      desc: "Non-proprietary controllers and standard components that any qualified technician can service and source."
    },
    {
      id: "your-choice",
      title: "Your Choice of Service Provider",
      desc: "Choose Krupa or any service provider you trust, at competitive AMC rates. The decision is always yours."
    }
  ],
  // Formal policy points listed on the AMC page.
  commitments: [
    "The elevator, its controller and its software belong entirely to you from the day of handover.",
    "No service passwords, time locks or remote shut-offs are placed on any Krupa elevator.",
    "Controllers use open, standard protocols. No special Krupa-only tools are needed to service them.",
    "Wiring diagrams and technical documentation for your installation are handed over to you on request.",
    "Spare parts are standard components, available from Krupa or from the open market.",
    "You are free to give your maintenance to any service provider, with or without a Krupa AMC."
  ]
};

export const trustedSolutionSection = {
  heading: "Trusted Elevator Solution",
  imageBandWords: ["Smart", "Sophisticated", "Strength", "Spacious", "Smooth"],
  quote:
    "A flexible solution that unifies form and function. An all-round elevator applicable to multiple building types, with outstanding architectural flexibility for car, door and shaft dimensions. Precision assure a smooth and safe user experience.",
  modernElevatorHeading: "Modern Elevator for Residential & Commercial Buildings",
  modernElevatorParagraphs: [
    "Created to enhance the modern and contemporary look of low, mid & high-rise residential buildings and low & mid-rise commercial buildings.",
    "The design-rich KRUPA ELEVATORS now offer more flexibility to choose the ideal elevators that add to the look, feel, style and class of both your building's interiors and exteriors.",
    "Excellent ride comfort, energy savings, product design with futuristic technology & impressive aesthetics all come together in perfect combination from KRUPA ELEVATORS, to take the quality of elevator experiences several notches higher for the builder, developer, architect, facility manager and the end user.",
  ],
  elevateYourExperience: [
    "INSPIRING DESIGN",
    "IMPROVED COMFORT",
    "INCREASED ECO-EFFICIENCY",
    "IDEAL PARTNER",
  ],
};
