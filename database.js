import images from "./images";

const portfolioProjects = [
  {
    title: "4.2kVA Inverter System",
    location: "Abeokuta, Nigeria",
    description: "High-performance inverter installation providing reliable power backup for residential use.",
    image: images.img_wa0036, 
    specs: "4.2kVA Inverter"
  },
  {
    title: "Commercial Solar Array",
    location: "Lagos, Nigeria",
    description: "Large-scale 5.5kVA dual-inverter system powered by 15kWh Lithium storage and 3.3kW+ Solar Panels.",
    image: images.akams_roof,
    specs: "5.5kVA Inverter (x2) | 420W Panels (x8) | 15kWh Lithium"
  },
  {
    title: "Ibadan Residential Backup",
    location: "Ibadan, Nigeria",
    description: "Efficient power management featuring a Sine Wave inverter and advanced MPPT charge control.",
    image: images.wallSystem,
    specs: "1.5kVA Sine Wave | 30A MPPT Controller"
  },
  {
    title: "Standard Hybrid Setup",
    location: "Regional Office",
    description: "Reliable solar solution utilizing high-capacity tubular batteries for long-lasting energy storage.",
    image: images.wallInstallation,
    specs: "2kVA Inverter | 200W Panels (x4) | 220Ah Tubular Battery"
  },
  {
    title: "10kVA Enterprise Solution",
    location: "Victoria Island, Lagos",
    description: "Full-scale solar plant designed for constant operation in a corporate office environment.",
    image: images.akams_roof,
    specs: "10kVA Hybrid Inverter | 48V Lithium Rack | 540W Mono Panels"
  },
  {
    title: "CCTV Surveillance Grid",
    location: "Abuja, FCT",
    description: "Integrated 24/7 security monitoring with night vision and remote mobile access.",
    image: images.wallInstallation,
    specs: "8-Channel IP Cameras | NVR Storage | Remote App Sync"
  },
  {
    title: "3.5kVA Residential Solar",
    location: "Enugu State",
    description: "Optimized solar solution providing clean energy for essential household electronics.",
    image: images.homeInstallation,
    specs: "3.5kVA Hybrid | 300W Panels (x6) | 200Ah Gel Batteries"
  },
  {
    title: "Industrial Inverter Stack",
    location: "Port Harcourt, Rivers",
    description: "Parallel inverter configuration designed for heavy-duty starting loads and machinery.",
    image: images.inverterSystem,
    specs: "5kVA Parallel Inverters (x3) | High-Voltage MPPT"
  },
  {
    title: "Solar Street Lighting",
    location: "Iseyin, Oyo State",
    description: "Community-based lighting project utilizing all-in-one smart solar street lamps.",
    image: images.roofInstallation,
    specs: "60W Integrated Solar Lamps | Motion Sensors"
  },
  {
    title: "Battery Bank Upgrade",
    location: "Lekki, Lagos",
    description: "System expansion and migration from Lead-Acid to high-efficiency Lithium storage.",
    image: images.wallInverter,
    specs: "10kWh Lithium Stack | Battery Management System (BMS)"
  }
];


const grid = document.getElementById('portfolio-grid');

grid.innerHTML = portfolioProjects.map(project => `
  <div class="reveal-element opacity-0 group bg-white/5 border border-white/10 rounded-super overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2">
    <div class="h-[280px] overflow-hidden relative">
      <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div class="absolute top-4 left-4 bg-akams-yellow/90 backdrop-blur-md text-akams-dark px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
        ${project.location}
      </div>
    </div>

    <div class="p-8">
      <h3 class="text-xl font-bold text-white mb-2">${project.title}</h3>
      <p class="text-white/50 text-sm leading-relaxed mb-6">${project.description}</p>
      
      <div class="bg-white/5 rounded-xl p-4 border border-white/5">
        <span class="text-[10px] text-akams-yellow uppercase font-bold tracking-tighter block mb-1">System Specs:</span>
        <span class="text-xs text-white/80 font-medium">${project.specs}</span>
      </div>
    </div>
  </div>
`).join('');