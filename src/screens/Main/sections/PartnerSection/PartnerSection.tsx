import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { use } from "i18next";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export const PartnerSection = (): JSX.Element => {

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".card-partner");

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
            start: "top 80%",
          },
        }
      );
    }
  }, []);
  
  const wordRef = useRef<HTMLDivElement | null>(null);
  const [animation, setAnimation] = useState<gsap.core.Animation | null>(null);

  useEffect( () => {
    if (!wordRef.current) return;

    const split = new SplitText(wordRef.current, { type: "words" });

    if (animation) {
      animation.revert();
    }

    const newAnim = gsap.from(split.words, {
      y: -100,
      opacity: 0,
      rotation: "random(-80, 80)",
      duration: 0.7,
      ease: "back",
      stagger: 0.15,
      scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
    });

    setAnimation(newAnim);
  }, [wordRef]);



  const wordRef2 = useRef<HTMLDivElement | null>(null);

  useEffect( () => {
    if (!wordRef2.current) return;

    const split = new SplitText(wordRef2.current, { type: "words" });

    if (animation) {
      animation.revert();
    }

    const newAnim = gsap.from(split.words, {
      y: -100,
      opacity: 0,
      rotation: "random(-80, 80)",
      duration: 1.5,
      ease: "back",
      stagger: 0.15,
      scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
    });

    setAnimation(newAnim);
  }, [wordRef]);
  // Partner logos data
  const partners = [
    { id: 1, logo: "/image-6.png", name: "Partner 1" },
    { id: 2, logo: "/image-7.png", name: "Partner 2" },
    { id: 3, logo: "/image-9.png", name: "Partner 3" },
    { id: 4, logo: "/image-10.png", name: "Partner 4" },
  ];

  return (
    <section className="fw-full max-w-[1200px] mx-auto py-8 md:py-16 px-4" ref={sectionRef} >
      <div className="card-partner text-center mb-8">
        <h2   className="letter-animate text-[36px] md:text-[48px] font-bold tracking-[-1.44px] leading-[40px] md:leading-[50px] [font-family:'Sansation',Helvetica] text-white mb-4 m-auto text-center">
        Наши технологические партнеры
      </h2>

      <p  className="text-[16px] md:text-[18px] font-normal tracking-[-0.54px] leading-[18px] md:leading-[20px] [font-family:'Sansation',Helvetica] text-white whitespace-pre-line m-auto text-center max-w-[600px]">
        Мы сотрудничаем с ведущими no-code платформами, чтобы предоставить
        лучшие инструменты
      </p>

      <div className="flex justify-center items-center gap-8 mt-[60px] flex-wrap"
      >
        {partners.map((partner) => (
          <div
            key={partner.id}
            className=" flex items-center justify-center w-[180px] h-[180px] bg-white rounded-full overflow-hidden"
          >
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
      </div>
      
    </section>
  );
};
