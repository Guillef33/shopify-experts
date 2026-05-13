export const casesData = {
  "310-nutrition": {
    title: "310 Nutrition (USA)",
    subtitle: "Enterprise Shopify Plus Architecture: Scaling a $40M+ Health & Wellness Giant.",
    techStack: ['React.js', 'Vite.js', 'Tailwind CSS', 'NetSuite ERP', 'Rebuy API'],
    stats: [{ value: '-40%', label: 'Page Load Times' }, { value: '+22%', label: 'AOV Increase' }, { value: '85+', label: 'Lighthouse' }],
    problem: "With annual revenue exceeding $40M, 310 Nutrition faced severe operational bottlenecks due to 'app-bloat' and legacy liquid code. The reliance on GemPages degraded mobile Core Web Vitals and hampered conversion rates.",
    solutions: [
      { header: "Custom Framework Transition", body: "Total replacement of GemPages with high-performance React.js and Vite.js components, reducing mobile bounce by 18%." },
      { header: "NetSuite ERP Synchronization", body: "Managed mission-critical data flow between Shopify Plus and NetSuite for 100% integrity in high-volume transactions." }
    ],
    postOperation: "Modular architecture capable of handling massive traffic peaks without performance degradation."
  },
  "somos-reyes": {
    title: "Somos Reyes (LATAM)",
    subtitle: "Omnichannel Digital Transformation: Automating 15,000+ SKU Marketplace.",
    techStack: ['Python', 'Odoo ERP', 'Klevu API', 'Klaviyo', 'BoostCommerce'],
    stats: [{ value: '-40%', label: 'Manual Workload' }, { value: '15,000+', label: 'SKUs Sync' }, { value: '50+', label: 'Countries' }],
    problem: "Managing a complex catalog of 15,000+ SKUs created a massive data silo. The brand suffered from manual inventory lags and lack of synchronization between Shopify and Odoo ERP.",
    solutions: [
      { header: "Python Backend Orchestration", body: "Developed proprietary Python scripts to automate inventory synchronization and custom PDP backend logic." },
      { header: "Search Intelligence", body: "Integrated Klevu Smart Search for millisecond results across a massive 15K SKU catalog." }
    ],
    postOperation: "New infrastructure enables rapid regional expansion without increasing operational headcount."
  },
  "engineering": {
    title: "System Diagnostics",
    subtitle: "Technical Infrastructure Audit for Enterprise Healthcare (+5,000 Employees).",
    techStack: ['Node.js', 'HubSpot API', 'Redis', 'PostgreSQL'],
    stats: [{ value: '99.9%', label: 'Uptime' }, { value: '12ms', label: 'Edge Latency' }, { value: '5k+', label: 'Users' }],
    problem: "A major healthcare provider needed to centralize patient logs and CX data while maintaining absolute data integrity across complex integrations.",
    solutions: [
      { header: "API & Webhook Analysis", body: "Executed comprehensive tuning to ensure high availability across enterprise-level system integrations." },
      { header: "Multi-Platform Layer", body: "Built a robust integration layer to centralize patient requests and medical service logs for a 360-degree customer view." }
    ],
    postOperation: "Centralized architecture adheres to strict regulatory standards while optimizing operational efficiency."
  },
  "global-edge": {
    title: "Global Edge Migration",
    heroTitle: "Extreme",
    heroSubtitle: "Scalability",
    techStack: ['Hydrogen v2', 'Remix.js', 'Oxygen', 'GraphQL'],
    stats: [{ value: '0.8s', label: 'Global TTFB' }, { value: '99/100', label: 'Mobile Vitals' }, { value: 'Award', label: '2019 Winner' }],
    problem: "High-traffic storefronts required a decoupling from monolithic Liquid constraints to an Edge-First Hydrogen architecture for global scale.",
    solutions: [
      { header: "Hydrogen v2.0 Architecture", body: "Moved storefront logic to Shopify Oxygen, using edge workers to pre-fetch data before user interactions." },
      { header: "Predictive Cart Loading", body: "Used React Server Components (RSC) to handle cart state across international domains without re-renders." }
    ],
    postOperation: "Globally distributed architecture with neutralized latency for 144+ countries."
  }
};