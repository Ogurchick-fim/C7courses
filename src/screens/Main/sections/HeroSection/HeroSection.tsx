import { ChevronDownIcon } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import i18next from "i18next";
import { Button } from "../../../../components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Add this import
import "../../../../styles/globe.scss";
import ParticleRing from "../../../../components/ui/ParticleRing";
import Example from "../../../../components/ui/FloatingPhone";
import { motion } from "framer-motion";
import { Header } from "../../../../components/ui/Header";

// Register all GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);

const languages = [
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
  { code: "kg", label: "Кыргызча" },  
];

export const HeroSection = (): JSX.Element => {
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18next.language || "ru");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  // Fixed scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Use direct position calculation
      const headerHeight = 70;
      const targetPosition = element.offsetTop - headerHeight;
      
      gsap.to(window, {
        duration: 1.5,
        scrollTo: targetPosition, // Use numeric position
        ease: "power2.inOut",
        overwrite: "auto"
      });
    }
  };

  // Animation effects
  useEffect(() => {
    const headings = gsap.utils.toArray(".letter-animate");
    
    headings.forEach((heading) => {
      const letters = (heading as HTMLElement).querySelectorAll("span");
      gsap.fromTo(
        letters,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.out(1.7)",
          repeat: 1,
          yoyo: false,
          repeatDelay: 5.5,
        }
      );
    });

    if (paragraphRef.current) {
      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  // Word hover effect
  useEffect(() => {
    if (!textRef.current) return;
    
    const words = Array.from(textRef.current.querySelectorAll(".word"));
    const onPointerMove = (e: PointerEvent) => {
      words.forEach((word) => {
        const rect = word.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          gsap.to(word, {
            scale: 1 + (150 - dist) / 600,
            color: "#ff76d6",
            duration: 0.3,
            ease: "power1.out",
          });
        } else {
          gsap.to(word, {
            scale: 1,
            color: "#fff",
            duration: 0.3,
            ease: "power1.out",
          });
        }
      });
    };

    const textBlock = textRef.current;
    textBlock.addEventListener("pointermove", onPointerMove);

    textBlock.addEventListener("pointerleave", () => {
      words.forEach((word) => {
        gsap.to(word, { scale: 1, color: "#fff", duration: 0.3 });
      });
    });

    return () => {
      textBlock.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  // UI handlers
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const selectLanguage = (langCode: string) => {
    i18next.changeLanguage(langCode);
    setCurrentLang(langCode);
    setDropdownOpen(false);
  };

  // Text content
  const text = "C7courses";
  const coursesText = "Курсы";
  const welcomeText = "Добро пожаловать";
  const c7courses = "в С7courses";
  const descriptionText = "Мы верим, что технологии должны быть доступны всем вне зависимости от технической подготовки.";

  return (
    <section className="relative w-full h-[100vh] ">
      {/* Particle Ring Background */}
      
      {/* Content Container */}
      <div className="container max-w-[1200px] mx-auto h-full flex flex-col py-8 md:py-16 px-4 relative z-10">
        

        {/* Top Bar */}
        
        {/* Main Content */}
        <div className="flex-grow flex justify-between items-center flex-col md:flex-row gap-8 md:gap-16">
          <div className="max-w-full md:max-w-[600px] ">
            <h2 className="letter-animate [font-family:'Sansation',Helvetica] font-bold text-[#ff76d6] text-[36px] sm:text-[48px] md:text-[64px] tracking-[-1.92px] leading-[42px] sm:leading-[52px] md:leading-[68px] mb-6 sm:mb-8 md:mb-12">
              {welcomeText.split("").map((char, idx) => (
                <span
                  key={`w-${idx}`}
                  className="inline-block"
                  style={{ minWidth: char === " " ? "0.5ch" : "auto" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}{" "}
              <br />
              {c7courses.split("").map((char, idx) => (
                <span
                  key={`c7-${idx}`}
                  className="inline-block"
                  style={{ minWidth: char === " " ? "0.5ch" : "auto" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>

            <p
              ref={textRef}
              className="letter-animate font-gothic font-normal text-white text-[14px] sm:text-[20px] md:text-[42px] tracking-[-1.26px] leading-[30px] sm:leading-[36px] md:leading-[44px] mb-6 sm:mb-8 md:mb-16"
            >
              {descriptionText.split(" ").map((word, idx) => (
                <span
                  key={`word-${idx}`}
                  className="inline-block word mr-2"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {word}
                </span>
              ))}
            </p>

                        
          {/* Main Content Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
          
          
          
        </div>

      </div>
      <div className="mt-8 md:mt-0 flex justify-center items-center">
        <Example />
          </div>
        </div>
      </div>
    </section>
  );
};