import { Service } from "@/types";

export const servicesData: Service[] = [
  {
    id: "interior-design",
    number: "01",
    title: "Interior Design",
    shortDesc: "Bespoke spatial design combining ergonomic flow, lighting concepts, and premium material curation for residential and commercial spaces.",
    fullDesc: "We design atmospheric, highly functional interior environments tailored to lifestyle and architectural structure. From custom millwork and false ceiling details to lighting schedules and furniture layouts, every volume is meticulously balanced.",
    deliverables: [
      "Spatial zoning & furniture layout plans",
      "Moodboards, color schemes & material schedules",
      "False ceiling, electrical & lighting layouts",
      "Custom cabinetry & joinery working details",
      "Photorealistic interior renders & 360° panoramas"
    ],
    audience: ["Homeowners", "Hospitality Brands", "Retailers", "Commercial Offices"],
    formats: ["DWG", "PDF", "High-Res JPEG/PNG", "SketchUp (.skp)"],
    icon: "LayoutDashboard"
  },
  {
    id: "exterior-design",
    number: "02",
    title: "Exterior Design & Facades",
    shortDesc: "Striking contemporary architectural elevations, facade treatments, and contextual exterior massing.",
    fullDesc: "Exterior elevations define a building's presence. We develop modern architectural facade concepts using louvers, textures, stone cladding, glazing, and architectural lighting to maximize curb appeal and climate performance.",
    deliverables: [
      "Front, rear & side architectural elevations",
      "Facade material & cladding specifications",
      "Exterior accent lighting placement plans",
      "Compound wall, gate & landscape integration details",
      "Day and dusk photorealistic exterior renders"
    ],
    audience: ["Villa Owners", "Developers", "Contractors", "Builders"],
    formats: ["DWG", "PDF", "High-Res Renders", "SketchUp (.skp)"],
    icon: "Building2"
  },
  {
    id: "architectural-planning",
    number: "03",
    title: "Architectural Planning & 2D Layouts",
    shortDesc: "Vastu-compliant and bylaws-conforming floor layouts optimized for daylight, ventilation, and structural efficiency.",
    fullDesc: "Comprehensive architectural space planning that translates client lifestyle and site constraints into harmonious floor plans. Every dimension conforms to local building bylaws, circulation norms, and structural grid alignments.",
    deliverables: [
      "Site layout & zoning masterplans",
      "Floor plans (Ground, First, Terrace levels)",
      "Circulation, door-window schedules & area calculations",
      "Vastu orientation analysis (where requested)",
      "Setback and municipal clearance drawings"
    ],
    audience: ["Plot Owners", "Real Estate Developers", "Architectural Firms"],
    formats: ["AutoCAD (.dwg)", "Vector PDF", "Scaled Plot Prints"],
    icon: "Compass"
  },
  {
    id: "structural-design",
    number: "04",
    title: "Structural Design & Coordination",
    shortDesc: "Rigorous structural planning ensuring safety, seismic resilience, and material efficiency from foundation to roof.",
    fullDesc: "Engineering precision meets architectural form. We coordinate column-beam grid layouts, footing details, and reinforcement schedules to ensure seamless constructability without compromising architectural aesthetics.",
    deliverables: [
      "Column & beam grid framing plans",
      "Footing & foundation layout schedules",
      "Slab reinforcement detailing",
      "Structural member sizing & load calculations",
      "Site coordination & reinforcement verification sheets"
    ],
    audience: ["Builders", "Civil Contractors", "Structural Engineers", "Self-builders"],
    formats: ["AutoCAD (.dwg)", "Structural Schedules PDF"],
    icon: "Boxes"
  },
  {
    id: "autocad-drafting-detailing",
    number: "05",
    title: "AutoCAD Drafting & Working Drawings",
    shortDesc: "Flawless, millimeter-accurate 2D CAD drafting, cross-sections, and construction-ready documentation.",
    fullDesc: "High-precision CAD drafting that eliminates site ambiguity. We produce layered, dimensioned, and annotated drawings that contractors and fabricators can build from directly without errors.",
    deliverables: [
      "Detailed architectural cross-sections (X & Y axes)",
      "Staircase, ramp & core details",
      "Toilet & wet-area plumbing and tiling layouts",
      "Door, window & railing fabrication drawings",
      "Layered, standardized AutoCAD drawing packages"
    ],
    audience: ["Contractors", "Architects", "Engineers", "Interior Fit-out Teams"],
    formats: ["DWG (2018/2024)", "DXF", "Layered Vector PDF"],
    icon: "FileCode2"
  },
  {
    id: "3d-visualization",
    number: "06",
    title: "3D Architectural Visualization",
    shortDesc: "Cinematic, photorealistic architectural renders that breathe life into plans before a single brick is laid.",
    fullDesc: "Hyper-realistic CGI visualization showcasing material textures, sunlight pathing, artificial illumination, and ambient mood. We turn abstract 2D blueprints into evocative imagery that inspires clients and drives presales.",
    deliverables: [
      "Ultra-high resolution 4K/8K exterior perspective views",
      "Detailed interior mood renders (day, night, warm lighting)",
      "Aerial massing & bird-eye contextual renders",
      "Material closeup vignettes & finishes highlights",
      "Post-production color grading & environment compositing"
    ],
    audience: ["Real Estate Marketers", "Homeowners", "Developers", "Design Studios"],
    formats: ["PNG / JPEG (up to 8K)", "WebP", "High-Bitrate Video Clips"],
    icon: "Eye"
  },
  {
    id: "sketchup-modeling",
    number: "07",
    title: "SketchUp 3D Modeling",
    shortDesc: "Organized, clean, component-structured 3D models ready for visualization, coordination, and design reviews.",
    fullDesc: "We craft immaculate SketchUp models with logical tags, layers, and optimized polygon counts. Perfect for real-time client walkthroughs, spatial verification, and direct import into rendering engines.",
    deliverables: [
      "Fully tagged and grouped 3D geometry",
      "Parametric room layouts & furniture placement",
      "Exterior envelope massing models",
      "Section cuts and interior elevations within model",
      "Optimized file sizes with clean texture mapping"
    ],
    audience: ["Designers", "Architects", "Visualizers", "Project Managers"],
    formats: ["SketchUp (.skp 2020-2024)", "OBJ", "FBX"],
    icon: "Box"
  },
  {
    id: "quantity-boq-estimation",
    number: "08",
    title: "Quantity Estimation & BOQ",
    shortDesc: "Exhaustive Bill of Quantities (BOQ) and accurate material takeoffs to maintain strict financial control.",
    fullDesc: "Avoid cost overruns and material wastage. We extract exact quantities from architectural and structural drawings to formulate comprehensive BOQ schedules with current market rate benchmarks.",
    deliverables: [
      "Item-rate Bill of Quantities (Civil, Finishing, MEP)",
      "Material takeoff sheets (Cement, Steel, Tiles, Paint, Glass)",
      "Labor and plant cost breakdowns",
      "Tender document preparation for contractor bidding",
      "Stage-wise construction cash flow projections"
    ],
    audience: ["Property Developers", "Homeowners", "Quantity Surveyors", "Builders"],
    formats: ["Excel (.xlsx)", "Structured PDF"],
    icon: "Calculator"
  },
  {
    id: "construction-documentation",
    number: "09",
    title: "Construction Documentation",
    shortDesc: "Comprehensive Good-For-Construction (GFC) drawing packages that keep sites moving without friction.",
    fullDesc: "A complete master folder containing all architectural, civil, electrical, plumbing, and interior details compiled into a single indexed drawing set for on-site execution.",
    deliverables: [
      "Numbered GFC drawing index & revision tracking",
      "MEP (Mechanical, Electrical, Plumbing) coordination sheets",
      "Finishing schedules & hardware specifications",
      "Site instructions and tolerance benchmarks",
      "Complete consolidated site binder PDFs"
    ],
    audience: ["General Contractors", "Site Supervisors", "Project Managers"],
    formats: ["Master PDF Binder", "DWG Sets"],
    icon: "FolderCheck"
  },
  {
    id: "design-consultation",
    number: "10",
    title: "Design Consultation & Peer Review",
    shortDesc: "Expert advisory on space optimization, material selection, aesthetic refinement, and cost reduction.",
    fullDesc: "Have existing drawings or facing site challenges? We provide independent design audits, value-engineering reviews, and architectural problem-solving sessions to elevate your project.",
    deliverables: [
      "Comprehensive plan review report with redline markups",
      "Value-engineering suggestions for budget optimization",
      "Lighting & material alternative recommendations",
      "Live 1-on-1 virtual design consultation sessions",
      "Actionable executive summary note"
    ],
    audience: ["Individual Builders", "Property Investors", "Renovation Clients"],
    formats: ["Annotated PDF Reports", "Video Call Recordings"],
    icon: "MessageSquareQuote"
  },
  {
    id: "2d-planning",
    number: "11",
    title: "2D Municipal & Sanction Drawings",
    shortDesc: "Bylaw-compliant statutory approval and sanction layout packages prepared to local municipal guidelines.",
    fullDesc: "Navigating local civic authority requirements demands precision. We prepare statutory submission sets highlighting FAR, ground coverage, setbacks, and parking calculations clearly.",
    deliverables: [
      "Authority submission drawing sheets",
      "FAR, setback & built-up area calculations",
      "Site cross-sections & road-width compliance keys",
      "Rainwater harvesting & sanitation schema",
      "Statutory legend and certificate blocks"
    ],
    audience: ["Landowners", "Liaison Architects", "Commercial Developers"],
    formats: ["AutoCAD (.dwg)", "Signed PDF Sets"],
    icon: "FileSpreadsheet"
  },
  {
    id: "project-planning",
    number: "12",
    title: "Project Planning & Scheduling",
    shortDesc: "Milestone-driven project phasing, construction timelines, and procurement roadmaps for timely delivery.",
    fullDesc: "A project without a timeline is at the mercy of delays. We structure milestone schedules, procurement timelines, and contractor dependency paths to keep execution on track.",
    deliverables: [
      "Gantt chart construction timeline",
      "Milestone breakdown & contractor handover dates",
      "Critical path method (CPM) analysis",
      "Procurement lead-time scheduling for long-lead items",
      "Weekly/monthly progress tracking templates"
    ],
    audience: ["Project Owners", "Site Engineers", "Developers"],
    formats: ["Interactive Schedules", "PDF Charts"],
    icon: "CalendarRange"
  }
];
