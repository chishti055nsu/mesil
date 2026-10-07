/**
 * MESIL - Materials & Energy Storage Innovation Lab
 * Central Data Store
 * Easily modify this file to update publications, team members, research areas, and news!
 */

const LAB_DATA = {
  info: {
    acronym: "MESIL",
    fullName: "Materials & Energy Storage Innovation Lab",
    institution: "Institute of Advanced Technology & Engineering",
    tagline: "Pioneering Next-Generation Energy Architectures & Intelligent Materials",
    heroDescription: "We engineer sustainable energy materials at atomic precision—integrating machine learning, operando characterization, and advanced electrochemistry to power the decarbonized future.",
    location: "Science & Engineering Complex, Suite 402, 500 Innovation Way",
    contactEmail: "contact@mesil-lab.org",
    githubRepo: "https://github.com/mesil-lab/mesil.github.io",
    stats: [
      { count: 68, suffix: "+", label: "Peer-Reviewed Papers" },
      { count: 14, suffix: "M+", label: "Research Funding ($)" },
      { count: 24, suffix: "", label: "Active Researchers" },
      { count: 18, suffix: "", label: "Granted Patents" },
      { count: 5200, suffix: "+", label: "Citations" }
    ]
  },

  researchThrusts: [
    {
      id: "solid-state",
      tag: "Energy Storage",
      title: "All-Solid-State & Metal Batteries",
      shortDesc: "Eliminating dendrite formation and interface impedance in sulfide & oxide-based solid electrolytes for ultra-safe, high-energy-density cells.",
      fullDesc: "Our solid-state battery program tackles the interfacial mechanics and chemo-mechanical degradation between solid electrolytes and lithium/sodium metal anodes. Utilizing cryogenic electron microscopy and customized interlayers, we are realizing >500 Wh/kg cell-level energy densities with non-flammable safety profiles.",
      icon: "battery-charging",
      color: "emerald",
      keywords: ["Solid Electrolytes", "Lithium Metal Anodes", "Chemo-Mechanics", "Cryo-TEM"]
    },
    {
      id: "ai-materials",
      tag: "Computation & AI",
      title: "AI-Driven Materials Discovery",
      shortDesc: "Accelerating discovery cycles through equivariant graph neural networks, generative crystal diffusion, and high-throughput DFT calculations.",
      fullDesc: "Traditional trial-and-error synthesis takes decades. At MESIL, our computational pipeline couples equivariant neural network force fields (CHGNet / M3GNet) with automated robotic synthesis workcells, screening millions of candidate inorganic crystals in hours and autonomously synthesizing top thermodynamic candidates.",
      icon: "cpu",
      color: "cyan",
      keywords: ["Graph Neural Networks", "Crystal Diffusion", "Robotic Synthesis", "DFT"]
    },
    {
      id: "electrocatalysis",
      tag: "Decarbonization",
      title: "Sustainable Electrocatalysis & CO₂ Conversion",
      shortDesc: "Engineering single-atom and dual-atom catalysts for high-efficiency green hydrogen evolution and selective multi-carbon CO₂ reduction.",
      fullDesc: "To close the carbon loop, we design atomically dispersed catalysts tuned with coordinated heteroatoms. Our electrolyzer stacks operate at ampere-scale current densities with high Faradaic efficiency toward ethylene and ethanol, powered directly by intermittent renewable electricity.",
      icon: "atom",
      color: "amber",
      keywords: ["Single-Atom Catalysis", "CO₂ Reduction", "Green Hydrogen", "Zero-Carbon Fuels"]
    },
    {
      id: "operando",
      tag: "Characterization",
      title: "In-Situ Operando Diagnostics",
      shortDesc: "Unraveling transient reaction kinetics in real-time through synchrotron X-ray absorption, environmental TEM, and scanning electrochemical microscopy.",
      fullDesc: "Real operating battery and catalyst environments differ drastically from post-mortem states. We develop miniaturized operando cell holders that fit inside synchrotron beamlines and transmission electron microscopes to monitor phase transformations, gas evolution, and atomic hopping during live charge-discharge cycles.",
      icon: "microscope",
      color: "violet",
      keywords: ["Synchrotron XAS", "Operando XRD", "Environmental TEM", "Phase Dynamics"]
    }
  ],

  publications: [
    {
      id: "pub-2026-1",
      title: "Self-Healing PEO-Garnet Composite Electrolytes for Dendrite-Free Lithium Metal Batteries at Room Temperature",
      authors: ["E. Vance*", "H. Zhang", "S. Al-Mansoor", "A. Kowalski", "R. Mallik†"],
      journal: "Nature Energy",
      year: 2026,
      volume: "11",
      pages: "142–156",
      doi: "10.1038/s41560-026-01824-3",
      category: "solid-state",
      featured: true,
      badge: "Nature Energy Cover",
      abstract: "All-solid-state lithium metal batteries promise superior energy density and intrinsic safety, yet room-temperature mechanical degradation remains unresolved. Here, we present a self-healing dynamic crosslinked polymer-ceramic hybrid matrix that actively dissipates interfacial stress and achieves over 1,500 stable cycles at 3C rate.",
      bibtex: `@article{vance2026selfhealing,
  title={Self-Healing PEO-Garnet Composite Electrolytes for Dendrite-Free Lithium Metal Batteries at Room Temperature},
  author={Vance, Eleanor and Zhang, Hao and Al-Mansoor, Tariq and Kowalski, Adam and Mallik, Rafsan},
  journal={Nature Energy},
  volume={11},
  pages={142--156},
  year={2026},
  publisher={Nature Publishing Group},
  doi={10.1038/s41560-026-01824-3}
}`
    },
    {
      id: "pub-2026-2",
      title: "Autonomous Crystal Diffusion Models for Discovering High-Entropy Superionic Conductors",
      authors: ["H. Zhang*", "C. Liu", "P. Mukherjee", "R. Mallik†"],
      journal: "Advanced Materials",
      year: 2026,
      volume: "38",
      pages: "2504819",
      doi: "10.1002/adma.202504819",
      category: "ai-materials",
      featured: true,
      badge: "Featured Article",
      abstract: "We formulate an SE(3)-equivariant generative crystal diffusion architecture trained on 2.4 million DFT-relaxed geometries. The pipeline predicted six previously unsynthesized quaternary thiophosphates, with experimental ionic conductivity reaching 21.8 mS/cm at 298 K.",
      bibtex: `@article{zhang2026autonomous,
  title={Autonomous Crystal Diffusion Models for Discovering High-Entropy Superionic Conductors},
  author={Zhang, Hao and Liu, Chen and Mukherjee, Priya and Mallik, Rafsan},
  journal={Advanced Materials},
  volume={38},
  pages={2504819},
  year={2026},
  publisher={Wiley-VCH},
  doi={10.1002/adma.202504819}
}`
    },
    {
      id: "pub-2025-1",
      title: "Operando Synchrotron X-ray Tracking of Lithium Whisker Nucleation Under Dynamic Mechanical Load",
      authors: ["A. Kowalski*", "E. Vance", "M. Tanaka", "R. Mallik†"],
      journal: "Joule",
      year: 2025,
      volume: "9",
      pages: "891–907",
      doi: "10.1016/j.joule.2025.02.011",
      category: "operando",
      featured: false,
      badge: null,
      abstract: "Direct 3D micro-tomography at 50 nm spatial resolution captures the initial nucleation sites of electrodeposited lithium filaments inside pressurized solid cells, uncovering a previously undetected sub-surface creep mechanism.",
      bibtex: `@article{kowalski2025operando,
  title={Operando Synchrotron X-ray Tracking of Lithium Whisker Nucleation Under Dynamic Mechanical Load},
  author={Kowalski, Adam and Vance, Eleanor and Tanaka, Mei and Mallik, Rafsan},
  journal={Joule},
  volume={9},
  pages={891--907},
  year={2025},
  publisher={Cell Press},
  doi={10.1016/j.joule.2025.02.011}
}`
    },
    {
      id: "pub-2025-2",
      title: "Sub-Nanometer Copper Dual-Atom Sites for High-Selectivity Multi-Carbon Generation in Alkaline CO₂ Electrolyzers",
      authors: ["S. Al-Mansoor*", "D. Chen", "P. Mukherjee", "R. Mallik†"],
      journal: "ACS Nano",
      year: 2025,
      volume: "19",
      pages: "12304–12318",
      doi: "10.1021/acsnano.4c16281",
      category: "electrocatalysis",
      featured: false,
      badge: null,
      abstract: "Coordinated Cu-Cu diatomic pairs immobilized in graphitic carbon nitrides showcase >85% Faradaic efficiency toward ethylene at 600 mA/cm², reducing energy penalty by 32% compared to commercial benchmarks.",
      bibtex: `@article{almansoor2025subnano,
  title={Sub-Nanometer Copper Dual-Atom Sites for High-Selectivity Multi-Carbon Generation in Alkaline CO₂ Electrolyzers},
  author={Al-Mansoor, Tariq and Chen, David and Mukherjee, Priya and Mallik, Rafsan},
  journal={ACS Nano},
  volume={19},
  pages={12304--12318},
  year={2025},
  publisher={American Chemical Society},
  doi={10.1021/acsnano.4c16281}
}`
    },
    {
      id: "pub-2024-1",
      title: "Molecular Engineering of Fluorinated Ether Solvents for Ultra-Low Temperature Lithium Batteries",
      authors: ["E. Vance*", "A. Kowalski", "Y. Zhou", "R. Mallik†"],
      journal: "Energy & Environmental Science",
      year: 2024,
      volume: "17",
      pages: "3411–3425",
      doi: "10.1039/D4EE01429B",
      category: "solid-state",
      featured: true,
      badge: "Hot Paper",
      abstract: "Tailoring the solvation sheath of weakly solvating fluorinated ethers enables stable cell operation down to -60 °C, maintaining 78% of rated capacity with excellent cycling reversibility.",
      bibtex: `@article{vance2024molecular,
  title={Molecular Engineering of Fluorinated Ether Solvents for Ultra-Low Temperature Lithium Batteries},
  author={Vance, Eleanor and Kowalski, Adam and Zhou, Yuxi and Mallik, Rafsan},
  journal={Energy \\& Environmental Science},
  volume={17},
  pages={3411--3425},
  year={2024},
  publisher={Royal Society of Chemistry},
  doi={10.1039/D4EE01429B}
}`
    },
    {
      id: "pub-2024-2",
      title: "Graph Neural Network Predictions of Ion Hopping Pathways in Complex Disordered Rocksalt Cathodes",
      authors: ["H. Zhang*", "P. Mukherjee", "R. Mallik†"],
      journal: "npj Computational Materials",
      year: 2024,
      volume: "10",
      pages: "189",
      doi: "10.1038/s41524-024-01362-9",
      category: "ai-materials",
      featured: false,
      badge: null,
      abstract: "We demonstrate an end-to-end framework capturing 0-TM and 1-TM percolation thresholds in cation-disordered rocksalt architectures with accuracy on par with nudged elastic band (NEB) DFT calculations at 10,000x reduced compute cost.",
      bibtex: `@article{zhang2024graph,
  title={Graph Neural Network Predictions of Ion Hopping Pathways in Complex Disordered Rocksalt Cathodes},
  author={Zhang, Hao and Mukherjee, Priya and Mallik, Rafsan},
  journal={npj Computational Materials},
  volume={10},
  pages={189},
  year={2024},
  publisher={Nature Publishing Group},
  doi={10.1038/s41524-024-01362-9}
}`
    }
  ],

  teamMembers: [
    {
      id: "pi-mallik",
      name: "Prof. Rafsan Mallik",
      role: "pi",
      roleTitle: "Principal Investigator & Lab Director",
      degrees: "Ph.D. in Materials Science & Engineering",
      avatarInitials: "RM",
      avatarGradient: "from-blue-600 to-indigo-800",
      researchFocus: "Solid-State Electrochemistry, AI for Functional Materials, Multiscale Energy Interfaces",
      bio: "Prof. Mallik directs the Materials & Energy Storage Innovation Lab (MESIL). His research pioneers electro-chemo-mechanical interfaces and high-throughput machine learning architectures for clean energy decarbonization. Recipient of the Young Investigator Award.",
      scholar: "https://scholar.google.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "rmallik@mesil-lab.org"
    },
    {
      id: "postdoc-vance",
      name: "Dr. Eleanor Vance",
      role: "postdoc",
      roleTitle: "Senior Postdoctoral Fellow",
      degrees: "Ph.D., Cambridge University",
      avatarInitials: "EV",
      avatarGradient: "from-emerald-500 to-teal-700",
      researchFocus: "Polymer-Inorganic Hybrid Electrolytes, Solid-State Interfacial Kinetics",
      bio: "Eleanor leads MESIL's solid-state battery fabrication thrust. Her work specializes in synthetic polymer membranes with dynamic supramolecular bonds to prevent lithium dendrite penetration.",
      scholar: "https://scholar.google.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "evance@mesil-lab.org"
    },
    {
      id: "postdoc-zhang",
      name: "Dr. Hao Zhang",
      role: "postdoc",
      roleTitle: "Postdoctoral Research Fellow",
      degrees: "Ph.D., MIT",
      avatarInitials: "HZ",
      avatarGradient: "from-cyan-500 to-blue-700",
      researchFocus: "Graph Neural Networks, Generative Crystal Modeling, High-Throughput DFT",
      bio: "Hao heads the AI & Computational Materials team at MESIL, designing generative AI algorithms for discovering fast-ion solid conductors and novel electrocatalysts.",
      scholar: "https://scholar.google.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "hzhang@mesil-lab.org"
    },
    {
      id: "phd-almansoor",
      name: "Tariq Al-Mansoor",
      role: "phd",
      roleTitle: "Ph.D. Candidate (Year 4)",
      degrees: "B.S. in Chemical Engineering, KAUST",
      avatarInitials: "TA",
      avatarGradient: "from-amber-500 to-orange-700",
      researchFocus: "Electrocatalytic CO₂ Reduction, In-Situ Differential Electrochemical Mass Spectrometry",
      bio: "Tariq focuses on custom flow-cell electrolyzer design and developing atomic-level catalysts for high-current-density CO₂-to-fuels upgrading.",
      scholar: "https://scholar.google.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "talmansoor@mesil-lab.org"
    },
    {
      id: "phd-kowalski",
      name: "Adam Kowalski",
      role: "phd",
      roleTitle: "Ph.D. Candidate (Year 3)",
      degrees: "M.S. in Physics, ETH Zürich",
      avatarInitials: "AK",
      avatarGradient: "from-violet-500 to-purple-800",
      researchFocus: "Operando Synchrotron Beamline Diagnostics, 3D Nano-CT of Batteries",
      bio: "Adam builds miniaturized optical and X-ray environmental cells to directly observe mechanical stress and void accumulation during high-rate battery cycling.",
      scholar: "https://scholar.google.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "akowalski@mesil-lab.org"
    },
    {
      id: "phd-mukherjee",
      name: "Priya Mukherjee",
      role: "phd",
      roleTitle: "Ph.D. Researcher (Year 2)",
      degrees: "B.Tech in Metallurgical Engineering, IIT Madras",
      avatarInitials: "PM",
      avatarGradient: "from-rose-500 to-pink-700",
      researchFocus: "Sodium-Ion Batteries, Prussian Blue Analogues, High-Entropy Oxides",
      bio: "Priya investigates low-cost, earth-abundant cathode frameworks for grid-scale sodium-ion and potassium-ion energy storage systems.",
      scholar: "https://scholar.google.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "pmukherjee@mesil-lab.org"
    },
    {
      id: "alumni-chen",
      name: "Dr. David Chen",
      role: "alumni",
      roleTitle: "Alumni (Ph.D. 2025)",
      degrees: "Now Staff Scientist at National Renewable Energy Lab (NREL)",
      avatarInitials: "DC",
      avatarGradient: "from-gray-500 to-slate-700",
      researchFocus: "Electrocatalytic Syngas Upgrading",
      bio: "David completed his doctorate at MESIL in 2025, publishing 6 first-author papers on dual-atom electrocatalysis before joining NREL as a research scientist.",
      scholar: "https://scholar.google.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "dchen@alumni.mesil-lab.org"
    }
  ],

  facilities: [
    {
      name: "In-Situ Operando Battery Cycler Array",
      category: "Testing & Diagnostics",
      description: "64-channel high-precision Arbin and BioLogic multichannel potentiostats with integrated temperature and strain sensor monitoring.",
      specs: ["±0.005% Current Accuracy", "EIS capability up to 7 MHz", "-40 °C to +120 °C Chambers"],
      icon: "activity"
    },
    {
      name: "Argon Glovebox Cluster with Integrated Evaporators",
      category: "Synthesis & Assembly",
      description: "Custom triple-box MBraun train (<0.1 ppm H₂O and O₂) directly integrated with ultra-high vacuum thermal evaporation chambers for pristine lithium interface handling.",
      specs: ["H₂O < 0.1 ppm, O₂ < 0.1 ppm", "Four-pocket e-beam & thermal deposition", "Integrated robotic sealers"],
      icon: "box"
    },
    {
      name: "AI & High-Performance Compute Cluster (MESIL-GPU)",
      category: "Computational Infrastructure",
      description: "Dedicated node cluster with 8x NVIDIA H100 SXM5 GPUs for large-scale crystal foundation models, continuous active learning, and quantum chemistry simulations.",
      specs: ["8x NVIDIA H100 80GB", "128 CPU Cores / 1TB RAM", "NVLink 900 GB/s Interconnect"],
      icon: "server"
    },
    {
      name: "Environmental Raman & FTIR Spectrometer",
      category: "Spectroscopy",
      description: "Confocal Renishaw inVia Raman microscope with multi-wavelength laser excitation (532, 633, 785 nm) equipped with electrochemical operando optical cells.",
      specs: ["Sub-micron spatial resolution", "Real-time spectral kinetics", "Hermetic operando cell mount"],
      icon: "zap"
    }
  ],

  news: [
    {
      date: "October 2026",
      tag: "Paper Accepted",
      title: "Nature Energy cover feature on room-temperature solid-state batteries",
      summary: "Our collaborative paper detailing self-healing garnet electrolytes has officially been accepted and selected as the cover feature in Nature Energy!"
    },
    {
      date: "September 2026",
      tag: "Grant Award",
      title: "MESIL awarded $3.2M DOE grant for AI-guided superionic conductors",
      summary: "The Department of Energy's ARPA-E initiative has funded our proposal to deploy generative crystal diffusion for ultra-fast solid electrolytes."
    },
    {
      date: "August 2026",
      tag: "Open Positions",
      title: "Openings: 2 Ph.D. students and 1 Postdoctoral Fellow for Fall 2027",
      summary: "We are actively recruiting enthusiastic researchers with backgrounds in electrochemistry, machine learning, or synchrotron spectroscopy."
    },
    {
      date: "July 2026",
      tag: "Award",
      title: "Dr. Eleanor Vance receives MRS Graduate Student Gold Award",
      summary: "Congratulations to Eleanor for her exceptional presentation and scientific contribution at the Materials Research Society (MRS) Spring Meeting!"
    }
  ]
};
