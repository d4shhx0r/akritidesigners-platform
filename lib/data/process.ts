import { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Site Analysis",
    desc: "We analyze site dimensions, orientation, client requirements, budget parameters, and local municipal bylaws to formulate an actionable design brief.",
    details: [
      "Physical / cadastral site survey review",
      "Sun path & wind direction environmental orientation",
      "Client lifestyle & functional requirement inventory",
      "Municipal zoning & setback bylaws assessment"
    ],
    output: "Design Brief & Feasibility Framework"
  },
  {
    step: "02",
    title: "2D Architectural Space Planning",
    desc: "Translating needs into optimal spatial flow. We draft preliminary 2D bubble diagrams and detailed floor layouts ensuring zero wasted circulation.",
    details: [
      "Spatial relationship & zoning diagrams",
      "Vastu alignment & circulation flow optimization",
      "Furniture placement & room dimensioning",
      "Iterative client review and plan finalization"
    ],
    output: "Approved 2D Master Floor Plans"
  },
  {
    step: "03",
    title: "3D Massing & Modeling",
    desc: "We construct precision 3D geometric models in SketchUp to evaluate massing, daylight penetrations, facade depth, and ceiling volumes in real space.",
    details: [
      "Millimeter-accurate 3D SketchUp building envelope",
      "Parametric room volumes & structural column integration",
      "Exterior elevation massing & cantilever studies",
      "Material and texture assignment"
    ],
    output: "Fully Structured 3D Digital Model (.skp)"
  },
  {
    step: "04",
    title: "Photorealistic 3D Visualization",
    desc: "Breathing cinematic life into design. High-resolution rendering simulations capture accurate lighting, shadows, reflections, and material materiality.",
    details: [
      "Physically based materials (PBR) & custom textures",
      "Day, dusk & interior artificial lighting simulations",
      "High-resolution 4K/8K exterior perspective views",
      "Atmospheric styling & landscape integration"
    ],
    output: "Ultra-High Resolution Render Package"
  },
  {
    step: "05",
    title: "AutoCAD Working Drawings & Detailing",
    desc: "The critical engineering phase. We produce Good-For-Construction (GFC) sets with exact dimensions, structural coordination, and fabrication details.",
    details: [
      "Comprehensive architectural cross-sections & elevations",
      "Electrical, plumbing & HVAC point layouts",
      "Joinery, false ceiling, and millwork fabrication sheets",
      "Door, window, and railing schedules"
    ],
    output: "Complete GFC Working Drawing Set (DWG/PDF)"
  },
  {
    step: "06",
    title: "BOQ Estimation & Construction Handover",
    desc: "Equipping you with full financial control. We compile detailed itemized Bill of Quantities (BOQ) and assist your execution teams on site.",
    details: [
      "Item-rate Bill of Quantities (BOQ) calculations",
      "Material quantity takeoffs (Steel, Concrete, Finishes)",
      "Contractor tender & specification documents",
      "Ongoing drawing clarification support during build"
    ],
    output: "Itemized BOQ Sheet & Master Handover Package"
  }
];
