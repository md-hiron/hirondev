"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem("cookieAccepted");
    if (!consent) setAccepted(false);
  }, []);


  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setAccepted(true);
    // 🔔 Dispatch event to trigger GTM loading
    window.dispatchEvent(new Event("cookieAccepted"));
  };


  if (accepted) return null;

  return (
    <div
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2
        w-[95%] sm:w-auto
        bg-white/5 border border-white/10
        backdrop-blur-lg text-gray-200
        rounded-2xl shadow-lg
        px-6 py-4 flex flex-col sm:flex-row
        items-center gap-3 sm:gap-6 justify-between
        z-[9999] animate-fadeIn
      "
    >
      <p className="text-sm text-center sm:text-left leading-relaxed">
        This website uses cookies to improve your experience and analyze site
        traffic. By clicking <span className="text-cyan-400 font-medium">Accept</span>, you agree to
        the use of cookies for analytics and performance.
      </p>
      <button
        onClick={handleAccept}
        className="
          bg-cyan-500 hover:bg-cyan-400
          text-gray-900 font-semibold
          text-sm px-6 py-2
          rounded-lg transition-all
          shadow-md hover:shadow-cyan-500/30 cursor-pointer
        "
      >
        Accept
      </button>
    </div>
  );
}
