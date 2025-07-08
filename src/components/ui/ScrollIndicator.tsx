// components/ui/ScrollIndicator.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ScrollIndicator = ({ targetId }: { targetId: string }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const target = document.getElementById(targetId);
      if (target) {
        const rect = target.getBoundingClientRect();
        setIsVisible(rect.top > window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetId]);

  const scrollToTarget = () => {
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      animate={{ y: [0, 10, 0], opacity: isVisible ? 1 : 0 }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      onClick={scrollToTarget}
      initial={{ opacity: 1 }}
    >
      <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center p-1">
        <motion.div
          className="w-2 h-2 bg-white rounded-full"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </div>
    </motion.div>
  );
};