"use client";
import { useState, useEffect } from "react";
import { ArrowUpIcon } from "@phosphor-icons/react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="right-4 bottom-4 z-50 fixed">
      {isVisible && (
        <button
          onClick={scrollToTop}
          title="Voltar ao topo"
          className="relative bg-blue-500 hover:bg-blue-700 shadow-lg p-2 rounded-full text-white transition-colors"
        >
          <ArrowUpIcon size={24} />
        </button>
      )}
    </div>
  );
}
