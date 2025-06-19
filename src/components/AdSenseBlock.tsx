import React, { useEffect, useRef, useState } from "react";
import { Eye, RefreshCw } from "lucide-react";
import { ADSENSE_CONFIG, loadAdSenseScript } from "../config/adsConfig";

interface AdSenseBlockProps {
  className?: string;
  size?: "small" | "medium" | "large" | "mobile";
  placement?: "sidebar" | "bottom" | "home" | "mobile";
  refreshKey?: string | number; // Used to force re-render for new quiz questions
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdSenseBlock: React.FC<AdSenseBlockProps> = ({
  className = "",
  size = "medium",
  placement = "sidebar",
  refreshKey = 0,
}) => {
  const adRef = useRef<HTMLDivElement>(null);
  const [adLoaded, setAdLoaded] = useState(false);
  const [adError, setAdError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const sizeClasses = {
    small: "h-24",
    medium: "h-32",
    large: "h-48",
    mobile: "h-32",
  };

  const getAdConfig = () => {
    switch (placement) {
      case "sidebar":
        return ADSENSE_CONFIG.adUnits.quizSidebar;
      case "bottom":
        return ADSENSE_CONFIG.adUnits.quizBottom;
      case "home":
        return ADSENSE_CONFIG.adUnits.homeLarge;
      case "mobile":
        return ADSENSE_CONFIG.adUnits.mobileInline;
      default:
        return ADSENSE_CONFIG.adUnits.quizSidebar;
    }
  };

  const loadAd = async () => {
    if (!adRef.current) return;

    setIsLoading(true);
    setAdError(false);

    try {
      // Load AdSense script if not already loaded
      await loadAdSenseScript();

      // Clear previous ad content
      adRef.current.innerHTML = "";

      const adConfig = getAdConfig();

      // Create ad element
      const adElement = document.createElement("ins");
      adElement.className = "adsbygoogle";
      adElement.style.display = adConfig.style.display;
      adElement.style.width = adConfig.style.width;
      adElement.style.height = adConfig.style.height;
      adElement.setAttribute("data-ad-client", ADSENSE_CONFIG.publisherId);
      adElement.setAttribute("data-ad-slot", adConfig.slot);
      adElement.setAttribute("data-ad-format", adConfig.format);

      // if (adConfig.responsive) {
      //   adElement.setAttribute("data-full-width-responsive", "true");
      // }
      if ("responsive" in adConfig && adConfig.responsive) {
        adElement.setAttribute("data-full-width-responsive", "true");
      }
      // if (adConfig.layoutKey) {
      //   adElement.setAttribute("data-ad-layout-key", adConfig.layoutKey);
      // }
      if ("layoutKey" in adConfig && adConfig.layoutKey) {
        adElement.setAttribute("data-ad-layout-key", adConfig.layoutKey);
      }

      // Add test attributes in test mode
      if (ADSENSE_CONFIG.testMode) {
        adElement.setAttribute("data-adtest", "on");
      }

      adRef.current.appendChild(adElement);

      // Initialize AdSense
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }

      setAdLoaded(true);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to load AdSense ad:", error);
      setAdError(true);
      setIsLoading(false);
    }
  };

  // Load ad when component mounts or refreshKey changes
  useEffect(() => {
    const timer = setTimeout(() => {
      loadAd();
    }, 100); // Small delay to ensure DOM is ready

    return () => clearTimeout(timer);
  }, [refreshKey, placement]);

  const handleRefresh = () => {
    loadAd();
  };

  if (isLoading) {
    return (
      <div
        className={`
        ${sizeClasses[size]} w-full 
        bg-gradient-to-r from-slate-100 to-slate-200 
        dark:from-slate-800 dark:to-slate-700
        border border-slate-200 dark:border-slate-600
        rounded-lg flex items-center justify-center
        ${className}
      `}
      >
        <div className="text-center text-slate-500 dark:text-slate-400">
          <RefreshCw className="w-6 h-6 mx-auto mb-2 animate-spin" />
          <p className="text-sm font-medium">Loading Ad...</p>
        </div>
      </div>
    );
  }

  if (adError) {
    return (
      <div
        className={`
        ${sizeClasses[size]} w-full 
        bg-gradient-to-r from-red-50 to-red-100 
        dark:from-red-900/20 dark:to-red-800/20
        border border-red-200 dark:border-red-700
        rounded-lg flex items-center justify-center
        ${className}
      `}
      >
        <div className="text-center text-red-600 dark:text-red-400">
          <Eye className="w-6 h-6 mx-auto mb-2" />
          <p className="text-sm font-medium">Ad Failed to Load</p>
          <button
            onClick={handleRefresh}
            className="text-xs mt-1 px-2 py-1 bg-red-100 dark:bg-red-800 rounded hover:bg-red-200 dark:hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`
      ${sizeClasses[size]} w-full 
      bg-white dark:bg-slate-800
      border border-slate-200 dark:border-slate-700
      rounded-lg overflow-hidden
      ${className}
    `}
    >
      <div
        ref={adRef}
        className="w-full h-full flex items-center justify-center"
      />

      {/* Fallback content if ad doesn't load */}
      {!adLoaded && !isLoading && (
        <div className="w-full h-full flex items-center justify-center text-slate-500 dark:text-slate-400">
          <div className="text-center">
            <Eye className="w-6 h-6 mx-auto mb-2 opacity-50" />
            <p className="text-sm font-medium">Advertisement</p>
            <button
              onClick={handleRefresh}
              className="text-xs mt-1 px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdSenseBlock;
