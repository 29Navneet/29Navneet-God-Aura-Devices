/**
 * GodAura Devices — Site Configuration
 * Central config for future API/backend integration
 */
const GodAuraConfig = {
  brand: {
    name: "GodAura Devices",
    tagline: "Transform Your Mind Through Intelligent Meditation",
    yearFounded: 2022,
    phone: "+91 9425022443",
    instagram: "https://www.instagram.com/godauradevices?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },

  /**
   * Community gallery — replace these placeholder images with real community photos when ready.
   */
  gallery: [
    { src: "assets/images/gallery-placeholder-1.svg", alt: "Person meditating with a GodAura wearable" },
    { src: "assets/images/gallery-placeholder-2.svg", alt: "GodAura wearable beside calming sleep meditation waves" },
    { src: "assets/images/gallery-placeholder-3.svg", alt: "GodAura wearable in a calm focus routine" },
  ],

  // API endpoints — wire up when backend is ready
  api: {
    baseUrl: "/api/v1",
    auth: {
      login: "/auth/login",
      confirmCode: "/auth/confirm",
      google: "/auth/google",
    },
    products: "/products",
    research: "/research",
  },

  routes: {
    home: "index.html#home",
    about: "index.html#about",
    research: "index.html#research",
    products: "index.html#products",
    learnMore: "learn-more.html",
    achievements: "achievements.html",
    allResearches: "all-researches.html",
  },

  nav: {
    center: [
      { label: "Home", href: "#home", id: "home" },
      { label: "About Us", href: "#about", id: "about" },
      { label: "Research", href: "#research", id: "research" },
      { label: "Products", href: "#products", id: "products" },
    ],
  },

  products: [
    {
      id: "aura-pro",
      name: "GodAura Pro X1",
      shortDesc: "Flagship neural-sync headband with adaptive biofeedback.",
      price: "$349",
      image: "assets/images/product-pro.png",
      features: [
        "EEG + HRV dual-sensor array",
        "AI-guided session adaptation",
        "12-hour battery life",
        "Bluetooth 5.3 & Wi-Fi sync",
        "6 meditation modes + custom",
      ],
      specs: {
        Weight: "42g",
        Battery: "12 hours",
        Connectivity: "BT 5.3, Wi-Fi",
        Sensors: "EEG, HRV, Temperature",
        Modes: "Focus, Sleep, Calm, Deep, Breath, Custom",
      },
    },
    {
      id: "aura-lite",
      name: "GodAura Lite S2",
      shortDesc: "Essential mindfulness companion for daily practice.",
      price: "$199",
      image: "assets/images/product-lite.png",
      features: [
        "HRV-focused wellness tracking",
        "Guided audio library (500+ sessions)",
        "8-hour battery",
        "Water-resistant design",
        "4 core meditation modes",
      ],
      specs: {
        Weight: "38g",
        Battery: "8 hours",
        Connectivity: "Bluetooth 5.2",
        Sensors: "HRV, Motion",
        Modes: "Calm, Focus, Sleep, Breath",
      },
    },
    {
      id: "aura-elite",
      name: "GodAura Elite Neural",
      shortDesc: "Clinical-grade research edition for power users.",
      price: "$549",
      image: "assets/images/product-elite.svg",
      features: [
        "Research-grade EEG (8-channel)",
        "Real-time brainwave visualization",
        "Cloud analytics dashboard",
        "16-hour extended battery",
        "10 meditation + neurofeedback modes",
      ],
      specs: {
        Weight: "48g",
        Battery: "16 hours",
        Connectivity: "BT 5.3, Wi-Fi, USB-C",
        Sensors: "8-ch EEG, HRV, GSR",
        Modes: "All Pro modes + Research, Neurofeedback",
      },
    },
  ],
};

// Export for modules; attach to window for script tags
if (typeof window !== "undefined") {
  window.GodAuraConfig = GodAuraConfig;
}
