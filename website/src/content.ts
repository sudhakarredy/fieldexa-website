export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Platform', path: '/platform' },
  { label: 'Impact', path: '/impact' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const businessProblems = [
  {
    title: 'Yield Unpredictability',
    problem: 'Export houses and farmers lack visibility into expected harvests, leading to supply chain bottlenecks and missed buyer commitments.',
    solution: 'AI-powered harvest forecasting predicts yield 7-14 days in advance, enabling smart procurement and transport planning.',
    impact: '+40% supply chain efficiency',
    icon: '📊'
  },
  {
    title: 'Fragmented Field Operations',
    problem: 'Farm visits, input tracking, and harvest data are scattered across spreadsheets, calls, and paper records—creating bottlenecks and errors.',
    solution: 'Single platform connects farmer onboarding, agreements, inputs, harvests, and field visits in one operational record.',
    impact: '60% faster issue resolution',
    icon: '🔗'
  },
  {
    title: 'Farmer Information Asymmetry',
    problem: 'Farmers lack real-time data about their crops, pricing, and obligations—limiting their ability to plan and negotiate fairly.',
    solution: 'Real-time mobile app and SMS notifications give farmers visibility into their own data, alerts, and performance.',
    impact: 'Farmers 3x more engaged',
    icon: '📱'
  },
  {
    title: 'Compliance & Traceability Burden',
    problem: 'Meeting EUDR, sustainability, and buyer requirements requires manual record collection and validation—expensive and error-prone.',
    solution: 'Traceability data is automatically captured and audit-ready throughout operations.',
    impact: '80% audit prep time reduction',
    icon: '✅'
  },
  {
    title: 'Unsustainable Scale',
    problem: 'Managing 100s of farmers across regions with manual coordination is impossible—growth stalls at team capacity.',
    solution: 'Geo-scoped dashboards and role-based workflows scale operations across clusters and villages without linearly growing teams.',
    impact: '5-10x scaling potential',
    icon: '📈'
  },
  {
    title: 'Revenue Leakage',
    problem: 'Without quality/grade visibility upfront, export houses settle for lower prices or lose buyer relationships over unexpected quality mismatches.',
    solution: 'Grade-mix forecasting and quality predictions enable buyer alignment and premium pricing for consistent quality.',
    impact: '15-25% revenue uplift',
    icon: '💰'
  },
]

export const corePillars = [
  {
    title: 'Predictive Operations Intelligence',
    description:
      'AI-powered harvest forecasting, yield prediction, and grade-mix planning for proactive resource allocation and buyer alignment.',
  },
  {
    title: 'Traceability and Compliance Ready',
    description:
      'Enterprise-grade governance, RBAC, sensitive data controls, and audit trails embedded across all operations.',
  },
  {
    title: 'Distributed Team Coordination',
    description:
      'Geo-scoped planning by State, Area, Cluster, and Village with role-aware insights and multi-language support.',
  },
]

export const advancedCapabilities = [
  {
    title: 'AI Operations Copilot (Hola)',
    description:
      'Natural-language assistant for management queries across alerts, crop distributions, and operational summaries with tenant and geo scope controls.',
    category: 'Intelligence',
    relatedScreens: ['Home']
  },
  {
    title: 'Predictive Harvest Intelligence',
    description:
      'Farm-level harvest date and yield forecasting using multi-signal models (weather/GDD, crop parameters, field context) with confidence scoring.',
    category: 'Forecasting',
    relatedScreens: ['Harvest']
  },
  {
    title: 'Grade-Mix Forecasting',
    description:
      'Forward-looking grade distribution estimates per farm to support procurement, quality planning, and buyer alignment.',
    category: 'Forecasting',
    relatedScreens: ['Harvest']
  },
  {
    title: 'Predicted vs Actual Harvest Tracking',
    description:
      'Built-in visibility of predicted yield versus already harvested quantity for faster variance detection and operational correction.',
    category: 'Analytics',
    relatedScreens: ['Harvest']
  },
  {
    title: 'Weekly Harvest Prediction for Transport Planning',
    description:
      'Rolling 7-day dispatch view that converts farm predictions into actionable logistics quantities for supply chain efficiency.',
    category: 'Planning',
    relatedScreens: ['Harvest']
  },
  {
    title: 'Configurable Week Logic Per Client',
    description:
      'Supports Calendar Week (Mon-Sun) and Work Week (Sat-Fri) at tenant level to match diverse operating models.',
    category: 'Configuration',
    relatedScreens: []
  },
  {
    title: 'Crop-Wise Distribution Engine',
    description:
      'Allocates expected harvest by crop across the upcoming week using configurable distribution curves for practical load planning.',
    category: 'Planning',
    relatedScreens: ['Harvest']
  },
  {
    title: 'Geo-Scoped Planning and Analytics',
    description:
      'Filter and plan by State, Area, Cluster, and Village for decentralized operations and regional control towers.',
    category: 'Analytics',
    relatedScreens: ['Farmers', 'Farms', 'FieldVisit']
  },
  {
    title: 'Executive Dashboard with Visual Planning Widgets',
    description:
      'At-a-glance KPIs and visual forecast charts designed for daily decision cadence and real-time operational control.',
    category: 'Analytics',
    relatedScreens: ['Home']
  },
  {
    title: 'Large-Scale Report Performance',
    description:
      'Server-side pagination and export-ready reports designed to remain responsive as farm count grows into thousands.',
    category: 'Infrastructure',
    relatedScreens: ['Farmers']
  },
  {
    title: 'Management Alerting and Prioritization',
    description:
      'Active alert snapshots, severity split, and issue clustering to drive action boards and escalation workflows.',
    category: 'Operations',
    relatedScreens: ['Alerts']
  },
  {
    title: 'Traceability-Ready Reporting Suite',
    description:
      'Operational traceability modules for manual review, manifest movement, and reconciliation workflows aligned with regulatory requirements.',
    category: 'Compliance',
    relatedScreens: ['Farmers', 'Agreements']
  },
  {
    title: 'Fuzzy Duplicate Detection',
    description:
      'Intelligent duplicate farmer prevention using phone, name, and village fuzzy matching with automated alerts to finance teams.',
    category: 'Data Quality',
    relatedScreens: ['Farmers']
  },
  {
    title: 'Multilingual Communication Framework',
    description:
      'Template-driven outbound messaging for inputs, harvests, and critical alerts with language-aware delivery flows.',
    category: 'Operations',
    relatedScreens: ['Alerts', 'Harvest']
  },
  {
    title: 'Super Admin Domain Controls',
    description:
      'Tenant-level policy and model behavior settings (prediction, alerts, messaging, governance) from centralized admin controls.',
    category: 'Administration',
    relatedScreens: []
  },
]

export const solutionTracks = [
  {
    title: 'Contract Farming Operations',
    description:
      'Coordinate farmer onboarding, farm records, agreements, input activity, harvest updates, and field actions through one operating system for distributed teams.',
  },
  {
    title: 'Traceability Programs',
    description:
      'Maintain connected operational records that support supply-chain accountability, audit preparation, and compliance-oriented reporting.',
  },
  {
    title: 'Field Team Execution',
    description:
      'Give supervisors and field staff shared visibility into visit follow-up, issue escalation, and action tracking across active geographies.',
  },
]

export const platformModules = [
  {
    title: 'Farmer Identity Control Plane',
    description:
      'A single farmer master record ties KYC references, bank metadata, communication readiness, and all operational transactions back to one controlled identity.',
  },
  {
    title: 'Farm Polygons and EUDR Readiness',
    description:
      'PostGIS-backed farm geometry, acreage, and location metadata provide the geospatial foundation for deforestation compliance, segmentation, and traceability.',
  },
  {
    title: 'Agreement and Seasonal Contract Layer',
    description:
      'Per-farm seasonal agreements connect crop, grade-rate, sowing date, and commercial terms so every downstream harvest and input record has contractual context.',
  },
  {
    title: 'Operational Harvest and Input Ledger',
    description:
      'Harvests, inputs, manifests, and field activities are recorded as linked operational events, giving supervisors a live ledger instead of disconnected spreadsheets.',
  },
  {
    title: 'Delivery Stack and Sync Foundation',
    description:
      'React 18 web operations, FastAPI services, PostgreSQL + PostGIS, and an offline-first mobile sync queue create a resilient cloud-native operating stack.',
  },
  {
    title: 'Enterprise Security and Tenant Isolation',
    description:
      'Row-level security, RBAC, secure token lifecycles, and API-governed access boundaries keep multi-client deployments enterprise-ready from day one.',
  },
]

export const outcomesAndImpact = [
  {
    title: 'Higher Revenue for Export Houses',
    description:
      'Predictive planning, grade-mix forecasting, and buyer alignment unlock 15-25% revenue uplift through premium pricing, reduced waste, and supply chain efficiency.',
    metric: '+15-25% Revenue',
    focus: 'Export Houses'
  },
  {
    title: 'Farmer Empowerment & Fair Outcomes',
    description:
      'Real-time data, transparent pricing, and direct communication give farmers agency over their livelihoods, leading to better decisions and fairer terms.',
    metric: '3x More Engaged',
    focus: 'Farmers'
  },
  {
    title: 'Sustainability & Compliance',
    description:
      'Automated traceability, EUDR-ready records, and environmental tracking make sustainability a business advantage, not a compliance burden.',
    metric: '80% Audit Prep Reduction',
    focus: 'Planet'
  },
  {
    title: 'Scalable Growth Without Chaos',
    description:
      'Geo-scoped operations, mobile-first workflows, and AI-driven alerts let export houses manage 5-10x more farms with the same team structure.',
    metric: '5-10x Scale Potential',
    focus: 'Growth'
  },
]

export const impactStories = [
  {
    title: 'Clearer Operational Visibility',
    description:
      'Bring field activity, follow-up actions, and harvest progress into one view so management teams can respond faster and with more context.',
  },
  {
    title: 'Stronger Record Readiness',
    description:
      'Organize the day-to-day records that matter when teams need traceability support, program reporting, or operational review.',
  },
  {
    title: 'Better Coordination Across Teams',
    description:
      'Reduce handoff friction between field teams, coordinators, and leadership by keeping workflows and action ownership visible.',
  },
  {
    title: 'Scalable Seasonal Execution',
    description:
      'Use a common workflow foundation that can support more growers, more fields, and more operating activity over time.',
  },
]

export const caseStudyStories = [
  {
    title: 'Cluster Alert Response Workflow',
    summary:
      'A field issue is captured once, routed to the right operating team, and tracked through coordinated follow-up so managers can see what is open, blocked, or complete.',
  },
  {
    title: 'Traceability Record Preparation',
    summary:
      'Operational teams maintain connected records across farmer, farm, input, and harvest activity to prepare for downstream traceability requirements.',
  },
  {
    title: 'Input to Harvest Visibility',
    summary:
      'Teams move from fragmented updates to a clearer operational timeline linking agreement, input, field activity, and harvest milestones.',
  },
]

export const legalLinks = [
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms of Use', path: '/terms' },
  { label: 'Cookie Policy', path: '/cookie-policy' },
  { label: 'Data Processing Addendum', path: '/dpa' },
]