import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { use } from "i18next";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export const MissionSection = (): JSX.Element => {
  const wordRef = useRef<HTMLDivElement | null>(null);
  const [animation, setAnimation] = useState<gsap.core.Animation | null>(null);

  useEffect( () => {
    if (!wordRef.current) return;

    const split = new SplitText(wordRef.current, { type: "lines" });


    if (animation) {
      animation.revert();
    }

    const newAnim = gsap.from(split.lines, {
      
     rotationX: -100,
    transformOrigin: "50% 50% -160px",
    opacity: 0,
    duration: 0.8, 
    ease: "power3",
    stagger: 0.25,
      scrollTrigger: {
            trigger: wordRef.current,
            start: "top 80%",
          },
    });

    setAnimation(newAnim);
  }, [wordRef]);

  return (
    <section className="fw-full max-w-[1200px] mx-auto py-8 md:py-16 px-4 mt-[150px] mb-[150px]"  ref={wordRef}>
      <h2 className="font-bold text-[65.5px] text-center tracking-[-2.09px] leading-[72.9px] [font-family:'Sansation',Helvetica] text-white">
        Наша миссия
      </h2>

      <p className="[font-family:'Sansation',Helvetica] font-normal text-white text-[30.5px] text-center tracking-[-1.03px] leading-[36.2px] mt-[20px]">
        Сделать IT-решения доступными для каждого человека и бизнеса - быстро,
        <br />
        просто и эффективно
      </p>
    </section>
  );
};
