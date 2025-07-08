import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image1 from "../../../../../public/flexible.png";
import Image2 from "../../../../../public/guide.jpg";
import Image3 from "../../../../../public/inforamtion.jpg";
import Image4 from "../../../../../public/nocode.png";

gsap.registerPlugin(ScrollTrigger);

export const WhySection = (): JSX.Element => {
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
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    }
  }, []);


  const featureCards = [
    {
      id: 1,
      title: "Комплексные\nкурсы без кода",
      description:
        "Научитесь создавать\nприложения, автоматизировать\nрабочие процессы и запускать\nIT-проекты с помощью мощных\nплатформ без кода.",
      image: Image4,
    },
    {
      id: 2,
      title: "Пошаговое\nруководство",
      description:
        "Каждый курс включает\nвидеоуроки, шаблоны,\nпримеры и практические задания.",
      image: Image2,
    },
    {
      id: 3,
      title: "Четкая\nинформация",
      description:
        "Каждая страница курса\nсодержит подробные описания, результаты обучения, примеры проектов и\nFAQ.",
      image: Image3,
    },
    {
      id: 4,
      title: "Гибкое обучение",
      description:
        "100% онлайн - учитесь в своем\nтемпе, где угодно и когда угодно",
      image: Image1,
    },
  ];

  return (
    <section
    id="why-section"
      ref={sectionRef}
      className="w-full py-16 md:py-24 px-4 md:px-8 "
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[36px] md:text-[48px] font-bold tracking-[-1.44px] leading-[40px] md:leading-[50px] [font-family:'Sansation',Helvetica] text-white mb-4">
            Почему C7courses
          </h2>
          <p className="text-[20px] md:text-[24px] font-normal tracking-[-0.72px] leading-[22px] md:leading-[26px] [font-family:'Sansation',Helvetica] text-white">
            Развивайтесь с решениями без кода
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-[80%] md:w-[70%] mx-auto">
          {featureCards.map((card) => (
            <Card
              key={card.id}
              className="card-animate bg-gradient-to-br from-indigo-600 to-violet-700 border-none rounded-[20px] md:rounded-[24px] overflow-hidden shadow-xl"
            >
              <CardContent className="p-0 flex flex-col h-full">
                
                {/* Text Content - Centered Vertically */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-center  text-center">
                  <h3 className="text-[28px] md:text-[32px] font-bold tracking-[-0.96px] leading-[30px] md:leading-[34px] [font-family:'Sansation',Helvetica] text-white mb-4 md:mb-6 whitespace-pre-line">
                    {card.title}
                  </h3>
                  <p className="text-[16px] md:text-[18px] font-normal tracking-[-0.54px] leading-[18px] md:leading-[20px] [font-family:'Sansation',Helvetica] text-white whitespace-pre-line">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};