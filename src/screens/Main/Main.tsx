import React from "react";
import { MissionSection } from "./sections/MissionSection";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { FooterSection } from "./sections/FooterSection";
import { WhySection } from "./sections/WhySection";
import { CourseSection } from "./sections/CourseSection";
import { PartnerSection } from "./sections/PartnerSection";
import { AboutSection } from "./sections/AboutSection";
import { Header } from "../../components/ui/Header";
import ParticleRing from "../../components/ui/ParticleRing";

export const Main = (): JSX.Element => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  
  const partnerLogos = [
    {
      src: "/image-6.png",
      alt: "Partner logo 1",
      width: "180px",
      height: "180px",
      hasBackground: false,
    },
    {
      src: "/image-7.png",
      alt: "Partner logo 2",
      width: "180px",
      height: "180px",
      hasBackground: false,
    },
    {
      src: "/image-9.png",
      alt: "Partner logo 3",
      width: "240px",
      height: "180px",
      hasBackground: false,
    },
    {
      src: "/image-10.png",
      alt: "Partner logo 4",
      width: "140px",
      height: "140px",
      hasBackground: true,
      bgColor: "#e54269",
    },
  ];
  
  return (
    <div className="flex flex-col items-center w-full relative min-h-screen">
      {/* Particle Ring as Background */}
      <div className="fixed inset-0 w-full h-full -z-10 bg-black">
        <ParticleRing />
      </div>
      
      {/* Background overlay to darken particles */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-b  to-black/90 -z-10"></div>
      
      {/* Main content container */}
      <div className="bg-transparent w-full max-w-[1440px] relative z-10 flex-grow">
        {/* Header */}
        <Header scrollToSection={scrollToSection} />
        
        {/* Page sections */}
        <HeroSection />
        <WhySection />
        <section id="courses-section"><CourseSection /></section>
        <PartnerSection />
        <section id="about-section"><AboutSection /></section>
        <MissionSection />
        <section id="contact-section"><ContactSection /></section>
      </div>
      
      {/* Full-width Footer */}
      <div className="w-full relative z-10">
        <FooterSection />
      </div>
    </div>
  );
};