export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Platform', path: '/platform' },
  { label: 'Capabilities', path: '/capabilities' },
  { label: 'Impact', path: '/impact' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
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
    title: 'Farmer and Farm Records',
    description:
      'Create a reliable system of record for growers, plots, relationships, and operating context across the season.',
  },
  {
    title: 'Agreements, Inputs, and Harvest',
    description:
      'Track linked operational milestones from agreement setup through input distribution and harvest capture.',
  },
  {
    title: 'Field Visits and Alerts',
    description:
      'Record field observations, route issues to the right teams, and follow actions through completion.',
  },
  {
    title: 'Role-Based Reporting',
    description:
      'Support managers, coordinators, and operations leads with views tailored to oversight and execution needs.',
  },
  {
    title: 'Mobile-Assisted Operations',
    description:
      'Enable field workflows that support distributed execution where teams need timely data capture and follow-up.',
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