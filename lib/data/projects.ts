import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "m2-residence-complete",
    slug: "m2-residence",
    title: "M2 Residence — Architectural & Interior Masterplan",
    subtitle: "Complete 2D Planning, Structural Detailing, 3D Visualization & Interior Execution Package",
    category: "architecture",
    description: "A comprehensive multidisciplinary project by Akritidesigners encompassing complete architectural planning, structural detailing in AutoCAD, 3D SketchUp modeling, and photorealistic CGI visualization for a contemporary multi-level residence. The design balances bold rectilinear exterior massing with warm, minimalist interior spaces.",
    scope: [
      "Architectural 2D Space Planning (Ground & First Floor)",
      "AutoCAD Construction Detailing & Working Drawings",
      "Contemporary Facade & Exterior Elevation Design",
      "Interior Spatial Design: Living Lounge, Modular Kitchen, Master Suite, Bedroom",
      "SketchUp 3D Parametric Modeling",
      "Photorealistic Day & Dusk Lighting Renders"
    ],
    specs: [
      { label: "Typology", value: "Contemporary Residential Villa" },
      { label: "Levels", value: "G + 1 Floor + Terrace" },
      { label: "Drawing Set", value: "23 Plan Sheets • 8 Detailing Sheets" },
      { label: "3D Pipeline", value: "SketchUp Pro • V-Ray / Enscape Photorealistic Renders" },
      { label: "Documentation", value: "Full AutoCAD DWG & Good-for-Construction (GFC) PDF" }
    ],
    heroImage: "/projects/m2/exterior-main.png",
    cadPlan: "/cad/architectural-plan-blueprint-1.png",
    renderComparison: {
      blueprint: "/cad/architectural-plan-blueprint-1.png",
      render: "/projects/m2/exterior-main.png",
      title: "Plan to Facade Execution"
    },
    gallery: [
      {
        url: "/projects/m2/exterior-main.png",
        caption: "Main architectural elevation featuring vertical louvers, textured stucco, and warm recessed illumination.",
        type: "render"
      },
      {
        url: "/cad/architectural-plan-blueprint-1.png",
        caption: "Architectural Ground Floor Plan Sheet (AutoCAD Drafting, Axis Grid & Dimension Lines).",
        type: "blueprint"
      },
      {
        url: "/projects/m2/living-primary.png",
        caption: "Living space with fluted acoustic paneling, linear accent lighting, and custom media console.",
        type: "render"
      },
      {
        url: "/cad/cad-detailing-blueprint-1.png",
        caption: "Architectural Detailing Sheet (Sectional elevations, joinery details, and structural ties).",
        type: "detail"
      },
      {
        url: "/projects/m2/kitchen-island.png",
        caption: "Modular kitchen with breakfast bar, handleless acrylic cabinetry, and integrated ambient cove lighting.",
        type: "render"
      },
      {
        url: "/projects/m2/master-bed-main.png",
        caption: "Master bedroom suite with upholstered headboard wall, pendant task lighting, and integrated wardrobe flow.",
        type: "render"
      },
      {
        url: "/cad/architectural-plan-blueprint-2.png",
        caption: "First Floor Architectural Layout & Balcony Elevation Plan Sheet.",
        type: "blueprint"
      },
      {
        url: "/projects/m2/exterior-facade.png",
        caption: "Frontal perspective demonstrating clean geometric overhangs and balanced materiality.",
        type: "elevation"
      }
    ],
    featured: true
  },
  {
    id: "m2-exterior-elevation",
    slug: "m2-exterior-elevation",
    title: "M2 Villa Facade & Elevation Engineering",
    subtitle: "Modern Geometric Massing, Louvered Screens & Architectural Lighting",
    category: "exterior",
    description: "Detailed exterior elevation design emphasizing modern geometry, thermal comfort via shading fins, and dramatic dusk illumination. Developed through rigorous massing models in SketchUp and translated into working dimensioned elevations.",
    scope: [
      "Front & Corner Facade Treatment",
      "Exterior Material & Stone Cladding Palette",
      "Perimeter Wall & Gate Integration",
      "Dusk & Daylight Illumination Simulation"
    ],
    specs: [
      { label: "Category", value: "Exterior Architecture" },
      { label: "Aesthetic", value: "Warm Modern Minimalist" },
      { label: "Key Elements", value: "Vertical Louvers, Linear LED Coves, Textured Stone" },
      { label: "Deliverables", value: "Exterior CAD Elevations & 4K Render Pack" }
    ],
    heroImage: "/projects/m2/exterior-facade.png",
    cadPlan: "/cad/architectural-plan-blueprint-2.png",
    renderComparison: {
      blueprint: "/cad/cad-detailing-blueprint-2.png",
      render: "/projects/m2/exterior-facade.png",
      title: "Elevation Drawing to 3D Facade"
    },
    gallery: [
      {
        url: "/projects/m2/exterior-facade.png",
        caption: "Direct frontal facade elevation render showing entry porch and upper-level cantilever.",
        type: "render"
      },
      {
        url: "/projects/m2/exterior-side.png",
        caption: "Side profile perspective showing window punch-outs and surface texture contrast.",
        type: "render"
      },
      {
        url: "/projects/m2/exterior-dusk.png",
        caption: "Dusk lighting render capturing the architectural evening atmosphere.",
        type: "render"
      },
      {
        url: "/cad/cad-detailing-blueprint-2.png",
        caption: "CAD Working Elevation Detailing & Window Schedule.",
        type: "blueprint"
      }
    ],
    featured: true
  },
  {
    id: "m2-living-space",
    slug: "m2-living-space",
    title: "M2 Contemporary Living & Media Lounge",
    subtitle: "Seamless Spatial Flow, Fluted Wood Detailing & Bespoke Millwork",
    category: "interior",
    description: "Designed as the central social zone of the residence. The space pairs neutral micro-cement textures with warm fluted timber paneling and indirect cove lighting for a soothing, upscale ambiance.",
    scope: [
      "Living Room Spatial Zoning",
      "False Ceiling & Layered Lighting Plan",
      "Custom TV Wall Unit & Storage Millwork",
      "Furniture Ergonomics & Material Selection"
    ],
    specs: [
      { label: "Category", value: "Interior Architecture" },
      { label: "Zone", value: "Ground Floor Main Lounge" },
      { label: "Lighting Scheme", value: "3000K Warm Indirect & Track Spots" },
      { label: "Finishes", value: "Fluted Oak, Italian Marble, Matte Charcoal Accents" }
    ],
    heroImage: "/projects/m2/living-primary.png",
    cadPlan: "/cad/architectural-plan-blueprint-3.png",
    renderComparison: {
      blueprint: "/cad/architectural-plan-blueprint-3.png",
      render: "/projects/m2/living-primary.png",
      title: "Living Layout to Interior Render"
    },
    gallery: [
      {
        url: "/projects/m2/living-primary.png",
        caption: "Primary angle toward media feature wall and seating cluster.",
        type: "render"
      },
      {
        url: "/projects/m2/living-seating.png",
        caption: "Ergonomic sofa composition with architectural accent wall.",
        type: "render"
      },
      {
        url: "/projects/m2/living-tv-unit.png",
        caption: "Detailed perspective on floating console and back-lit timber slats.",
        type: "render"
      },
      {
        url: "/projects/m2/living-overview.jpg",
        caption: "Wide-angle spatial overview illustrating connection to dining zone.",
        type: "render"
      }
    ],
    featured: true
  },
  {
    id: "m2-modular-kitchen",
    slug: "m2-modular-kitchen",
    title: "M2 Ergonomic Modular Kitchen",
    subtitle: "Golden Work Triangle, Quartz Surfaces & Handleless Millwork",
    category: "interior",
    description: "A precision-planned culinary space optimized for workflow efficiency. Features an island breakfast bar, quartz countertops, concealed Blum hardware, and high-efficiency appliance integration.",
    scope: [
      "Modular Kitchen Work Triangle Layout",
      "Cabinetry Fabrication Drawings",
      "Quartz Countertop & Backsplash Detailing",
      "Plumbing, Gas & Electrical Point Schedules"
    ],
    specs: [
      { label: "Category", value: "Modular Interior" },
      { label: "Layout", value: "L-Shape + Center Island Counter" },
      { label: "Hardware", value: "Soft-close Tandem & Overhead Lift Systems" },
      { label: "Surfaces", value: "Calacatta Quartz & Anti-fingerprint Acrylic" }
    ],
    heroImage: "/projects/m2/kitchen-island.png",
    cadPlan: "/cad/architectural-plan-blueprint-4.png",
    renderComparison: {
      blueprint: "/cad/architectural-plan-blueprint-4.png",
      render: "/projects/m2/kitchen-island.png",
      title: "Kitchen CAD Plan to 3D Render"
    },
    gallery: [
      {
        url: "/projects/m2/kitchen-island.png",
        caption: "Kitchen island with breakfast counter and architectural pendant illumination.",
        type: "render"
      },
      {
        url: "/projects/m2/kitchen-cabinets.jpg",
        caption: "Overhead and base cabinet view showing seamless handleless gola profiles.",
        type: "render"
      },
      {
        url: "/projects/m2/kitchen-counter.jpg",
        caption: "Close-up of sink and prep counter highlighting task lighting.",
        type: "render"
      },
      {
        url: "/projects/m2/kitchen-dining.jpg",
        caption: "Transition view from kitchen into the open dining area.",
        type: "render"
      }
    ],
    featured: true
  },
  {
    id: "m2-master-suite",
    slug: "m2-master-suite",
    title: "M2 Master Bedroom & Suite Detailing",
    subtitle: "Private Sanctuary with Fluted Headboard, Dressing Corridor & Mood Lighting",
    category: "interior",
    description: "An intimate retreat balancing tranquility and sophistication. Includes a custom full-height headboard wall, acoustic wall treatments, walk-in wardrobe joinery, and discrete bedside charging hubs.",
    scope: [
      "Master Suite Space Planning",
      "Wardrobe Joinery & Dressing Table Working Details",
      "Acoustic Headboard Wall Composition",
      "Indirect Dim-to-Warm Bedside Lighting"
    ],
    specs: [
      { label: "Category", value: "Interior Suite" },
      { label: "Suite Area", value: "Level 1 Master Bed + Walk-in Closet" },
      { label: "Joinery", value: "Fluted Charcoal PU & Tinted Glass Shutters" },
      { label: "Floor Finish", value: "Herringbone Engineered Oak" }
    ],
    heroImage: "/projects/m2/master-bed-main.png",
    cadPlan: "/cad/architectural-plan-blueprint-5.png",
    renderComparison: {
      blueprint: "/cad/architectural-plan-blueprint-5.png",
      render: "/projects/m2/master-bed-main.png",
      title: "Suite Working Plan to 3D Render"
    },
    gallery: [
      {
        url: "/projects/m2/master-bed-main.png",
        caption: "Primary suite perspective with custom bedstead and soft ambient headboard cove.",
        type: "render"
      },
      {
        url: "/projects/m2/master-bed-wardrobe.png",
        caption: "Integrated wardrobe bank with tinted glass and internal LED lighting channels.",
        type: "render"
      },
      {
        url: "/projects/m2/master-bed-accent.png",
        caption: "Bedside accent detail showing reading lamps and material juxtaposition.",
        type: "render"
      },
      {
        url: "/projects/m2/bedroom1-view.png",
        caption: "Second bedroom perspective showing tailored wardrobe and study nook.",
        type: "render"
      }
    ],
    featured: true
  },
  {
    id: "m2-cad-documentation",
    slug: "m2-cad-documentation",
    title: "M2 Project — Working Drawings & Detailing Package",
    subtitle: "23 Architectural Floor Sheets & 8 Technical Joinery/Section Plates",
    category: "cad",
    description: "The complete technical backbone of the M2 Residence. Prepared in AutoCAD with rigorous layering standards, structural axis dimensions, wall thickness indicators, door-window schedules, and fabrication-ready cross-sections.",
    scope: [
      "23 Full Architectural Plan Sheets (DWG & Scaled PDF)",
      "8 Technical Detailing Sheets for Joinery & Construction",
      "Structural Column-Beam Coordination Grids",
      "Comprehensive Door, Window & Finish Schedules"
    ],
    specs: [
      { label: "Discipline", value: "AutoCAD 2D Drafting & Working Drawings" },
      { label: "Standards", value: "AIA / ISO Layer Standard, Millimeter Accuracy" },
      { label: "Total Sheets", value: "31 Fully Annotated Drawing Sheets" },
      { label: "Formats", value: "AutoCAD .dwg (2024), Vector High-Res PDF" }
    ],
    heroImage: "/cad/architectural-plan-blueprint-1.png",
    cadPlan: "/cad/cad-detailing-blueprint-1.png",
    gallery: [
      {
        url: "/cad/architectural-plan-blueprint-1.png",
        caption: "Ground Floor Master Layout Sheet with Full Axis Dimensions & Space Allocations.",
        type: "blueprint"
      },
      {
        url: "/cad/cad-detailing-blueprint-1.png",
        caption: "Detailing Sheet 01 — Cross-sections, Staircase Joinery & Structural Ties.",
        type: "detail"
      },
      {
        url: "/cad/architectural-plan-blueprint-2.png",
        caption: "First Floor Plan Sheet showing balcony setbacks and master suite boundaries.",
        type: "blueprint"
      },
      {
        url: "/cad/cad-detailing-blueprint-2.png",
        caption: "Detailing Sheet 02 — Architectural Elevation Lines & Window Opening Schedules.",
        type: "detail"
      },
      {
        url: "/cad/architectural-plan-blueprint-3.png",
        caption: "Architectural Plan Sheet 03 — Plumbing and Core Coordination.",
        type: "blueprint"
      },
      {
        url: "/cad/cad-detailing-blueprint-3.png",
        caption: "Detailing Sheet 03 — Millwork Fabrication Dimensions & Assembly Joints.",
        type: "detail"
      }
    ],
    featured: true
  }
];
