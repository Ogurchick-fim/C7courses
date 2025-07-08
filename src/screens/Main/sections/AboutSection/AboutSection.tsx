
import { Card, CardContent } from "../../../../components/ui/card";
import React, { useState ,useRef, useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import i18next from "i18next";

gsap.registerPlugin(ScrollTrigger);

// О нас секция, которая представляет информацию о компании и ее миссии
export const AboutSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".card-animate");

    if (cards && sectionRef.current) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 40%",
          },
        }
      );
    }
  }, []);
  // Data for feature cards
  const features = [
    {
      id: 1,
      title: "Наше видение",
      description:
        "Демократизировать технологии и дать возможность людям и бизнесу создавать без кодирования",
      icon: "/---icon--bookmark-icon-.png",
      alt: "Icon bookmark icon",
    },
    {
      id: 2,
      title: "Команда экспертов",
      description:
        "Наша команда состоит из опытных профессионалов, увлеченных разработкой без кода",
      icon: "/---icon--user-circle-icon--4.png",
      alt: "Icon user circle",
    },
    {
      id: 3,
      title: "Качественное обучение",
      description:
        "Мы предоставляем комплексных, практические и актуальные учебные материалы",
      icon: "/---icon--star-outline-.png",
      alt: "Icon star outline",
    },
    {
      id: 4,
      title: "Опыт в индустрии",
      description: "Годы опыта в реализации успешных решений без кода",
      icon: "/---icon--medal-.png",
      alt: "Icon medal",
    },
  ];

  return (
    <section className=" w-full py-6 md:py-8 px-4 md:px-8" id="about-section" ref ={sectionRef}>
    
      <div className="card-animate max-w-[1200px] mx-auto">
        <h2 className="text-[64.5px] font-bold tracking-[-2.09px] leading-[72.9px] [font-family:'Sansation',Helvetica] text-white text-center mb-4">
          О нас
        </h2>

        <p className="text-[29.46px] font-normal tracking-[-1.03px] leading-[36.2px] [font-family:'Sansation',Helvetica] text-white text-center mb-16">
          Мы стараемся сделать технологии доступными для всех через решения без
          кода
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Features */}
          <div className="flex-1 space-y-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex gap-6 items-start">
                <div className="w-[100px] h-[100px] bg-[#9747ff] rounded-[10.15px] flex items-center justify-center shrink-0">
                  <img
                    className="w-auto h-auto max-w-[70%] max-h-[70%]"
                    alt={feature.alt}
                    src={feature.icon}
                  />
                </div>
                <div>
                  <h3 className="text-[29.3px] font-bold tracking-[-1.03px] leading-[36.0px] [font-family:'Sansation',Helvetica] text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[16.5px] font-normal tracking-[-0.59px] leading-[20.5px] [font-family:'Sansation',Helvetica] text-white">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Experience Card */}
          <div className="flex-1">
            <Card className="w-full h-full bg-[#d9d9d9] rounded-[55.39px] relative overflow-hidden border-0">
              <CardContent className="p-0 relative h-full">
                <video
                  className="w-full h-full object-cover rounded-[55.39px]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="../public/c7_videoundefined.mp4"
                />
                
              </CardContent>
              
            </Card>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-[461px] h-[122px] bg-[#ff76d6] rounded-[44.38px] flex items-center justify-between px-12 mb-[-150px]">
                  <div className="font-bold text-[98.8px] tracking-[-2.96px] leading-[103.6px] [font-family:'Sansation',Helvetica] text-white">
                    5+
                  </div>
                  <div className="font-normal text-[31.8px] tracking-[-0.95px] leading-[33.4px] [font-family:'Sansation',Helvetica] text-white">
                    Лет
                    <br />
                    превосходства
                  </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};
