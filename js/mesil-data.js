/**
 * MESIL - Microprocessor, Embedded Systems, and IoT Lab
 * Public Institutional Data Store (Sanitized & Optimized)
 * Department of Electrical and Computer Engineering (ECE)
 * School of Engineering & Physical Sciences (SEPS), North South University
 */

export const MESIL_DATA = {
  institution: {
    labName: "Microprocessor, Embedded Systems, and IoT Lab",
    acronym: "MESIL",
    department: "Department of Electrical and Computer Engineering (ECE)",
    school: "School of Engineering & Physical Sciences (SEPS)",
    university: "North South University (NSU)",
    location: "Plot 15, Block B, Bashundhara R/A, Dhaka-1229, Bangladesh",
    logoPath: "assets/mesil-logo.png",
    contactEmail: "ece.mesil@northsouth.edu",
    vision: "To establish North South University as a national and regional leader in Microprocessor, Embedded Systems and IoT research and development through multidisciplinary innovation and collaboration.",
    mission: "To foster breakthrough innovation, empower student entrepreneurship, and build an ecosystem for sustainable industry-academia collaboration through multidisciplinary research, product innovation, and capacity building in hardware and embedded technologies.",
    overview: "In the era of Industrial Revolution 4.0 (IR 4.0), Embedded Systems, Microprocessors, Internet of Things (IoT), and Blockchain technologies are the backbone of automation, healthcare, smart cities, and digital security. MESIL positions North South University as a producer and leader in hardware-led engineering and deep-tech innovation."
  },

  faculty: [
    {
      id: "riasat-khan",
      name: "Dr. Riasat Khan",
      designation: "Associate Professor",
      department: "Department of Electrical and Computer Engineering",
      institution: "North South University",
      role: "Core Faculty & Researcher",
      areas: ["Embedded Systems", "IoT & Environmental Sensing", "Computer Vision & Medical Robotics", "FPGA & UAVs"],
      bio: "Associate Professor in ECE leading impactful initiatives in real-time embedded systems, GPS-based UAV environmental monitoring, and biomedical diagnostics. Supervises graduate and undergraduate researchers with placements at prestigious global institutions."
    },
    {
      id: "abdul-qayum",
      name: "Dr. Mohammad Abdul Qayum",
      designation: "Assistant Professor",
      department: "Department of Electrical and Computer Engineering",
      institution: "North South University",
      role: "Core Faculty & Researcher",
      areas: ["Microprocessor Architectures (ARM, RISC-V, MIPS)", "Quantum-Secured Blockchain", "Autonomous Robotics", "Deep Learning"],
      bio: "Assistant Professor in ECE specializing in microprocessor architecture design, hardware-software co-design, and quantum-secured blockchain frameworks (QS-BFT). Mentors competitive robotics and capstone engineering teams."
    },
    {
      id: "jahid-hasan",
      name: "Dr. ASM Jahid Hasan",
      designation: "Assistant Professor",
      department: "Department of Electrical and Computer Engineering",
      institution: "North South University",
      role: "Core Faculty & Researcher",
      areas: ["Smart Grids & Distributed Energy Resources (DER)", "Power Electronics & Embedded Sensing", "Renewable Energy"],
      bio: "Assistant Professor in ECE driving research in intelligent distributed energy systems, renewable microgrids, and IoT-enabled power quality instrumentation."
    },
    {
      id: "fariah-mahzabeen",
      name: "Dr. Fariah Mahzabeen",
      designation: "Assistant Professor",
      department: "Department of Electrical and Computer Engineering",
      institution: "North South University",
      role: "Core Faculty & Researcher",
      areas: ["Biomedical Embedded Devices", "Sensors & Signal Processing", "Healthcare IoT"],
      bio: "Assistant Professor in ECE focusing on biosensor engineering, physiological instrumentation, and non-invasive healthcare monitoring platforms in collaboration with clinical stakeholders."
    },
    {
      id: "raqibur-rahman",
      name: "Mr. Md. Raqibur Rahman",
      designation: "Lecturer",
      department: "Department of Electrical and Computer Engineering",
      institution: "North South University",
      role: "Faculty & Lab Coordinator",
      areas: ["Firmware Engineering", "Real-Time Embedded Systems", "Edge IoT Prototyping"],
      bio: "Lecturer in ECE coordinating embedded firmware labs, hardware prototyping setups, microcontroller instruction (STM32, ESP32, AVR), and student competition mentorship."
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
    awards: ["Best Paper Award (PRIME)", "Best Paper Award (IRTM)", "Winner – World Bank’s Plastic Circularity Innovation Challenge"]
  },

  researchPillars: [
    {
      code: "MCU",
      title: "Microcontroller & Microprocessor Units",
      summary: "Instruction set simulation and hardware testing across RISC-V, ARM, MIPS, and STM32 architectures, lowering dependence on proprietary silicon platforms.",
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

  equipmentCategories: [
    {
      category: "High-Performance Workstations & Compute Nodes",
      description: "Dedicated GPU-accelerated computing nodes for deep learning, architectural emulation, and physics modeling.",
      items: [
        "Workstations equipped with NVIDIA RTX 4070 / RTX 3050 / RTX A4000 GPUs",
        "Next-generation RTX 5080 workstation nodes for high-throughput AI inference",
        "High-density multi-core compute servers for FPGA synthesis and simulation"
      ]
    },
    {
      category: "Edge AI & Single Board Computers",
      description: "Low-latency embedded compute units for autonomous robotics, drones, and edge intelligence.",
      items: [
        "NVIDIA Jetson Nano Orin & Jetson Orin Nano Super Developer Kits",
        "Raspberry Pi 4, Raspberry Pi 5 & BananaPi single-board computational units",
        "Raspberry Pi Pico (RP2040) dual-core ARM Cortex-M0+ microcontrollers"
      ]
    },
    {
      category: "Microcontroller & Firmware Development Benches",
      description: "Broad spectrum of 32-bit and 8-bit development architectures for automotive and industrial IoT.",
      items: [
        "STM32 Advanced Discovery kits & STM32F103C8T6 Bluepill hardware units",
        "Arduino Mega and custom AVR microcontroller prototyping benches",
        "RISC-V embedded development boards and JTAG debugger units"
      ]
    },
    {
      category: "Specialized Sensory & Instrumentation Arrays",
      description: "Precision analog and digital environmental, biomedical, and electrical measurement suites.",
      items: [
        "75+ precision sensor modules (optical, acoustic, gas, thermal, motion, bio-potential)",
        "Calibrated AQI optical particulate counters (PM2.5, PM10) and digital anemometers",
        "Environmental chamber instruments: laboratory dehumidifiers and HEPA air purifiers"
      ]
    },
    {
      category: "Power Electronics & Energy Storage Benches",
      description: "Apparatus for clean energy integration, battery telemetry, and distributed microgrid research.",
      items: [
        "Photovoltaic test modules with solar charge controllers",
        "Dedicated energy storage test benches and battery telemetry interfaces",
        "CAN-bus automotive diagnostic analyzers and oscilloscopes"
      ]
    }
  ],

  availableResources: [
    { item: "High-Performance Workstations (NVIDIA RTX 4070 / RTX 3050 / RTX A4000)", quantity: "3 Units", category: "Compute" },
    { item: "NVIDIA Jetson Nano Orin Developer Kit", quantity: "1 Unit", category: "Edge AI" },
    { item: "NVIDIA Jetson Orin Nano Super Developer Kit", quantity: "1 Unit", category: "Edge AI" },
    { item: "Raspberry Pi 4 & BananaPi Single Board Computers", quantity: "3 Units", category: "SBC" },
    { item: "Raspberry Pi Pico (RP2040 Dual-Core ARM Cortex-M0+)", quantity: "1 Unit", category: "Microcontrollers" },
    { item: "STM32 Advanced Discovery Kits", quantity: "3 Units", category: "Microcontrollers" },
    { item: "STM32F103C8T6 Bluepill Boards", quantity: "12 Units", category: "Microcontrollers" },
    { item: "Arduino Mega Prototyping Boards", quantity: "7 Units", category: "Microcontrollers" },
    { item: "RISC-V Development Boards & JTAG Debuggers", quantity: "2 Units", category: "Microcontrollers" },
    { item: "Specialized Sensors & Actuator Modules (optical, acoustic, gas, thermal, motion, bio-potential)", quantity: "75+ Units", category: "Sensory & Control" },
    { item: "Calibrated AQI Optical Particulate Counters (PM2.5, PM10) & Digital Anemometers", quantity: "8 Units", category: "Instrumentation" },
    { item: "Laboratory Dehumidifiers & HEPA Air Purifiers", quantity: "2 Units", category: "Environmental Control" },
    { item: "Prototyping Hardware (LCDs, Breadboards, Relay Modules, High-Rate Cells)", quantity: "100+ Items", category: "Electronics" }
  ],

  totalProposedBudget: "3,168,000 BDT",

  proposedBudget: [
    { item: "Next-Generation RTX 5080 High-Performance AI Workstation", quantity: "2 Units", unitPrice: "3,50,000", total: "7,00,000" },
    { item: "NVIDIA Jetson Orin NX 16GB Module + Carrier Board", quantity: "3 Units", unitPrice: "1,20,000", total: "3,60,000" },
    { item: "RISC-V Development & FPGA Prototyping Boards", quantity: "10 Units", unitPrice: "18,000", total: "1,80,000" },
    { item: "Professional Oscilloscopes & Logic Analyzers", quantity: "3 Units", unitPrice: "55,000", total: "1,65,000" },
    { item: "Advanced IoT Sensor Array Kits (Environmental, Biomedical, Power)", quantity: "5 Kits", unitPrice: "40,000", total: "2,00,000" },
    { item: "Solar PV Test Module + Smart Charge Controller System", quantity: "2 Sets", unitPrice: "75,000", total: "1,50,000" },
    { item: "CAN Bus Automotive Diagnostic Analyzers", quantity: "2 Units", unitPrice: "60,000", total: "1,20,000" },
    { item: "Embedded Robotics Platform (Dual-Arm + Mobility Base)", quantity: "1 System", unitPrice: "3,50,000", total: "3,50,000" },
    { item: "Research Assistant (RA) Stipends — 2 Full-Time RAs × 12 Months", quantity: "24 Months", unitPrice: "20,000/month", total: "4,80,000" },
    { item: "Conference Travel, Publication & Dissemination Expenses", quantity: "1 Year", unitPrice: "—", total: "1,63,000" },
    { item: "Lab Infrastructure Upgrades (Network, UPS, Rack, Wiring)", quantity: "1 Lot", unitPrice: "—", total: "2,50,000" },
    { item: "Consumables, PCBs, Components & Prototyping Materials", quantity: "1 Year", unitPrice: "—", total: "50,000" }
  ],

  governance: {
    directorRequirement: "The MESIL Director shall be a full-time faculty member holding a doctoral degree in ECE or a related engineering discipline, appointed by the Head of Department in consultation with the SEPS Dean.",
    managementRoles: "A Management Faculty Team of two–three core ECE faculty members will oversee day-to-day lab operations, project allocation, resource scheduling, and MoU compliance with industry partners.",
    researchPersonnel: "Two full-time Research Assistants (RAs) — preferably graduate ECE students — will be engaged for equipment maintenance, experiment coordination, data documentation, and student mentorship under faculty supervision."
  },

  fundingRoadmap: {
    seedFund: "The NSU Seed Fund (3,168,000 BDT) will serve as the primary catalyst to establish hardware baselines, recruit RAs, and execute the first two years of research deliverables across the MCU, ES, IoT, BC, and DER pillars.",
    industryCommitments: [
      "Siliconova: Technical advisory and API co-development for next-generation STM32 automotive platform projects",
      "Walton Digi-Tech Industries Ltd.: Joint embedded systems prototype evaluation and field testing partnership",
      "Neural Semiconductor Ltd (NSL): Collaborative silicon validation and FPGA-based soft-core development",
      "Ulkasemi: Research collaboration on ASIC design flows and semiconductor-grade hardware prototyping"
    ],
    targetGrants: [
      { name: "NVIDIA Academic Hardware Grant", agency: "NVIDIA Corporation", type: "International", focus: "GPU & Edge AI Hardware" },
      { name: "NST Research Grant (Bangladesh)", agency: "Ministry of Science & Technology", type: "National", focus: "Technology Innovation" },
      { name: "USAID / Gates Foundation ICT4D", agency: "USAID / Bill & Melinda Gates Foundation", type: "International", focus: "Development Technology" },
      { name: "Japan Society for the Promotion of Science (JSPS)", agency: "JSPS, Government of Japan", type: "International", focus: "Science & Engineering" },
      { name: "DAAD Partnership Research Grant", agency: "DAAD, Germany", type: "International", focus: "Academic Collaboration" },
      { name: "Commonwealth Rutherford Fellowship", agency: "Commonwealth Scholarship Commission, UK", type: "International", focus: "Faculty Exchange & Research" }
    ],
    sustainability: "Beyond the seed fund period, MESIL aims to achieve financial sustainability through (i) NSU internal competitive research grants, (ii) industry MoU-based sponsored research income, (iii) fee-based laboratory usage and prototype development services for startups and SMEs, (iv) continuing education revenue from short courses in embedded systems and IoT, and (v) co-investigator roles in national and international multi-institutional grants."
  },

  studentAchievements: [
    {
      student: "Sajeeb Roy Chowdhury",
      degrees: "B.Sc., Colorado State University, Fort Collins, CO, USA",
      project: "Develop an educational ecosystem for MIPS, ARM, RISC-V, and Simple-13 microprocessor architecture",
      supervisors: "Dr. Riasat Khan and Dr. Mohammad Abdul Qayum",
      affiliation: "MS Student, North South University; Ex-Software Engineer, University of Illinois Urbana-Champaign (UIUC)",
      roleAtMesil: "Graduate Research Scholar",
      tags: ["RISC-V", "MIPS", "UIUC", "Microprocessors"]
    },
    {
      student: "Parinda Rahman",
      degrees: "B.Sc. in ECE, North South University",
      project: "A GPS-based unmanned drone technology for detecting and analyzing air pollutants (IEEE Instrumentation & Measurement Magazine)",
      supervisors: "Dr. Riasat Khan",
      affiliation: "Master's Student, University of British Columbia (UBC), Canada",
      roleAtMesil: "Alumni Researcher",
      tags: ["UAV", "UBC", "Air Quality", "IEEE I&M"]
    },
    {
      student: "Mohammod Naimul Islam Suvon",
      degrees: "B.Sc. in ECE, North South University",
      project: "Real time Bangla number plate recognition using computer vision and convolutional neural network (IICAIET Conference)",
      supervisors: "Dr. Riasat Khan",
      affiliation: "Ph.D. Student, University of Sheffield, United Kingdom",
      roleAtMesil: "Alumni Researcher",
      tags: ["Computer Vision", "Sheffield", "CNN", "UK"]
    },
    {
      student: "Meratun Junnut Anee",
      degrees: "B.Sc. in ECE, North South University",
      project: "A GPS-based unmanned drone technology for detecting and analyzing air pollutants (IEEE Instrumentation & Measurement Magazine)",
      supervisors: "Dr. Riasat Khan",
      affiliation: "Ph.D. Student, Howard University, Washington D.C., USA",
      roleAtMesil: "Alumni Researcher",
      tags: ["UAV", "Howard University", "USA", "IEEE"]
    },
    {
      student: "Mir Tanvir Islam",
      degrees: "B.Sc. in ECE, North South University",
      project: "Deep learning-based glaucoma detection with cropped optic cup/disc and vessel segmentation (IEEE Access)",
      supervisors: "Dr. Riasat Khan",
      affiliation: "Software Development Engineer, Amazon, Luxembourg",
      roleAtMesil: "Industry Alumni",
      tags: ["Amazon", "Deep Learning", "Luxembourg", "IEEE Access"]
    },
    {
      student: "Md Nihal Al Rafi",
      degrees: "B.Sc. in ECE, North South University",
      project: "Arduino Based Vehicle Distance Locator, Accident Alert and Current Location Tracking Using IoT (ICon EEI)",
      supervisors: "Dr. Riasat Khan",
      affiliation: "Master's Student, University of Essex, United Kingdom",
      roleAtMesil: "Alumni Researcher",
      tags: ["IoT", "Essex", "Vehicle Telemetry", "UK"]
    },
    {
      student: "Amzad Hossain",
      degrees: "B.Sc. in ECE, North South University",
      project: "A GPS-based unmanned drone technology for detecting and analyzing air pollutants (IEEE Instrumentation & Measurement Magazine)",
      supervisors: "Dr. Riasat Khan",
      affiliation: "Ph.D. Student, Howard University, Washington D.C., USA",
      roleAtMesil: "Alumni Researcher",
      tags: ["Drone", "Howard University", "USA", "Sensors"]
    },
    {
      student: "Faria Iqbal",
      degrees: "B.Sc. in ECE, North South University",
      project: "Deep learning based object detection and surrounding environment description for visually impaired people (Heliyon Journal)",
      supervisors: "Dr. Riasat Khan",
      affiliation: "Master's Student, University of Arkansas, USA",
      roleAtMesil: "Alumni Researcher",
      tags: ["Assistive Tech", "Arkansas", "USA", "Heliyon"]
    },
    {
      student: "Shafin T Mashfu",
      degrees: "B.Sc. in ECE, North South University",
      project: "Deep learning-based glaucoma detection with cropped optic cup and disc and blood vessel segmentation (IEEE Access)",
      supervisors: "Dr. Riasat Khan",
      affiliation: "Business Intelligence Engineer, Amazon, USA",
      roleAtMesil: "Industry Alumni",
      tags: ["Amazon", "Medical AI", "USA", "IEEE"]
    },
    {
      student: "Ahmed Akib Jawad Karim",
      degrees: "B.Sc. in ECE, North South University",
      project: "Advanced vision transformers and open-set learning for robust mosquito classification: A novel approach to entomological studies (PLOS Computational Biology)",
      supervisors: "Dr. Riasat Khan",
      affiliation: "Lecturer, Department of CSE, BRAC University, Bangladesh",
      roleAtMesil: "Academic Alumni",
      tags: ["Vision Transformers", "BRAC University", "PLOS", "Faculty"]
    },
    {
      student: "Samiha Akhter",
      degrees: "B.Sc. in ECE, North South University",
      project: "Deep learning based object detection and surrounding environment description for visually impaired people (Heliyon Journal)",
      supervisors: "Dr. Riasat Khan",
      affiliation: "Master's Student, Uppsala University, Sweden",
      roleAtMesil: "Alumni Researcher",
      tags: ["Uppsala", "Sweden", "Deep Learning", "Heliyon"]
    },
    {
      student: "Md. Zahid Hasan",
      degrees: "B.Sc. in ECE, North South University",
      project: "Developing ARM Processor Lab Manual for CSE-331 (Microprocessor & Interfacing)",
      supervisors: "Dr. Mohammad Abdul Qayum",
      affiliation: "Ph.D. Student, North Dakota State University (NDSU), USA",
      roleAtMesil: "Alumni Researcher",
      tags: ["ARM", "NDSU", "USA", "Curriculum"]
    },
    {
      student: "Samiha Tasnim",
      degrees: "B.Sc. in ECE, North South University",
      project: "Developing ARM Processor Lab Manual for CSE-331 (Microprocessor & Interfacing)",
      supervisors: "Dr. Mohammad Abdul Qayum",
      affiliation: "Ph.D. Student, North Dakota State University (NDSU), USA",
      roleAtMesil: "Alumni Researcher",
      tags: ["ARM", "NDSU", "USA", "Microprocessors"]
    },
    {
      student: "Zia Uddin Chowdhury",
      degrees: "B.Sc. in ECE, North South University",
      project: "A Dynamic Approach for Multi-Disease Prediction Using Machine Learning and Responsive Healthcare System",
      supervisors: "Dr. Mohammad Abdul Qayum",
      affiliation: "Master's Student, Illinois Institute of Technology (IIT), Chicago, USA",
      roleAtMesil: "Alumni Researcher",
      tags: ["Healthcare AI", "IIT Chicago", "USA", "Machine Learning"]
    },
    {
      student: "Iftekharul Alam",
      degrees: "B.Sc. in ECE, North South University",
      project: "Multi-Model AI of Satellite Image Processing for Enhanced Urban Development Analysis in Bangladesh",
      supervisors: "Dr. Mohammad Abdul Qayum",
      affiliation: "Master's Student, The University of Newcastle, Australia",
      roleAtMesil: "Alumni Researcher",
      tags: ["Satellite AI", "Newcastle", "Australia", "Urban Planning"]
    },
    {
      student: "Md. Ashrafur Islam",
      degrees: "B.Sc. in ECE, North South University",
      project: "Arduino-based Ambient Comfort Monitoring System Application",
      supervisors: "Dr. Mohammad Abdul Qayum",
      affiliation: "Master's Student, Greenwich University, United Kingdom",
      roleAtMesil: "Alumni Researcher",
      tags: ["Sensors", "Greenwich", "UK", "IoT"]
    },
    {
      student: "Sadman Sakib Alif",
      degrees: "B.Sc. in ECE, North South University",
      project: "Dual Robotic Arms: A Computer Vision-Based Approach Towards Autonomous Motion Leveraging Computer Vision and Machine Learning",
      supervisors: "Dr. Mohammad Abdul Qayum",
      affiliation: "Lecturer, BRAC University; Part-time Lab Instructor, North South University",
      roleAtMesil: "Academic Alumni",
      tags: ["Robotics", "Computer Vision", "BRAC University", "NSU"]
    },
    {
      student: "Ahmed Faizul Haque Dhrubo",
      degrees: "B.Sc. in ECE, North South University",
      project: "Intelligent Systems in Neuroimaging (Q1 Journal, IF-11.2); DSFP Layerwise DCNN Pruning (Q1 Journal, IF-3.8); QuantumShield QS-BFT Blockchain Consensus (Q1 Journal, IF-5)",
      supervisors: "Dr. Mohammad Abdul Qayum",
      affiliation: "Graduate Research Assistant, North South University, Bangladesh",
      roleAtMesil: "Graduate Research Assistant",
      tags: ["Blockchain", "Q1 Journal", "QS-BFT", "Neuroimaging"]
    }
  ]
};
