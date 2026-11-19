import servicePostersImg from "@/assets/service-posters.jpg";
import serviceFlyersImg from "@/assets/service-flyers.jpg";
import serviceBooksImg from "@/assets/service-books.jpg";
import servicePackagingImg from "@/assets/service-packaging.jpg";
import serviceStationeryImg from "@/assets/service-stationery.jpg";
import serviceBrochuresImg from "@/assets/service-brochures.jpg";
import printShowcaseImg from "@/assets/print-showcase.jpg";

export interface ServiceItem {
  id: string;
  slug: string;
  aliasSlugs?: string[];
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery: {
    url: string;
    caption: string;
  }[];
  options: {
    title: string;
    description: string;
    items: string[];
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  materials: string[];
  finishes: string[];
  turnaroundTime: string;
  minOrder: string;
  relatedSlugs: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "posters",
    slug: "poster-printing",
    aliasSlugs: ["posters"],
    number: "01",
    title: "Poster Printing",
    shortDescription:
      "Vibrant, exhibition-grade posters printed on premium archival, matte, and glossy stocks with razor-sharp clarity.",
    fullDescription:
      "High-impact posters engineered for commercial advertising, retail campaigns, art exhibitions, and educational displays. Printed using state-of-the-art wide-format and Heidelberg offset presses with UV-stable inks to ensure deep blacks, vivid pigments, and long-lasting durability.",
    image: servicePostersImg,
    gallery: [
      { url: servicePostersImg, caption: "Exhibition art poster prints on heavy matte archival stock" },
      { url: printShowcaseImg, caption: "Studio print arrangement with color-calibrated proofs" },
      { url: serviceBrochuresImg, caption: "Large-format corporate promotional posters" },
    ],
    options: [
      {
        title: "Standard & Custom Dimensions",
        description: "Choose from industry-standard DIN formats or bespoke display dimensions.",
        items: ["A4 (210 × 297 mm)", "A3 (297 × 420 mm)", "A2 (420 × 594 mm)", "A1 (594 × 841 mm)", "A0 (841 × 1189 mm)", "Custom Roll up to 60\" wide"],
      },
      {
        title: "Archival & Commercial Stocks",
        description: "Selected for ink absorption, surface smoothness, and optical brightness.",
        items: ["170gsm Silk Art Paper", "220gsm Heavy Matte", "250gsm Premium Photo Gloss", "300gsm Fine Art Archival Cotton", "Outdoor Weatherproof Synthetic Vinyl"],
      },
      {
        title: "Protective Surface Finishes",
        description: "Enhance visual depth while shielding prints from scratches and fading.",
        items: ["Matte Thermal Lamination", "High-Gloss Polypropylene Lamination", "Anti-Scratch Velvet Film", "UV Moisture-Resistant Coating"],
      },
    ],
    specifications: [
      { label: "Printing Technology", value: "8-Color Digital Pigment & Multi-Unit Heidelberg Offset" },
      { label: "Max Seamless Width", value: "60 inches (152 cm) continuous length" },
      { label: "Paper Weight Range", value: "130 gsm to 350 gsm" },
      { label: "Turnaround Time", value: "Same-day express or 2 business days standard" },
      { label: "Minimum Order Quantity", value: "1 unit (digital) / 100 units (offset)" },
      { label: "Color Profiles", value: "CMYK FOGRA39, Adobe RGB, Pantone Solid Coated" },
    ],
    materials: ["Silk Art Paper", "Heavy Matte Stock", "Premium Gloss", "Cotton Rag", "Polypropylene Vinyl"],
    finishes: ["Matte Lamination", "Gloss Lamination", "Soft-Touch", "Spot UV", "Foam-Board Mounting"],
    turnaroundTime: "Same-Day to 2 Business Days",
    minOrder: "1 Print (Digital) / 100 (Offset)",
    relatedSlugs: ["flyers-leaflets", "brochures-catalogues", "business-cards-stationery"],
  },
  {
    id: "flyers",
    slug: "flyers-leaflets",
    aliasSlugs: ["flyers"],
    number: "02",
    title: "Flyers & Leaflets",
    shortDescription:
      "Cost-effective, high-volume flyers and leaflets with rich colour reproduction, precision die-cuts, and crisp folds.",
    fullDescription:
      "Precision-printed flyers, pamphlets, and leaflets crafted for maximum marketing impact. Whether for corporate hand-outs, event promotions, or retail door drops, our Heidelberg speedmasters deliver consistent colour fidelity across tens of thousands of sheets.",
    image: serviceFlyersImg,
    gallery: [
      { url: serviceFlyersImg, caption: "250gsm silk leaflets with clean die-cut geometry" },
      { url: servicePostersImg, caption: "Single-sided promotional handout prints" },
      { url: serviceBrochuresImg, caption: "Folded informational campaign flyers" },
    ],
    options: [
      {
        title: "Standard Formats & Cuts",
        description: "Versatile sizes suited for handouts, packaging inserts, or direct mail.",
        items: ["A6 Pocket Format (105 × 148 mm)", "A5 Standard (148 × 210 mm)", "DL Envelope Size (99 × 210 mm)", "A4 Sheet (210 × 297 mm)", "Bespoke Contour Die-Cut"],
      },
      {
        title: "Paper Weights & Textures",
        description: "From lightweight distribution flyers to sturdy premium cards.",
        items: ["100gsm Uncoated Bond", "130gsm Silk Everyday", "170gsm Heavyweight Gloss", "250gsm Premium Silk Card", "300gsm Recycled Eco Stock"],
      },
      {
        title: "Folding Configurations",
        description: "Engineered folds that guide the reader through your narrative.",
        items: ["Flat / Unfolded", "Single Half-Fold (4 pp)", "Tri-Fold / C-Fold (6 pp)", "Z-Fold / Accordion (6 pp)", "Gate-Fold (6 pp)"],
      },
    ],
    specifications: [
      { label: "Printing Technology", value: "High-Speed Commercial Offset & Production Digital" },
      { label: "Color Fidelity", value: "Full Color 4/4 Double-Sided or 4/0 Single-Sided" },
      { label: "Paper Weights", value: "100 gsm to 350 gsm" },
      { label: "Turnaround Time", value: "24 to 48 Hours" },
      { label: "Minimum Order Quantity", value: "250 units (Offset) / 50 units (Digital)" },
      { label: "Finishing Available", value: "Die-cutting, Perforation, Creasing, Bundle Banding" },
    ],
    materials: ["100gsm Bond", "130gsm Silk", "170gsm Gloss", "250gsm Card", "Recycled Kraft"],
    finishes: ["Aqueous Coating", "Matte Lamination", "Gloss Varnish", "Score & Fold", "Perforation"],
    turnaroundTime: "24–48 Hours",
    minOrder: "50 Units",
    relatedSlugs: ["poster-printing", "brochures-catalogues", "packaging-materials"],
  },
  {
    id: "books",
    slug: "book-printing-publishing",
    aliasSlugs: ["books", "book-printing"],
    number: "03",
    title: "Book Printing & Publishing",
    shortDescription:
      "End-to-end book production — casebound hardcovers, sewn volumes, and paperbacks crafted with master binding.",
    fullDescription:
      "Complete book manufacturing and publishing support for authors, universities, corporate archives, and publishing houses. From small-batch poetry editions to full-scale hardcover catalogue runs, our binding division delivers exquisite foil-stamped spines, tight headbands, and archival durability.",
    image: serviceBooksImg,
    gallery: [
      { url: serviceBooksImg, caption: "Hardcover casebound book with smyth-sewn binding and gold foil spine" },
      { url: printShowcaseImg, caption: "Comprehensive publication suite and hardbound editorial volumes" },
      { url: serviceBrochuresImg, caption: "Open interior layout showing crisp typography and image plates" },
    ],
    options: [
      {
        title: "Binding Craftsmanship",
        description: "Choose the exact mechanical binding appropriate for page count and longevity.",
        items: ["Casebound Hardcover (Linen cloth or printed paper)", "Smyth-Sewn Layflat Binding", "PUR Perfect Binding (Softcover)", "Saddle-Stitch (Booklets up to 64 pp)", "Twin-Loop Wire-O Binding"],
      },
      {
        title: "Interior Text Paper Stocks",
        description: "High opacity and tactile readability for long-form reading.",
        items: ["70gsm Natural Shade Cream Book Paper", "80gsm Alabaster Woodfree Offset", "100gsm Smooth Super-White Bond", "130gsm Coated Art Silk (Color plates)"],
      },
      {
        title: "Deluxe Cover Embellishments",
        description: "Artisanal details that command admiration on bookshelves.",
        items: ["Hot Stamping Metallic Gold / Silver Foil", "Blind Debossing & Letterpress Impression", "Textured Bookcloth & Woven Linen Casings", "Silk Bookmark Ribbons & Head/Tail Bands", "Custom Printed Dust Jackets with French Folds"],
      },
    ],
    specifications: [
      { label: "Binding Formats", value: "Casebound Hardcover, PUR Softcover, Smyth-Sewn" },
      { label: "Page Count Extent", value: "16 pages up to 900+ pages" },
      { label: "Standard Sizes", value: "Crown Octavo, Demy Octavo, Royal Octavo, A4, A5, Custom" },
      { label: "Color Options", value: "B&W Mono Interior, 2-Color, or Vibrant 4-Color Process" },
      { label: "ISBN & Barcoding", value: "Full registration guidance and barcode mastering" },
      { label: "Proofing", value: "Bound physical dummy copy prior to full manufacturing" },
    ],
    materials: ["Natural Book Paper", "Art Silk", "Dutch Bookcloth", "Greyboard (2.5mm–3.5mm)", "Velvet Casing"],
    finishes: ["Gold Foil Stamping", "Blind Embossing", "Matte Lamination", "Ribbon Marker", "Dust Jacket"],
    turnaroundTime: "5–10 Business Days",
    minOrder: "25 Copies (Digital) / 250 (Offset)",
    relatedSlugs: ["brochures-catalogues", "business-cards-stationery", "packaging-materials"],
  },
  {
    id: "packaging",
    slug: "packaging-materials",
    aliasSlugs: ["packaging"],
    number: "04",
    title: "Packaging Materials",
    shortDescription:
      "Custom folding cartons, luxury rigid presentation boxes, corrugated mailers, and food-safe retail packaging.",
    fullDescription:
      "Bespoke packaging solutions engineered for protection, shelf presence, and memorable unboxing moments. We produce custom rigid gift boxes, retail folding cartons, corrugated dispatch shippers, product sleeves, and certified food-safe packaging with precision die-cutting and structural integrity.",
    image: servicePackagingImg,
    gallery: [
      { url: servicePackagingImg, caption: "Rigid luxury packaging box with gold lid trim and brand crest" },
      { url: printShowcaseImg, caption: "Production packaging cartons and corporate presentation containers" },
      { url: serviceStationeryImg, caption: "Precision embossed retail product sleeves" },
    ],
    options: [
      {
        title: "Structural Packaging Styles",
        description: "Engineered templates tested for durability, shipping, and aesthetic appeal.",
        items: ["Rigid Setup Lid-and-Base Boxes", "Tuck-End & Auto-Lock Folding Cartons", "Heavy-Duty Corrugated E/B-Flute Mailers", "Pillow Boxes & Pillow Sleeves", "Food-Grade & FSSAI-Compliant Cartons"],
      },
      {
        title: "Substrates & Calipers",
        description: "Premium paperboards chosen for rigidity, scoring, and printability.",
        items: ["300–450gsm Virgin White SBS Board", "Duplex Greyback & Whiteback Board", "Rigid Kappa Board (1.5mm – 3.0mm)", "Kraft Eco-Friendly Corrugated Board", "Metallic Mirrored Foil Board"],
      },
      {
        title: "Surface Enhancements",
        description: "Distinctive tactile and visual touches that convey luxury.",
        items: ["Precision Multi-Level Embossing", "Precision Hot Foil Stamping", "Spot Gloss UV over Velvet Matte", "Custom Shaped Clear Window Patching", "Magnetic Concealed Closure Flaps"],
      },
    ],
    specifications: [
      { label: "Structural CAD Design", value: "Custom dieline engineering & physical unprinted prototypes" },
      { label: "Ink Formulations", value: "Low-migration, vegetable-based, food-contact safe" },
      { label: "Finishing Capabilities", value: "Die-cut, creasing, automated gluing, foil stamping" },
      { label: "Board Calipers", value: "280 gsm up to 1800 gsm (Kappa rigid core)" },
      { label: "Minimum Order", value: "250 units (Custom Cartons) / 500 units (Rigid Boxes)" },
      { label: "Quality Testing", value: "Drop resistance, rub resistance, score bend stiffness" },
    ],
    materials: ["SBS Bleached Board", "Kappa Board", "E-Flute Corrugated", "Kraft Paper", "Food-Safe Board"],
    finishes: ["Soft-Touch Lamination", "Hot Foil Stamping", "Spot UV", "Embossing", "Window Patching"],
    turnaroundTime: "5–8 Business Days",
    minOrder: "250 Units",
    relatedSlugs: ["business-cards-stationery", "poster-printing", "flyers-leaflets"],
  },
  {
    id: "stationery",
    slug: "business-cards-stationery",
    aliasSlugs: ["stationery", "business-cards"],
    number: "05",
    title: "Business Cards & Stationery",
    shortDescription:
      "Ultra-thick cotton cards, gilded edges, letterpress debossing, and refined corporate brand identity suites.",
    fullDescription:
      "Make an indelible first impression with executive business cards and corporate stationery that convey gravitas and distinction. We craft bespoke cards on heavyweight stocks with painted edges, foil stamping, tactile debossing, paired with watermarked letterheads and presentation folders.",
    image: serviceStationeryImg,
    gallery: [
      { url: serviceStationeryImg, caption: "Thick cotton business cards with gilded foil bevel edge" },
      { url: printShowcaseImg, caption: "Complete corporate identity suite with letterheads and folders" },
      { url: serviceBooksImg, caption: "Letterpress blind debossed stationery sample" },
    ],
    options: [
      {
        title: "Distinctive Card Stocks",
        description: "Tactile stocks engineered to feel substantial and memorable in hand.",
        items: ["350gsm Premium Silk Board", "400gsm Pure Cotton Rag (Letterpress)", "600gsm Triplex Multi-Layer Core (Color seam)", "Italian Textured Laid & Linen Stocks", "100% Recycled Kraft & Seed Paper"],
      },
      {
        title: "Artisanal Craftsmanship",
        description: "Fine printing techniques executed on vintage and modern equipment.",
        items: ["Beveled Gilded Edges (Gold, Silver, Black, Rose)", "Deep Letterpress Impression / Blind Deboss", "Precision Multi-Level Relief Embossing", "Gold, Copper & Holographic Hot Foil Stamping", "Selective Spot Gloss UV over Velvet Matte"],
      },
      {
        title: "Executive Stationery Suites",
        description: "Harmonized corporate communication collateral.",
        items: ["100–120gsm Watermarked Executive Letterheads", "Matching Peel-and-Seal Business Envelopes", "Heavyweight Presentation Folders with Card Slots", "Branded Desk Notepads & Carbonless Receipt Books", "Compliment Slips & Custom Certificate Sleeves"],
      },
    ],
    specifications: [
      { label: "Standard Sizes", value: "85 × 55 mm, 90 × 50 mm, Square 65 × 65 mm, Custom" },
      { label: "Color Accuracy", value: "100% Pantone Matching System (PMS) spot ink fidelity" },
      { label: "Card Thickness", value: "Up to 38 pt / 700 gsm ultra-heavyweight sandwich" },
      { label: "Turnaround Time", value: "2 to 4 business days" },
      { label: "Minimum Order Quantity", value: "100 Cards / 250 Letterhead sheets" },
      { label: "Packaging", value: "Supplied in premium rigid acrylic or magnetic presentation boxes" },
    ],
    materials: ["Cotton Rag", "Triplex Sandwich Board", "Linen Paper", "350gsm Silk", "Recycled Stock"],
    finishes: ["Gilded Edge Foil", "Letterpress Deboss", "Spot Gloss UV", "Hot Foil", "Velvet Lamination"],
    turnaroundTime: "2–4 Business Days",
    minOrder: "100 Cards",
    relatedSlugs: ["brochures-catalogues", "packaging-materials", "book-printing-publishing"],
  },
  {
    id: "brochures",
    slug: "brochures-catalogues",
    aliasSlugs: ["brochures", "catalogues"],
    number: "06",
    title: "Brochures & Catalogues",
    shortDescription:
      "Multi-page corporate brochures, lookbooks, and high-density retail catalogues with flawless color and binding.",
    fullDescription:
      "Editorial marketing collateral and technical product catalogues that showcase your brand narrative and merchandise. We combine razor-sharp typography, calibrated CMYK color reproduction, and durable lay-flat binding to create brochures that clients hold onto.",
    image: serviceBrochuresImg,
    gallery: [
      { url: serviceBrochuresImg, caption: "Open editorial catalogue spread and tri-fold corporate brochure" },
      { url: printShowcaseImg, caption: "Showcase collection of multi-page brochures and booklets" },
      { url: serviceBooksImg, caption: "Square-back saddle stitched company profile booklet" },
    ],
    options: [
      {
        title: "Sizes & Orientations",
        description: "Choose an aspect ratio that complements your imagery and typography.",
        items: ["A4 Portrait & Landscape (210 × 297 mm)", "A5 Compact Magazine Size (148 × 210 mm)", "Square Formats (210 × 210 mm & 150 × 150 mm)", "US Letter (8.5 × 11 in)", "Custom Architectural Oversize Dimensions"],
      },
      {
        title: "Binding Mechanisms",
        description: "Selected to match your page count, budget, and archival purpose.",
        items: ["Saddle-Stitching with Square-Back Spine (8–64 pp)", "PUR Thermal Perfect Binding (48–400 pp)", "Double-Loop Wire-O Binding (Layflat manuals)", "Section-Sewn Softcover Binding"],
      },
      {
        title: "Paper Pairs & Coatings",
        description: "Combining substantial covers with fluid, glare-free interior pages.",
        items: ["130gsm – 170gsm Coated Silk / Matte Text Pages", "250gsm – 350gsm Heavyweight Casing Covers", "Soft-Touch Anti-Fingerprint Exterior Laminate", "Spot UV Accents on Key Headers & Cover Imagery"],
      },
    ],
    specifications: [
      { label: "Printing Technology", value: "Heidelberg 5-Color Offset with Inline Aqueous Coater" },
      { label: "Page Extents", value: "8 pages up to 300+ page catalogues" },
      { label: "Proofing Standard", value: "Contract GMG Digital Color Proof matching ISO 12647-2" },
      { label: "Color Profiles", value: "CMYK FOGRA39 / ISO Coated v2" },
      { label: "Turnaround Time", value: "3 to 6 Business Days" },
      { label: "Minimum Order Quantity", value: "100 Units" },
    ],
    materials: ["Coated Art Silk", "High-Bulk Matte", "350gsm Cover Card", "Translucent Vellum Inserts"],
    finishes: ["Soft-Touch Lamination", "Spot UV", "Square Spine Creasing", "Foil Stamping", "Shrink-Wrap"],
    turnaroundTime: "3–6 Business Days",
    minOrder: "100 Units",
    relatedSlugs: ["book-printing-publishing", "flyers-leaflets", "poster-printing"],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  const normalized = slug.toLowerCase().trim();
  return servicesData.find(
    (s) =>
      s.slug === normalized ||
      s.id === normalized ||
      (s.aliasSlugs && s.aliasSlugs.includes(normalized))
  );
}
