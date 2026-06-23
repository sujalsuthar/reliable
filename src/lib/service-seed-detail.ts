import type { Service } from '@/lib/types'

type ServiceDetailExtras = Pick<
  Service,
  | 'category'
  | 'overviewDescription'
  | 'overviewBulletPoints'
  | 'subServices'
  | 'contentTitle'
  | 'benefitsTitle'
  | 'benefits'
  | 'processTitle'
  | 'processSteps'
  | 'faqsTitle'
  | 'faqs'
  | 'keyBenefitsTitle'
  | 'keyBenefits'
  | 'ctaTitle'
  | 'ctaDescription'
  | 'ctaButtonText'
  | 'ctaButtonLink'
>

export const SERVICE_DETAIL_BY_SLUG: Record<string, ServiceDetailExtras> = {
  'front-end-engineering-feed': {
    category: 'Engineering Services',
    overviewDescription:
      'By defining scope, technical basis, and preliminary design early, FEED provides the foundation for accurate budgeting, procurement, and execution of industrial plant projects.',
    overviewBulletPoints: [
      'Feasibility and concept development',
      'Process and multidisciplinary design basis',
      'Cost estimation and risk assessment',
      'Regulatory and safety compliance planning',
    ],
    subServices: [
      'Feasibility & Concept Studies',
      'Process Engineering Design',
      'Mechanical & Piping Design',
      'Electrical & Instrumentation Design',
      'Civil & Structural Coordination',
      'HSE & Environmental Studies',
    ],
    contentTitle: 'Front-End Engineering Design (FEED)',
    benefitsTitle: 'Why Choose FEED Services',
    benefits: [
      {
        title: 'Reduce Project Risk',
        description:
          'Identify technical, commercial, and schedule risks before major capital commitments.',
      },
      {
        title: 'Accurate Cost & Schedule Basis',
        description:
          'Establish reliable estimates and execution strategies for stakeholders and financiers.',
      },
      {
        title: 'Regulatory Alignment',
        description:
          'Align designs with Saudi Building Code, environmental requirements, and client standards.',
      },
      {
        title: 'Execution Readiness',
        description:
          'Deliver documentation packages that enable smooth transition to detailed design and construction.',
      },
    ],
    processTitle: 'Our FEED Process',
    processSteps: [
      'Define project objectives, scope boundaries, and design criteria.',
      'Develop process flow diagrams, equipment lists, and layout concepts.',
      'Perform multidisciplinary engineering and preliminary design.',
      'Conduct HSE, environmental, and risk assessments.',
      'Prepare cost estimates, schedules, and procurement strategies.',
      'Deliver FEED report and basis for detailed engineering.',
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What is FEED in industrial projects?',
        answer:
          'FEED (Front-End Engineering Design) is the phase where project scope, technical basis, and preliminary engineering are defined to support investment decisions and detailed design.',
      },
      {
        question: 'When should FEED be performed?',
        answer:
          'FEED should be completed after concept selection and before detailed engineering, procurement, and construction to minimize costly changes later.',
      },
      {
        question: 'What deliverables does FEED include?',
        answer:
          'Typical deliverables include process design basis, P&IDs, layouts, equipment specifications, cost estimates, schedules, and HSE documentation.',
      },
      {
        question: 'Why choose Reliable Company for FEED?',
        answer:
          'We combine PMC and engineering expertise across desalination, oil & gas, water, and industrial sectors with proven on-time delivery.',
      },
    ],
    keyBenefitsTitle: 'Why Choose FEED with Reliable',
    keyBenefits: [
      { title: 'Multidisciplinary Teams', description: 'Integrated process, mechanical, electrical, and civil coordination.' },
      { title: 'Industrial Experience', description: 'Desalination, oil & gas, and utilities sector expertise.' },
      { title: 'Cost Certainty', description: 'Reliable estimates that support investment decisions.' },
      { title: 'Saudi Standards', description: 'Compliance with local codes and regulatory requirements.' },
    ],
    ctaTitle: 'Start Your FEED Study Today',
    ctaDescription:
      'Speak with our engineering team about defining scope and preliminary design for your next industrial project.',
    ctaButtonText: 'Request Consultation',
    ctaButtonLink: '/contact',
  },
  'project-management-consultancy': {
    category: 'Project Management',
    overviewDescription:
      'Our PMC services provide end-to-end project governance — from planning and risk management through stakeholder coordination, document control, and commercial management.',
    overviewBulletPoints: [
      'Project planning and reporting',
      'Risk assessment and mitigation',
      'Scope and change management',
      'Stakeholder and document management',
    ],
    subServices: [
      'Project Planning & Scheduling',
      'Risk & Change Management',
      'Cost Estimation & Budgeting',
      'Contracts & Procurement Management',
      'Safety & Quality Management',
      'Quantity Surveying',
    ],
    contentTitle: 'Project Management Consultancy',
    benefitsTitle: 'Why Choose Project Management Consultancy',
    benefits: [
      {
        title: 'On-Time Delivery',
        description: 'Structured controls that keep complex programs on schedule and within budget.',
      },
      {
        title: 'Risk Visibility',
        description: 'Proactive identification and mitigation of technical, commercial, and schedule risks.',
      },
      {
        title: 'Stakeholder Alignment',
        description: 'Clear communication and governance across owners, contractors, and regulators.',
      },
      {
        title: 'Commercial Control',
        description: 'Transparent cost tracking, change management, and contract administration.',
      },
    ],
    processTitle: 'Our PMC Process',
    processSteps: [
      'Establish project objectives, governance, and reporting framework.',
      'Develop integrated schedules, budgets, and risk registers.',
      'Monitor progress, quality, safety, and contractor performance.',
      'Manage changes, claims, and stakeholder communications.',
      'Coordinate procurement, submittals, and document control.',
      'Support commissioning, handover, and project closeout.',
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What does PMC include?',
        answer:
          'Project Management Consultancy covers planning, scheduling, budgeting, risk management, stakeholder coordination, document control, and commercial management throughout the project lifecycle.',
      },
      {
        question: 'Do you act as Owner\'s Engineer?',
        answer:
          'Yes. We represent client interests, monitor contractor performance, and ensure deliverables meet technical and contractual requirements.',
      },
      {
        question: 'Which sectors do you support?',
        answer:
          'We deliver PMC across desalination, oil & gas, water infrastructure, construction, and industrial utilities in Saudi Arabia.',
      },
      {
        question: 'Why choose Reliable for PMC?',
        answer:
          '100+ years combined team experience, 500+ projects delivered, and integrated engineering capabilities under one organization.',
      },
    ],
    keyBenefitsTitle: 'Why Choose Reliable PMC',
    keyBenefits: [
      { title: 'Proven Track Record', description: '500+ projects across the Kingdom and GCC.' },
      { title: 'Integrated Delivery', description: 'PMC aligned with engineering and commissioning teams.' },
      { title: 'Transparent Reporting', description: 'Clear dashboards for schedule, cost, and risk.' },
      { title: 'Local Presence', description: 'Jeddah-based team with Saudi market expertise.' },
    ],
    ctaTitle: 'Streamline Your Next Project',
    ctaDescription: 'Partner with our PMC team for planning, control, and successful project delivery.',
    ctaButtonText: 'Get Consultation',
    ctaButtonLink: '/contact',
  },
  'detailed-engineering-design-management': {
    category: 'Engineering Services',
    overviewDescription:
      'We integrate major and specialist design disciplines into one managed service with singular team leadership and controlled interfaces.',
    overviewBulletPoints: [
      'Requirements gathering and scope definition',
      'Consultant monitoring and deliverable approval',
      'Design contract procurement',
      'Constructability and regulatory review',
    ],
    subServices: [
      'Design Team Management',
      'Deliverable Review & Approval',
      'Permitting & Regulatory Support',
      'Constructability Reviews',
      'Design Workshops & Coordination',
      'Tender Package Management',
    ],
    contentTitle: 'Detailed Engineering & Design Management',
    benefitsTitle: 'Why Choose Design Management',
    benefits: [
      { title: 'Single Point of Accountability', description: 'One managed design team with clear interfaces and responsibilities.' },
      { title: 'Quality Assurance', description: 'Systematic review of consultant deliverables against scope and standards.' },
      { title: 'Schedule Control', description: 'Design progress meetings and milestone tracking to prevent delays.' },
      { title: 'Cost Efficiency', description: 'Optimized consultant procurement and change control.' },
    ],
    processTitle: 'Our Design Management Process',
    processSteps: [
      'Define design requirements, scope, and standards.',
      'Procure and onboard design consultants and specialists.',
      'Monitor design progress, interfaces, and deliverables.',
      'Conduct constructability and regulatory compliance reviews.',
      'Approve drawings and specifications for construction.',
      'Manage tender packages and support contractor selection.',
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      { question: 'What is design management?', answer: 'Design management coordinates multidisciplinary engineering teams, reviews deliverables, and ensures designs meet project requirements before construction.' },
      { question: 'Do you manage third-party consultants?', answer: 'Yes. We procure, monitor, and integrate specialist consultants under a unified management framework.' },
      { question: 'Which disciplines are covered?', answer: 'Process, mechanical, piping, electrical, instrumentation, civil, structural, and HSE coordination.' },
      { question: 'Why choose Reliable?', answer: 'We combine PMC governance with hands-on engineering experience across industrial sectors.' },
    ],
    keyBenefitsTitle: 'Why Choose Reliable Design Management',
    keyBenefits: [
      { title: 'Interface Control', description: 'Managed coordination between all design disciplines.' },
      { title: 'Regulatory Expertise', description: 'Support for permits and Saudi compliance requirements.' },
      { title: 'Constructability', description: 'Early reviews that reduce field changes and delays.' },
      { title: 'Tender Ready', description: 'Complete packages for contractor procurement.' },
    ],
    ctaTitle: 'Manage Your Design with Confidence',
    ctaDescription: 'Ensure multidisciplinary designs are coordinated, compliant, and ready for construction.',
    ctaButtonText: 'Request Consultation',
    ctaButtonLink: '/contact',
  },
  'procurement-management': {
    category: 'Engineering Services',
    overviewDescription:
      'Streamline sourcing, supplier selection, and contract negotiation with structured procurement planning and performance management.',
    overviewBulletPoints: [
      'Procurement planning and strategy',
      'Supplier sourcing and evaluation',
      'Contract negotiation and management',
      'Delivery tracking and performance control',
    ],
    subServices: [
      'Procurement Planning',
      'Supplier Sourcing & Selection',
      'Proposal Evaluation',
      'Contract Negotiation',
      'Supplier Performance Management',
      'Expediting & Logistics Coordination',
    ],
    contentTitle: 'Procurement Management',
    benefitsTitle: 'Why Choose Procurement Management',
    benefits: [
      { title: 'Cost Savings', description: 'Competitive sourcing and negotiated contracts that optimize project spend.' },
      { title: 'Supplier Quality', description: 'Rigorous evaluation ensures capable and reliable vendors.' },
      { title: 'Schedule Assurance', description: 'Expediting and tracking to align deliveries with construction needs.' },
      { title: 'Risk Reduction', description: 'Clear contracts and performance monitoring minimize disputes.' },
    ],
    processTitle: 'Our Procurement Process',
    processSteps: [
      'Develop procurement strategy and package breakdown.',
      'Source and pre-qualify suppliers.',
      'Issue RFQs/RFPs and evaluate technical-commercial proposals.',
      'Negotiate and award contracts.',
      'Monitor manufacturing, delivery, and supplier performance.',
      'Manage variations, claims, and closeout documentation.',
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      { question: 'What types of packages do you procure?', answer: 'Equipment, materials, EPC contracts, specialist services, and long-lead items for industrial and infrastructure projects.' },
      { question: 'Do you support international suppliers?', answer: 'Yes. We manage global sourcing with logistics, customs, and compliance coordination.' },
      { question: 'How do you ensure supplier quality?', answer: 'Through technical evaluation, reference checks, factory inspections, and performance KPIs.' },
      { question: 'Why Reliable for procurement?', answer: 'Integrated PMC and engineering insight ensures procurement aligns with design and schedule requirements.' },
    ],
    keyBenefitsTitle: 'Why Choose Reliable Procurement',
    keyBenefits: [
      { title: 'End-to-End Coverage', description: 'From strategy through contract closeout.' },
      { title: 'Technical Evaluation', description: 'Engineering-led assessment of supplier proposals.' },
      { title: 'Commercial Strength', description: 'Experienced negotiation and contract administration.' },
      { title: 'Schedule Integration', description: 'Procurement aligned with project milestones.' },
    ],
    ctaTitle: 'Optimize Your Procurement Strategy',
    ctaDescription: 'Reduce cost and delivery risk with structured procurement management.',
    ctaButtonText: 'Get Consultation',
    ctaButtonLink: '/contact',
  },
  'program-management': {
    category: 'Project Management',
    overviewDescription:
      'Govern multiple linked projects with consistent standards, optimized inter-dependencies, and unified stakeholder oversight.',
    overviewBulletPoints: [
      'Program governance and standards',
      'Inter-project dependency management',
      'Portfolio-level risk and reporting',
      'Strategic procurement advice',
    ],
    subServices: [
      'Program Governance',
      'Project Controls & Reporting',
      'Client Representation',
      'Commercial & Cost Management',
      'Strategic Procurement Advice',
      'Benefits Realization Tracking',
    ],
    contentTitle: 'Program Management',
    benefitsTitle: 'Why Choose Program Management',
    benefits: [
      { title: 'Consistent Governance', description: 'Unified standards and processes across all projects in the program.' },
      { title: 'Optimized Dependencies', description: 'Manage shared resources, interfaces, and critical paths between projects.' },
      { title: 'Executive Visibility', description: 'Portfolio dashboards for decision-makers and investors.' },
      { title: 'Strategic Alignment', description: 'Ensure individual projects deliver broader organizational goals.' },
    ],
    processTitle: 'Our Program Management Process',
    processSteps: [
      'Define program objectives, structure, and governance.',
      'Establish common controls, reporting, and risk frameworks.',
      'Coordinate schedules, budgets, and dependencies across projects.',
      'Provide strategic advice on procurement and resourcing.',
      'Monitor benefits realization and program performance.',
      'Support transition to operations and program closeout.',
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      { question: 'What is the difference between project and program management?', answer: 'Project management focuses on a single deliverable; program management coordinates multiple related projects toward a shared strategic outcome.' },
      { question: 'When is program management needed?', answer: 'When multiple projects share resources, dependencies, or funding and require unified governance.' },
      { question: 'What industries do you serve?', answer: 'Water infrastructure, desalination, oil & gas, and large industrial development programs.' },
      { question: 'Why Reliable?', answer: 'We bring PMC depth plus engineering integration for complex multi-project portfolios.' },
    ],
    keyBenefitsTitle: 'Why Choose Reliable Program Management',
    keyBenefits: [
      { title: 'Portfolio View', description: 'Holistic oversight across all linked projects.' },
      { title: 'Risk Aggregation', description: 'Identify and mitigate program-level risks early.' },
      { title: 'Stakeholder Management', description: 'Coordinate diverse investors, regulators, and contractors.' },
      { title: 'Value Delivery', description: 'Track benefits realization against strategic goals.' },
    ],
    ctaTitle: 'Govern Your Program with Confidence',
    ctaDescription: 'Deliver complex multi-project portfolios with unified controls and strategic oversight.',
    ctaButtonText: 'Request Consultation',
    ctaButtonLink: '/contact',
  },
  'construction-management': {
    category: 'Project Management',
    overviewDescription:
      'End-to-end construction management from site mobilization through quality control, safety assurance, and project handover.',
    overviewBulletPoints: [
      'Contractor monitoring and progress tracking',
      'Time, cost, and contract management',
      'Safety and quality assurance',
      'Testing, commissioning, and closeout support',
    ],
    subServices: [
      'Site Supervision & Progress Monitoring',
      'Contract & Claims Management',
      'Procurement & Submittal Tracking',
      'Safety & Quality Management',
      'Progress Meetings & Reporting',
      'Testing & Commissioning Support',
    ],
    contentTitle: 'Construction Management',
    benefitsTitle: 'Why Choose Construction Management',
    benefits: [
      { title: 'Site Control', description: 'Daily oversight of contractor performance and site activities.' },
      { title: 'Quality Assurance', description: 'Inspection and testing protocols that protect project integrity.' },
      { title: 'Safety Leadership', description: 'Proactive HSE management aligned with Saudi regulations.' },
      { title: 'Commercial Protection', description: 'Claims management and contract administration to protect client interests.' },
    ],
    processTitle: 'Our Construction Management Process',
    processSteps: [
      'Review construction plans, contracts, and mobilization readiness.',
      'Monitor daily progress, quality, and safety on site.',
      'Track procurement, submittals, and contractor deliverables.',
      'Conduct progress meetings and issue structured reports.',
      'Manage variations, claims, and schedule recovery.',
      'Support testing, commissioning, and final handover.',
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      { question: 'What is construction management?', answer: 'Construction management provides owner-side oversight of contractors, ensuring work meets design, schedule, budget, safety, and quality requirements.' },
      { question: 'Do you manage EPC contractors?', answer: 'Yes. We monitor EPC and specialist contractors across industrial and infrastructure projects.' },
      { question: 'How do you handle delays?', answer: 'Through schedule analysis, recovery planning, and contractual claims management.' },
      { question: 'Why Reliable?', answer: 'Integrated engineering knowledge ensures construction oversight is technically informed and commercially sound.' },
    ],
    keyBenefitsTitle: 'Why Choose Reliable Construction Management',
    keyBenefits: [
      { title: 'Owner Representation', description: 'Independent oversight protecting your investment.' },
      { title: 'Technical Depth', description: 'Engineering-backed review of site activities.' },
      { title: 'HSE Focus', description: 'Safety-first culture on every project.' },
      { title: 'Closeout Excellence', description: 'Structured handover with complete documentation.' },
    ],
    ctaTitle: 'Build with Confidence',
    ctaDescription: 'Ensure your construction phase is delivered safely, on time, and to specification.',
    ctaButtonText: 'Get Consultation',
    ctaButtonLink: '/contact',
  },
  'commissioning-management': {
    category: 'Engineering Services',
    overviewDescription:
      'Ensure all systems are installed, tested, and integrated before safe and efficient handover to operations.',
    overviewBulletPoints: [
      'Pre-commissioning and mechanical completion',
      'System walkdowns and verification',
      'Functional and integrated system testing',
      'Operator training and documentation',
    ],
    subServices: [
      'Pre-Commissioning Preparation',
      'Mechanical Completion & Walkdowns',
      'Electrical & Instrumentation Verification',
      'Functional & Integrated System Testing',
      'Performance Testing',
      'Operator Training & Handover',
    ],
    contentTitle: 'Commissioning Management',
    benefitsTitle: 'Why Choose Commissioning Management',
    benefits: [
      { title: 'Operational Readiness', description: 'Plants ready for safe, efficient startup and sustained operations.' },
      { title: 'Defect Reduction', description: 'Systematic testing catches issues before handover.' },
      { title: 'Documentation Completeness', description: 'As-built records, O&M manuals, and training materials delivered.' },
      { title: 'Schedule Protection', description: 'Structured commissioning sequences prevent startup delays.' },
    ],
    processTitle: 'Our Commissioning Process',
    processSteps: [
      'Develop commissioning strategy and test procedures.',
      'Complete mechanical completion and punch list clearance.',
      'Perform electrical, instrumentation, and loop checks.',
      'Execute functional and integrated system tests.',
      'Conduct performance testing and optimization.',
      'Train operators and hand over to operations with documentation.',
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      { question: 'What is commissioning management?', answer: 'Commissioning management oversees testing and verification of all plant systems before operational handover.' },
      { question: 'When does commissioning start?', answer: 'Planning begins during design; field activities start at mechanical completion and continue through startup.' },
      { question: 'Do you support desalination plants?', answer: 'Yes. We have extensive experience commissioning desalination and water treatment facilities.' },
      { question: 'Why Reliable?', answer: 'Our engineering and O&M teams understand both design intent and operational requirements.' },
    ],
    keyBenefitsTitle: 'Why Choose Reliable Commissioning',
    keyBenefits: [
      { title: 'Systematic Testing', description: 'Structured procedures for every system and interface.' },
      { title: 'Plant Experience', description: 'Desalination, utilities, and industrial sector expertise.' },
      { title: 'Operator Focus', description: 'Training and documentation for smooth transition.' },
      { title: 'Post-Handover Support', description: 'Continued assistance during initial operations.' },
    ],
    ctaTitle: 'Commission with Confidence',
    ctaDescription: 'Ensure your plant is tested, verified, and ready for safe operational handover.',
    ctaButtonText: 'Request Consultation',
    ctaButtonLink: '/contact',
  },
  'operations-maintenance': {
    category: 'Engineering Services',
    overviewDescription:
      'Reliable operations and maintenance for desalination plants, water treatment facilities, and industrial utilities with 95%+ availability targets.',
    overviewBulletPoints: [
      'Predictive analysis and proactive monitoring',
      'Preventive and corrective maintenance',
      'Energy and water quality optimization',
      'Emergency response and expert intervention',
    ],
    subServices: [
      'Plant Operations Management',
      'Preventive Maintenance Programs',
      'Corrective Maintenance & Repairs',
      'Performance Monitoring & Reporting',
      'Spare Parts & Inventory Management',
      'Energy & Efficiency Optimization',
    ],
    contentTitle: 'Operations & Maintenance',
    benefitsTitle: 'Why Choose Operations & Maintenance',
    benefits: [
      { title: 'High Availability', description: 'Structured programs targeting 95%+ plant availability.' },
      { title: 'Cost Optimization', description: 'Predictive maintenance reduces downtime and extends equipment life.' },
      { title: 'Compliance Assurance', description: 'Water quality, environmental, and safety standards maintained.' },
      { title: 'Expert Response', description: 'Rapid intervention when issues arise to minimize production loss.' },
    ],
    processTitle: 'Our O&M Process',
    processSteps: [
      'Assess plant condition and operational baseline.',
      'Implement monitoring, reporting, and maintenance plans.',
      'Execute daily operations with safety and quality controls.',
      'Perform preventive and predictive maintenance activities.',
      'Optimize energy, chemical usage, and production efficiency.',
      'Report performance and recommend continuous improvements.',
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      { question: 'Which facilities do you operate?', answer: 'Desalination plants, water treatment facilities, industrial utilities, and general process plants.' },
      { question: 'What availability do you target?', answer: 'We design O&M programs to achieve over 95% availability through proactive monitoring and maintenance.' },
      { question: 'Do you provide emergency support?', answer: 'Yes. Our teams provide rapid expert intervention for unplanned outages and critical failures.' },
      { question: 'Why Reliable?', answer: 'Hands-on experience operating desalination and industrial plants across Saudi Arabia.' },
    ],
    keyBenefitsTitle: 'Why Choose Reliable O&M',
    keyBenefits: [
      { title: 'Plant Reliability', description: 'Proven programs for sustained high availability.' },
      { title: 'Cost Control', description: 'Optimized maintenance spend and energy efficiency.' },
      { title: 'Safety Culture', description: 'Operations aligned with HSE best practices.' },
      { title: 'Local Teams', description: 'Saudi-based operators and maintenance specialists.' },
    ],
    ctaTitle: 'Maximize Your Plant Performance',
    ctaDescription: 'Partner with us for reliable operations, maintenance, and continuous improvement.',
    ctaButtonText: 'Get Consultation',
    ctaButtonLink: '/contact',
  },
  'industrial-plant-optimization': {
    category: 'Engineering Services',
    overviewDescription:
      'Continuous improvement of efficiency, productivity, reliability, and safety while reducing costs and environmental impact.',
    overviewBulletPoints: [
      'Performance assessment and benchmarking',
      'Data collection and process analysis',
      'Process modeling and simulation',
      'Implementation and validation support',
    ],
    subServices: [
      'Performance Assessment & Audits',
      'Process Modeling & Simulation',
      'Energy & Efficiency Studies',
      'Reliability & Availability Analysis',
      'Implementation Planning',
      'Performance Monitoring & Iteration',
    ],
    contentTitle: 'Industrial Plant Optimization',
    benefitsTitle: 'Why Choose Plant Optimization',
    benefits: [
      { title: 'Increased Efficiency', description: 'Identify and implement improvements that reduce energy and operating costs.' },
      { title: 'Higher Reliability', description: 'Address root causes of downtime and performance degradation.' },
      { title: 'Environmental Gains', description: 'Reduce emissions, waste, and resource consumption.' },
      { title: 'Sustained Results', description: 'Monitoring and iteration ensure long-term performance gains.' },
    ],
    processTitle: 'Our Optimization Process',
    processSteps: [
      'Conduct performance assessment and data collection.',
      'Analyze processes and identify improvement opportunities.',
      'Develop engineering solutions and business cases.',
      'Plan and implement optimization measures.',
      'Test, validate, and measure results.',
      'Monitor performance and iterate for continuous improvement.',
    ],
    faqsTitle: 'Frequently Asked Questions',
    faqs: [
      { question: 'What is plant optimization?', answer: 'Plant optimization is a continuous process to improve efficiency, reliability, safety, and cost performance of industrial facilities.' },
      { question: 'What tools do you use?', answer: 'Performance audits, data analytics, process simulation, and engineering design analysis.' },
      { question: 'Can optimization be done during operations?', answer: 'Yes. Most assessments and improvements are implemented without disrupting production.' },
      { question: 'Why Reliable?', answer: 'We combine O&M field experience with engineering analysis for practical, measurable improvements.' },
    ],
    keyBenefitsTitle: 'Why Choose Reliable Optimization',
    keyBenefits: [
      { title: 'Data-Driven', description: 'Decisions backed by performance data and analysis.' },
      { title: 'Practical Solutions', description: 'Improvements that work in real operating environments.' },
      { title: 'ROI Focus', description: 'Business cases with clear return on investment.' },
      { title: 'Continuous Support', description: 'Ongoing monitoring and iterative improvement.' },
    ],
    ctaTitle: 'Unlock Your Plant\'s Potential',
    ctaDescription: 'Improve efficiency, reliability, and sustainability with structured optimization programs.',
    ctaButtonText: 'Request Consultation',
    ctaButtonLink: '/contact',
  },
}

export function applyServiceDetailExtras<T extends { slug?: { current?: string } }>(
  service: T,
): T & ServiceDetailExtras {
  const slug = service.slug?.current
  const extras = slug ? SERVICE_DETAIL_BY_SLUG[slug] : undefined
  return { ...service, ...extras }
}
