import React from "react";
import { Button } from "./button";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  return (
    <header className="w-full flex flex-col md:flex-row justify-between items-center py-4 px-6 bg-transparent z-50">
      {/* Logo */}
      <div className="text-white text-2xl font-bold tracking-wide cursor-pointer">
        C7courses
      </div>

      {/* Navigation */}
      <nav className="mt-4 md:mt-0">
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-white text-lg font-medium">
          <li className="cursor-pointer hover:text-indigo-400" onClick={() => scrollToSection("about-section")}>
            О нас
          </li>
          <li className="cursor-pointer hover:text-indigo-400" onClick={() => scrollToSection("courses-section")}>
            Курсы
          </li>
          <li className="cursor-pointer hover:text-indigo-400" onClick={() => scrollToSection("contact-section")}>
            Контакты
          </li>
        </ul>
      </nav>

      {/* CTA Button */}
      <div className="mt-4 md:mt-0">
        <Button
          onClick={() => scrollToSection("contact-section")}
          className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-2 text-white hover:scale-105 transition-transform duration-200"
        >
          Связаться с нами
        </Button>
      </div>
    </header>
  );
};