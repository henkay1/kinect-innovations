/* Kinect Innovations LLC — Catalog data
   Shared by services.html, packages.html, products.html, cart.js */

const KINECT_CATALOG = {
  services: [
    { id: "SVC-01", name: "Deep Workspace Decluttering & Organization", unit: "per session (up to 3 hrs)", price: 150.00,
      desc: "Full assessment and reorganization of desks, storage, and shared areas to restore an efficient, distraction-free layout." },
    { id: "SVC-02", name: "Home / Office Deep Cleaning", unit: "per session", price: 180.00,
      desc: "Top-to-bottom cleaning of workstations, common areas, and equipment surfaces using low-residue, electronics-safe products." },
    { id: "SVC-03", name: "IT Equipment Setup & Network Configuration", unit: "per visit", price: 200.00,
      desc: "Installation and configuration of routers, switches, workstations, and peripherals, tested end-to-end before we leave." },
    { id: "SVC-04", name: "Cable Management & Workspace Wiring", unit: "per visit", price: 120.00,
      desc: "Routing, labeling, and concealment of power and data cabling for a safer, cleaner, and more serviceable workspace." },
    { id: "SVC-05", name: "Server Closet / Infrastructure Audit", unit: "per audit", price: 250.00,
      desc: "Inspection of server racks, ventilation, power redundancy, and cabling with a written findings and remediation report." },
    { id: "SVC-06", name: "Smart Home / Office Automation Setup", unit: "per project", price: 300.00,
      desc: "Configuration of smart thermostats, access control, lighting, and monitoring systems tailored to your space." },
    { id: "SVC-07", name: "Post-Renovation Cleanup", unit: "per session", price: 220.00,
      desc: "Construction-dust removal, surface detailing, and space reset so a renovated area is immediately usable." },
    { id: "SVC-08", name: "Recurring Maintenance Visit", unit: "per visit, weekly or monthly plans", price: 95.00,
      desc: "Scheduled upkeep of workspace organization and light equipment checks to keep small issues from becoming big ones." },
    { id: "SVC-09", name: "Electronics & Equipment Sanitization", unit: "per session", price: 90.00,
      desc: "Safe disinfection of shared electronics, peripherals, and high-touch equipment using non-corrosive solutions." },
    { id: "SVC-10", name: "Move-In / Move-Out Organization & Setup", unit: "per project", price: 275.00,
      desc: "End-to-end unpacking, layout planning, and equipment setup so a new space is functional from day one." }
  ],

  packages: [
    { id: "PKG-01", name: "Starter Workspace Refresh", price: 299.00, compareAt: 330.00,
      desc: "A focused reset for a single home office or small workspace.",
      includes: ["Deep Workspace Decluttering & Organization", "Home / Office Deep Cleaning"] },
    { id: "PKG-02", name: "Complete Tech & Space Overhaul", price: 549.00, compareAt: 620.00,
      desc: "Full technical and physical refresh for a growing office or advanced home setup.",
      includes: ["IT Equipment Setup & Network Configuration", "Cable Management & Workspace Wiring", "Smart Home / Office Automation Setup"] },
    { id: "PKG-03", name: "Commercial Office Essentials", price: 499.00, compareAt: 580.00,
      desc: "Our most-booked package for small and mid-size commercial offices.",
      includes: ["Deep Workspace Decluttering & Organization", "Home / Office Deep Cleaning", "Server Closet / Infrastructure Audit"] },
    { id: "PKG-04", name: "Full Environment Management Package", price: 899.00, compareAt: 1085.00,
      desc: "Our comprehensive offering — every core service, bundled and scheduled for you.",
      includes: ["Deep Workspace Decluttering & Organization", "IT Equipment Setup & Network Configuration", "Cable Management & Workspace Wiring", "Server Closet / Infrastructure Audit", "Electronics & Equipment Sanitization"] },
    { id: "PKG-05", name: "Monthly Maintenance Plan", price: 349.00, compareAt: 380.00, unit: "per month",
      desc: "Ongoing upkeep for clients who want consistent, scheduled attention.",
      includes: ["4 Recurring Maintenance Visits", "1 Electronics & Equipment Sanitization"] }
  ],

  products: [
    { id: "PRD-01", name: "Eco-Friendly Multi-Surface Cleaner (32oz)", price: 14.99,
      desc: "Biodegradable, low-residue cleaner safe for desks, shared surfaces, and equipment enclosures." },
    { id: "PRD-02", name: "Electronics-Safe Screen & Equipment Wipes (50ct)", price: 9.99,
      desc: "Alcohol-balanced wipes formulated to clean monitors, keyboards, and touch surfaces without residue." },
    { id: "PRD-03", name: "Anti-Static Microfiber Cloth Set (6-pack)", price: 12.99,
      desc: "Lint-free, anti-static cloths for safe dusting of electronics and sensitive equipment." },
    { id: "PRD-04", name: "Cable Management Sleeve Kit", price:
