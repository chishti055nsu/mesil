/**
 * MESIL - Microprocessor, Embedded Systems, and IoT Lab
 * Official Institutional Data Store (North South University)
 * Department of Electrical and Computer Engineering (ECE)
 * School of Engineering & Physical Sciences (SEPS)
 */

export const MESIL_DATA = {
  institution: {
    labName: "Microprocessor, Embedded Systems, and IoT Lab",
    acronym: "MESIL",
    department: "Department of Electrical and Computer Engineering (ECE)",
    school: "School of Engineering & Physical Sciences (SEPS)",
    university: "North South University (NSU)",
    location: "Plot 15, Block B, Bashundhara R/A, Dhaka-1229, Bangladesh",
    proposalDate: "July, 2025",
    logoPath: "assets/mesil-logo.png",
    contactEmail: "ece.mesil@northsouth.edu",
    vision: "To establish North South University as a national and regional leader in Microprocessor, Embedded Systems and IoT research and development through multidisciplinary innovation and collaboration.",
    mission: "To foster breakthrough innovation, empower student entrepreneurship, and build an ecosystem for sustainable industry-academia collaboration through multidisciplinary research, product innovation, and capacity building in hardware and embedded technologies.",
    backgroundSummary: "The critical sector—Microprocessor, Embedded Systems, IoT, and Blockchain engineering—remains significantly underdeveloped in Bangladesh. Bangladesh lags in hardware-led tech due to the absence of a local semiconductor ecosystem and weak embedded systems education. MESIL positions NSU as not only an educator but also a producer of Industrial Revolution 4.0 (IR 4.0) technologies."
  },

  faculty: [
    {
      id: "riasat-khan",
      name: "Dr. Riasat Khan",
      designation: "Associate Professor",
      department: "Department of Electrical and Computer Engineering",
      institution: "North South University",
      role: "Founding Faculty & Core Investigator",
      areas: ["Embedded Systems", "IoT & Environmental Sensing", "Computer Vision & Medical Robotics", "FPGA & UAVs"],
      bio: "Associate Professor in ECE with extensive research leadership in real-time embedded systems, GPS-based drone environmental monitoring, and biomedical diagnostics. Supervised multiple graduate students now placed at top universities worldwide."
    },
    {
      id: "abdul-qayum",
      name: "Dr. Mohammad Abdul Qayum",
      designation: "Assistant Professor",
      department: "Department of Electrical and Computer Engineering",
      institution: "North South University",
      role: "Founding Faculty & Core Investigator",
      areas: ["Microprocessor Architectures (ARM, RISC-V, MIPS)", "Quantum-Secured Blockchain", "Autonomous Robotics", "Deep Learning"],
      bio: "Assistant Professor in ECE specializing in microprocessor architecture curricula, hardware-software co-design, and quantum-secured blockchain frameworks (QS-BFT). Active mentor for robotics and capstone hardware teams."
    },
    {
      id: "jahid-hasan",
      name: "Dr. ASM Jahid Hasan",
      designation: "Assistant Professor",
      department: "Department of Electrical and Computer Engineering",
      institution: "North South University",
      role: "Founding Faculty & Core Investigator",
      areas: ["Smart Grids & Distributed Energy Resources (DER)", "Power Electronics & Embedded Sensing", "Renewable Energy"],
      bio: "Assistant Professor in ECE driving research in intelligent distributed energy systems, renewable microgrids, and IoT-enabled power quality instrumentation."
    },
    {
      id: "fariah-mahzabeen",
      name: "Dr. Fariah Mahzabeen",
      designation: "Assistant Professor",
      department: "Department of Electrical and Computer Engineering",
      institution: "North South University",
      role: "Founding Faculty & Core Investigator",
      areas: ["Biomedical Embedded Devices", "Sensors & Signal Processing", "Microfluidics & Healthcare IoT"],
      bio: "Assistant Professor in ECE focusing on sensor development, bio-potential instrumentation, and non-invasive healthcare monitoring devices in collaboration with clinical stakeholders."
    },
    {
      id: "raqibur-rahman",
      name: "Mr. Md. Raqibur Rahman",
      designation: "Lecturer",
      department: "Department of Electrical and Computer Engineering",
      institution: "North South University",
      role: "Founding Faculty & Lab Operations Coordinator",
      areas: ["Firmware Engineering", "Real-Time Embedded Systems", "Edge IoT Prototyping"],
      bio: "Lecturer in ECE assisting with firmware architectures, hardware laboratory modules, STM32 and microcontroller prototyping, and student competition mentorship."
    }
  ],

  metrics: {
    combinedExperience: "30+ Years",
    securedFunding: "5 Million+ BDT",
    scopusPublications: 34,
    q1Journals: 8,
    q2Journals: 5,
    conferences: 21,
    citations: "1,688+",
    awards: ["Best Paper Award (PRIME-2021)", "Best Paper Award (IRTM-2022)", "Winner – World Bank’s Plastic Circularity Innovation Challenge"]
  },

  researchPillars: [
    {
      code: "MCU",
      title: "Microcontroller & Microprocessor Units",
      summary: "Instruction set simulation and hardware testing across RISC-V, ARM, MIPS, and STM32 architectures, lowering dependence on closed silicon platforms.",
      deliverables: ["Educational hardware simulator ecosystem", "STM32 automotive API development", "FPGA-based soft-core RISC-V implementations"]
    },
    {
      code: "ES",
      title: "Embedded Systems & Edge Intelligence",
      summary: "Real-time operating systems (RTOS), embedded vision for drones, and low-latency inference on NVIDIA Jetson and edge microcontroller modules.",
      deliverables: ["Embedded CAN bus for solar electric vehicles", "Deep learning vision for UAV search and rescue", "Dual robotic arm autonomous motion"]
    },
    {
      code: "IoT",
      title: "Internet of Things & Smart Sensing",
      summary: "End-to-end telemetry arrays for smart cities, precision agriculture, and continuous environmental telemetry.",
      deliverables: ["Dhaka air quality mapping array", "Low-cost ambient comfort sensors", "Urban flood and waterbody monitoring"]
    },
    {
      code: "BC",
      title: "Blockchain Applications & Decentralization",
      summary: "Decentralized trust, Brain-as-a-Service (BaaS) infrastructure, and quantum-secured Byzantine fault tolerant consensus (QS-BFT).",
      deliverables: ["Blockchain-integrated automated fuel dispensing", "Quantum-secured consensus for consumer networks", "Edge verifiable hardware logs"]
    },
    {
      code: "DER",
      title: "Smart Grid & Distributed Energy Resources",
      summary: "IoT-enabled microgrids, smart solar charging stations, and energy storage management.",
      deliverables: ["IoT-based solar EV charging hubs", "Distributed microgrid telemetry", "Smart inverter control algorithms"]
    }
  ],

  multidisciplinary: [
    {
      department: "Civil and Environmental Engineering (CEE)",
      focus: "Urban Resilience & Environmental Telemetry",
      projects: [
        "Monitoring and improving air, soil, and water quality across Dhaka landscapes",
        "Tracking geomorphological shifts of rivers and waterbodies",
        "Developing earthquake and geohazard early-warning sensing devices",
        "Research on recyclable materials and sensorized waste-to-resource technologies"
      ]
    },
    {
      department: "Department of Public Health (DPH)",
      focus: "Non-Invasive Diagnostics & Healthcare IoT",
      projects: [
        "Non-invasive disease monitoring systems using acoustic, thermal, and biomedical sensors for diabetes, COPD, and asthma",
        "Wearable biosensing and behavioral telemetry platforms for mental health assessment",
        "Edge IoT platforms for low-cost community health screening in resource-constrained regions"
      ]
    }
  ],

  sdgAlignments: [
    { number: 7, name: "Affordable and Clean Energy", impact: "Smart grids, distributed renewable monitoring, and energy optimization tools." },
    { number: 9, name: "Industry, Innovation, and Infrastructure", impact: "Local hardware prototyping, embedded systems curriculum, and deep-tech incubation." },
    { number: 11, name: "Sustainable Cities and Communities", impact: "Smart urban flood warning, air quality telemetry, and intelligent transportation." },
    { number: 13, name: "Climate Action", impact: "Data-driven micro-climate sensing, emissions tracking, and eco-friendly air cooling systems." },
    { number: 15, name: "Life on Land", impact: "IoT telemetry for soil biodiversity, forestry health, and agricultural robotics." }
  ],

  ongoingProjects: [
    {
      title: "API Development for STM32 Microcontrollers",
      partner: "Siliconova",
      scope: "Developing standardized low-level driver APIs for STM32 MCUs tailored for next-generation automotive embedded systems."
    },
    {
      title: "Embedded Computer Vision for Autonomous UAVs & Robotics",
      partner: "BRAC University (CVIS Lab)",
      scope: "Real-time edge neural inference for drone-based disaster assessment, fire localization, and autonomous robotic navigation."
    },
    {
      title: "Eco-Friendly Intelligent Air Cooling Architecture",
      partner: "MESIL Core Initiative",
      scope: "Zero-refrigerant low-energy atmospheric cooling systems with smart closed-loop embedded temperature and humidity regulation."
    },
    {
      title: "High-Resolution Air Quality Telemetry & Dhaka Urban Mapping",
      partner: "NSU Internal & Municipal Stakeholders",
      scope: "Multi-point sensor mesh streaming real-time PM2.5, PM10, CO, and VOC concentrations for microclimate analytics across Dhaka."
    },
    {
      title: "Solar Electric Vehicle (SEV) Embedded CAN Bus Integration",
      partner: "Automotive Research Team",
      scope: "Comprehensive Controller Area Network (CAN) firmware for battery telemetry, regenerative braking, and real-time powertrain telemetry."
    },
    {
      title: "Blockchain-Integrated Fuel Pump & Brain-as-a-Service (BaaS) Platform",
      partner: "FinTech & IoT Research Group",
      scope: "Tamper-evident IoT flow telemetry coupled with distributed ledgers for fraud prevention and decentralized compute sharing."
    },
    {
      title: "IoT-Based Solar Charging, Smart Delivery Drones & Humanoid Robotics",
      partner: "Undergraduate Capstone Program",
      scope: "Smart autonomous drone delivery docks, solar charging nodes, and assistive robotics for elderly mobility support."
    }
  ],

  collaborations: {
    universities: [
      "Multimedia University (MMU), Malaysia",
      "University of Washington, Tacoma, USA",
      "North South University (Department of Civil & Environmental Engineering)",
      "North South University (Department of Public Health)"
    ],
    industry: [
      "Siliconova",
      "Walton Digi-Tech Industries Ltd.",
      "Neural Semiconductor Ltd (NSL)",
      "Ulkasemi"
    ],
    researchLabs: [
      "NIROLab (Robotics Lab, NSU)",
      "MILab (Machine Intelligence Lab, NSU)",
      "DIAL (Data Science & AI Lab, NSU)",
      "CPSLab (Cyber-Physical Systems Lab, NSU)",
      "RIoT Lab (Independent University, Bangladesh)",
      "CVIS Research Lab (Brac University)"
    ]
  },

  availableResources: [
    { item: "High-Performance Workstations (RTX 4070 / 3050 / A4000)", quantity: 3, category: "Compute" },
    { item: "NVIDIA Jetson Nano Orin Developer Kit", quantity: 1, category: "Edge AI" },
    { item: "Raspberry Pi & BananaPi Single Board Computers", quantity: 3, category: "SBC" },
    { item: "STM32 Development Boards (3 Advanced Discovery + 12 Bluepill)", quantity: 15, category: "Microcontrollers" },
    { item: "Raspberry Pi Pico (RP2040)", quantity: 1, category: "Microcontrollers" },
    { item: "Arduino Mega Prototyping Boards", quantity: 7, category: "Microcontrollers" },
    { item: "Specialized Sensors & Actuator Modules", quantity: "75+ units", category: "Sensory & Control" },
    { item: "Calibrated AQI Monitors & Digital Anemometers", quantity: 8, category: "Instrumentation" },
    { item: "Laboratory Air Purifier & Dehumidification Units", quantity: 2, category: "Environmental Control" },
    { item: "Prototyping Hardware (LCDs, Breadboards, Motors, High-Rate Cells)", quantity: "100+ items", category: "Electronics" }
  ],

  proposedBudget: [
    { item: "Workstations with NVIDIA RTX 5080", quantity: "3 Units", unitPrice: "190,000 BDT", total: "570,000 BDT" },
    { item: "NVIDIA Jetson Orin Nano Super Edge AI Modules", quantity: "4 Units", unitPrice: "62,500 BDT", total: "250,000 BDT" },
    { item: "Advanced Precision Sensory Array", quantity: "50 Units", unitPrice: "2,000 BDT", total: "100,000 BDT" },
    { item: "Industrial-Grade Actuators & Robotic Drivers", quantity: "30 Units", unitPrice: "5,000 BDT", total: "150,000 BDT" },
    { item: "Energy Storage Units & Battery Test Benches", quantity: "5 Units", unitPrice: "30,000 BDT", total: "150,000 BDT" },
    { item: "Photovoltaic Modules & Power Inverters", quantity: "10 Units", unitPrice: "10,000 BDT", total: "100,000 BDT" },
    { item: "Graduate Research Assistantships (2 GRAs for 24 Months)", quantity: "2 × 24 Mos", unitPrice: "38,500 BDT/mo", total: "1,848,000 BDT" }
  ],
  totalProposedBudget: "3,168,000 BDT",

  governance: {
    directorRequirement: "Must hold at least the rank of Assistant Professor from the Department of Electrical and Computer Engineering (ECE). Appointed by the Vice Chancellor in consultation with Dean (SEPS) and Chair (ECE).",
    managementRoles: "Engages core ECE faculty team members to supervise research pillars, funding proposals, industry MoUs, and lab operations.",
    researchPersonnel: "Includes Graduate Research Assistants (GRAs), Foreign Graduate Assistants (FGAs), undergraduate research scholars, and capstone teams reporting directly to project faculty supervisors."
  },

  fundingRoadmap: {
    seedFund: "3,168,000 BDT requested from North South University Seed Fund.",
    industryCommitments: [
      "Siliconova: Student team sponsorship (4–5 members) for STM32 automotive API development + partial RA support and MCU hardware kits.",
      "Neural Semiconductor Ltd (NSL): Embedded system board sponsorship based on RISC-V architecture + SDKs and student RA support."
    ],
    targetGrants: [
      { name: "ICT Division & ATP/HEAT Grants", type: "National", agency: "Ministry of Education / University Grants Commission (UGC)" },
      { name: "Research and Innovation Center (RIC)", type: "Institutional", agency: "North South University" },
      { name: "NVIDIA Sponsored Research Collaboration (SRC)", type: "International", focus: "Emergency patient monitoring using edge computing" },
      { name: "USAID / Bill & Melinda Gates Foundation", type: "International", focus: "Smart agricultural monitoring using UAVs, robotics, AI, and IoT" },
      { name: "Japan Science and Technology Agency (JST)", type: "International", focus: "Urban environmental telemetry & heat island mapping" },
      { name: "DAAD Germany", type: "International", focus: "Sustainable smart grids & distributed energy resources" }
    ],
    sustainability: "Gradual self-funding model through professional bootcamps ('IoT with ESP32', 'Embedded C with STM32', 'RISC-V Prototyping') and industry-commissioned R&D projects."
  },

  studentAchievements: [
    {
      student: "Sajeeb Roy Chowdhury",
      degrees: "B.Sc., Colorado State University, Fort Collins, CO, USA",
      project: "Develop an educational ecosystem for MIPS, ARM, RISC-V, and Simple-13 microprocessor architecture",
      supervisors: "Dr. Riasat Khan and Dr. Mohammad Abdul Qayum",
      affiliation: "MS Student, North South University, Bangladesh; Ex-Software Engineer, University of Illinois Urbana-Champaign (UIUC)",
      roleAtMesil: "Potential Graduate Research Assistant (GRA)"
    },
    {
      student: "Parinda Rahman",
      degrees: "B.Sc. in ECE, North South University",
      project: "A GPS-based unmanned drone technology for detecting and analyzing air pollutants (IEEE Instrumentation & Measurement Magazine)",
      supervisors: "Dr. Riasat Khan",
      affiliation: "Master's Student, University of British Columbia (UBC), Canada",
      roleAtMesil: "Alumni Researcher"
    },
    {
      student: "Mohammod Naimul Islam Suvon",
      degrees: "B.Sc. in ECE, North South University",
      project: "Real time Bangla number plate recognition using computer vision and convolutional neural network (IICAIET Conference)",
      supervisors: "Dr. Riasat Khan",
      affiliation: "Ph.D. Student, University of Sheffield, United Kingdom",
      roleAtMesil: "Alumni Researcher"
    },
    {
      student: "Meratun Junnut Anee",
      degrees: "B.Sc. in ECE, North South University",
      project: "A GPS-based unmanned drone technology for detecting and analyzing air pollutants (IEEE Instrumentation & Measurement Magazine)",
      supervisors: "Dr. Riasat Khan",
      affiliation: "Ph.D. Student, Howard University, Washington D.C., USA",
      roleAtMesil: "Alumni Researcher"
    },
    {
      student: "Mir Tanvir Islam",
      degrees: "B.Sc. in ECE, North South University",
      project: "Deep learning-based glaucoma detection with cropped optic cup/disc and vessel segmentation (IEEE Access)",
      supervisors: "Dr. Riasat Khan",
      affiliation: "Software Development Engineer, Amazon, Luxembourg",
      roleAtMesil: "Industry Alumni"
    },
    {
      student: "Md Nihal Al Rafi",
      degrees: "B.Sc. in ECE, North South University",
      project: "Arduino Based Vehicle Distance Locator, Accident Alert and Current Location Tracking Using IoT (ICon EEI)",
      supervisors: "Dr. Riasat Khan",
      affiliation: "Master's Student, University of Essex, United Kingdom",
      roleAtMesil: "Alumni Researcher"
    },
    {
      student: "Amzad Hossain",
      degrees: "B.Sc. in ECE, North South University",
      project: "A GPS-based unmanned drone technology for detecting and analyzing air pollutants (IEEE Instrumentation & Measurement Magazine)",
      supervisors: "Dr. Riasat Khan",
      affiliation: "Ph.D. Student, Howard University, Washington D.C., USA",
      roleAtMesil: "Alumni Researcher"
    },
    {
      student: "Faria Iqbal",
      degrees: "B.Sc. in ECE, North South University",
      project: "Deep learning based object detection and surrounding environment description for visually impaired people (Heliyon Journal)",
      supervisors: "Dr. Riasat Khan",
      affiliation: "Master's Student, University of Arkansas, USA",
      roleAtMesil: "Alumni Researcher"
    },
    {
      student: "Shafin T Mashfu",
      degrees: "B.Sc. in ECE, North South University",
      project: "Deep learning-based glaucoma detection with cropped optic cup and disc and blood vessel segmentation (IEEE Access)",
      supervisors: "Dr. Riasat Khan",
      affiliation: "Business Intelligence Engineer, Amazon, USA",
      roleAtMesil: "Industry Alumni"
    },
    {
      student: "Ahmed Akib Jawad Karim",
      degrees: "B.Sc. in ECE, North South University",
      project: "Advanced vision transformers and open-set learning for robust mosquito classification: A novel approach to entomological studies (PLOS Computational Biology)",
      supervisors: "Dr. Riasat Khan",
      affiliation: "Lecturer, Department of CSE, BRAC University, Bangladesh",
      roleAtMesil: "Academic Alumni"
    },
    {
      student: "Samiha Akhter",
      degrees: "B.Sc. in ECE, North South University",
      project: "Deep learning based object detection and surrounding environment description for visually impaired people (Heliyon Journal)",
      supervisors: "Dr. Riasat Khan",
      affiliation: "Master's Student, Uppsala University, Sweden",
      roleAtMesil: "Alumni Researcher"
    },
    {
      student: "Md. Zahid Hasan",
      degrees: "B.Sc. in ECE, North South University",
      project: "Developing ARM Processor Lab Manual for CSE-331 (Microprocessor & Interfacing)",
      supervisors: "Dr. Mohammad Abdul Qayum",
      affiliation: "Ph.D. Student, North Dakota State University (NDSU), USA",
      roleAtMesil: "Alumni Researcher"
    },
    {
      student: "Samiha Tasnim",
      degrees: "B.Sc. in ECE, North South University",
      project: "Developing ARM Processor Lab Manual for CSE-331 (Microprocessor & Interfacing)",
      supervisors: "Dr. Mohammad Abdul Qayum",
      affiliation: "Ph.D. Student, North Dakota State University (NDSU), USA",
      roleAtMesil: "Alumni Researcher"
    },
    {
      student: "Zia Uddin Chowdhury",
      degrees: "B.Sc. in ECE, North South University",
      project: "A Dynamic Approach for Multi-Disease Prediction Using Machine Learning and Responsive Healthcare System",
      supervisors: "Dr. Mohammad Abdul Qayum",
      affiliation: "Master's Student, Illinois Institute of Technology (IIT), Chicago, USA",
      roleAtMesil: "Alumni Researcher"
    },
    {
      student: "Iftekharul Alam",
      degrees: "B.Sc. in ECE, North South University",
      project: "Multi-Model AI of Satellite Image Processing for Enhanced Urban Development Analysis in Bangladesh",
      supervisors: "Dr. Mohammad Abdul Qayum",
      affiliation: "Master's Student, The University of Newcastle, Australia",
      roleAtMesil: "Alumni Researcher"
    },
    {
      student: "Md. Ashrafur Islam",
      degrees: "B.Sc. in ECE, North South University",
      project: "Arduino-based Ambient Comfort Monitoring System Application",
      supervisors: "Dr. Mohammad Abdul Qayum",
      affiliation: "Master's Student, Greenwich University, United Kingdom",
      roleAtMesil: "Alumni Researcher"
    },
    {
      student: "Sadman Sakib Alif",
      degrees: "B.Sc. in ECE, North South University",
      project: "Dual Robotic Arms: A Computer Vision-Based Approach Towards Autonomous Motion Leveraging Computer Vision and Machine Learning",
      supervisors: "Dr. Mohammad Abdul Qayum",
      affiliation: "Lecturer, BRAC University; Part-time Lab Instructor, North South University",
      roleAtMesil: "Academic Alumni"
    },
    {
      student: "Ahmed Faizul Haque Dhrubo",
      degrees: "B.Sc. in ECE, North South University",
      project: "Intelligent Systems in Neuroimaging (Q1 Journal, IF-11.2); DSFP Layerwise DCNN Pruning (Q1 Journal, IF-3.8); QuantumShield QS-BFT Blockchain Consensus (Q1 Journal, IF-5)",
      supervisors: "Dr. Mohammad Abdul Qayum",
      affiliation: "Graduate Research Assistant, North South University, Bangladesh",
      roleAtMesil: "Graduate Research Assistant"
    }
  ]
};
