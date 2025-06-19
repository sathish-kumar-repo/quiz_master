// Google AdSense Configuration
export const ADSENSE_CONFIG = {
  // Replace with your actual Google AdSense publisher ID
  publisherId: "ca-pub-1234567890123456",

  // Ad unit configurations for different placements
  adUnits: {
    quizSidebar: {
      slot: "1234567890",
      format: "auto",
      responsive: true,
      style: { display: "block", width: "100%", height: "280px" },
    },
    quizBottom: {
      slot: "0987654321",
      format: "auto",
      responsive: true,
      style: { display: "block", width: "100%", height: "250px" },
    },
    homeLarge: {
      slot: "1122334455",
      format: "auto",
      responsive: true,
      style: { display: "block", width: "100%", height: "320px" },
    },
    mobileInline: {
      slot: "5544332211",
      format: "fluid",
      layoutKey: "-gw-1+2a-9x+5c",
      style: { display: "block", width: "100%", height: "200px" },
    },
  },

  // Test mode - set to false in production
  testMode: true,

  // Ad refresh settings
  refreshInterval: 30000, // 30 seconds
  maxRefreshes: 5,
};

// AdSense script loading utility
export const loadAdSenseScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if script already exists
    if (document.querySelector(`script[src*="adsbygoogle.js"]`)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.crossOrigin = "anonymous";
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CONFIG.publisherId}`;

    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load AdSense script"));

    document.head.appendChild(script);
  });
};
