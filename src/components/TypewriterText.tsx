"use client";

import React, { useState, useEffect } from "react";

interface TypewriterTextProps {
  items: string[];
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    let mounted = true;
    
    const handleType = () => {
      if (!mounted) return;
      const currentFullText = items[index % items.length];
      
      if (isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setSpeed(30);
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setSpeed(80);
      }

      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => { if (mounted) setIsDeleting(true); }, 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex(prev => prev + 1);
        setSpeed(300);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [displayText, isDeleting, index, speed, items]);

  return (
    <span className="text-gradient inline-block min-h-[1.2rem]" suppressHydrationWarning>
      {displayText || "\u00A0"}
      <span className="animate-pulse border-r-4 border-primary ml-1"></span>
    </span>
  );
};
