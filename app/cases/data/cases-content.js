export const casesData = {
  "310-nutrition": {
    title: "310 Nutrition",
    subtitle: "Enterprise Shopify Plus Performance & Data Engineering.",
    techStack: ['React.js', 'Vite.js', 'NetSuite ERP', 'Black Crow AI', 'Elevar', 'Rebuy AI', 'Klaviyo'],
    stats: [
      { value: '92/100', label: 'Lighthouse Performance' },
      { value: '-40%', label: 'TTFB Reduction' },
      { value: '+22%', label: 'AOV Increase (MoM)' }
    ],
    problem: "With annual revenue exceeding $40M, 310 Nutrition faced severe operational bottlenecks due to 'app-bloat' (GemPages) and legacy Liquid code. The unoptimized DOM structure was causing massive friction in mobile conversions and data loss in marketing attribution.",
    solutions: [
      { header: "Headless-Driven Frontend Refactor", body: "Total replacement of Shogun/GemPages by building high-performance Product Detail Pages (PDPs) using React.js and Vite.js. We eliminated 60% of unused JavaScript, achieving sub-second page loads." },
      { header: "Predictive AI & Personalization Stack", body: "Deep integration of Black Crow AI for real-time purchase predictions and Rebuy Smart Cart for dynamic upselling." },
      { header: "Precision Tracking & Data Observability", body: "Implemented Elevar for server-side tracking and GA4/GTM orchestration, bypassing browser-side cookie restrictions." },
      { header: "ERP & Infrastructure Governance", body: "Engineered custom middleware to ensure inventory and financial data integrity between Shopify Plus and NetSuite ERP." }
    ],
    techDetailed: [
      { name: "Black Crow AI", function: "Predictive Analytics", benefit: "Real-time purchase intent scoring." },
      { name: "Elevar", function: "Server-Side Tracking", benefit: "Lossless conversion data." },
      { name: "Rebuy AI", function: "Smart Merchandising", benefit: "Dynamic AOV optimization." }
    ]
  },
  "somos-reyes": {
    title: "Somos Reyes",
    subtitle: "Logistics Orchestration & Omnichannel Intelligence for 15,000+ SKUs.",
    techStack: ['Python', 'Odoo ERP', 'YUJU Marketplace', 'FedEx API', 'Intelligems', 'Shopify Plus'],
    stats: [
      { value: '15k+', label: 'SKUs Orchestrated' },
      { value: 'Real-time', label: 'FedEx Label Gen' },
      { value: '+30%', label: 'Shipping Margin' }
    ],
    problem: "Inventory fragmentation across Amazon and MercadoLibre via YUJU created massive data silos. Shipping costs were eating margins due to lack of a weight-to-price dropshipping policy.",
    solutions: [
      { header: "Proprietary Dropshipping Algorithm", body: "Engineered a custom Python script to establish a complex weight-to-price relationship. This algorithm automatically calculates the most profitable shipping tier." },
      { header: "YUJU & Odoo Multi-Channel Sync", body: "Architected the data pipeline between YUJU (Marketplaces) and Odoo (ERP). Every sale triggers an immediate inventory adjustment in Shopify." },
      { header: "FedEx API Automation", body: "Integrated FedEx Web Services natively to automate the generation of shipping labels, reducing fulfillment time by 60%." },
      { header: "Intelligems Profitability Engine", body: "Implemented Intelligems for advanced A/B testing on shipping rates and product pricing to find the sweet spot of profitability." }
    ],
    infraAudit: [
      { name: "YUJU", function: "Marketplace Hub", benefit: "Sync Amazon / ML / Walmart." },
      { name: "Odoo ERP", function: "Source of Truth", benefit: "Full inventory & fiscal control." },
      { name: "FedEx API", function: "Shipping Automation", benefit: "Instant label generation." }
    ]
  },
  "engineering": {
    title: "Extreme Scalability",
    subtitle: "Decoupling a $100M+ ARR storefront from monolithic Liquid constraints to an Edge-First Hydrogen architecture.",
    techStack: ["Hydrogen v2.0", "Oxygen", "Remix.js", "GraphQL", "RSC", "Edge Cache"],
    stats: [
      { value: '0.8s', label: 'Avg Global TTFB' },
      { value: '99/100', label: 'Mobile Vitals' },
      { value: '+41%', label: 'Revenue Growth' }
    ],
    problem: "High-traffic drops during SKU releases were costing millions. Every 100ms of lag resulted in a 7% conversion decrease. The store needed to transcend standard Liquid limitations for global performance.",
    solutions: [
      { header: "Hydrogen v2 Architecture", body: "Storefront logic was completely moved to Shopify Oxygen, using workers that pre-fetch data before the user even clicks." },
      { header: "Dynamic Pricing Engine", body: "Computing complex currency and localized tax logic at the Edge, ensuring zero-lag PDP rendering across 144 countries." },
      { header: "Predictive Cart Loading", body: "React Server Components (RSC) to handle cart state across international domains without re-renders." }
    ],
    logs: ["Initializing Edge-Workers...", "Europe_West: OK [18ms]", "Asia_Pacific: OK [42ms]", "USA_East: OK [12ms]"]
  },
  "global-edge-migration": {
    title: "Global Edge-First",
    subtitle: "Decoupling a global luxury storefront from legacy Liquid to a unified Hydrogen v2 architecture.",
    techStack: ["Hydrogen v2", "Remix.js", "Oxygen Runtime", "GraphQL API", "Edge Cache"],
    stats: [
      { value: '98/100', label: 'Lighthouse Performance' },
      { value: 'ACTIVE', label: 'Edge Orchestration' },
      { value: '+64%', label: 'Checkout Conversion' }
    ],
    problem: "The previous infrastructure was a 'monolithic mess'. Third-party apps were injecting unoptimized JS, causing race conditions and UI flickering. Average LCP was 4.8s on Mobile.",
    solutions: [
      { header: "Decoupling & Remix foundation", body: "Extracting the storefront from Liquid and implementing a React-based Remix foundation." },
      { header: "API Orchestration", body: "Unifying Shopify Storefront API with ERP and CMS data via a custom GraphQL layer." },
      { header: "Zero-CLS Refactoring", body: "Ensuring visual stability by implementing explicit aspect ratios and server-side layout calculations." }
    ],
    audit: ["Average LCP: 4.8s (Mobile)", "JavaScript Execution: 2.4s", "Zero Edge Caching"]
  }
};