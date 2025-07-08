import React, { useEffect, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ContactSection = (): JSX.Element => {

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
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  const contactInfo = [
    {
      id: 1,
      title: "support@c7courses.com",
      subtitle: "support@c7courses.com",
      icon: "/group.png",
      alt: "Email icon",
    },
    {
      id: 2,
      title: "+996706677297",
      subtitle: "+996706677297",
      icon: "/vector-3.svg",
      alt: "Phone icon",
    },
    {
      id: 3,
      title: "Улица Юнусалиева, 80,\nololoPlanet Коворкинг-центр",
      subtitle: "Улица Юнусалиева, 80,\nololoPlanet Коворкинг-центр",
      icon: "/vector-1.svg",
      alt: "Location icon",
    },
  ];

  const formFields = [
    { id: 1, label: "Ваше имя", type: "text" },
    { id: 2, label: "Электронная почта", type: "email" },
    { id: 3, label: "Номер телефона", type: "tel" },
  ];

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
  emailjs
    .send(
      "service_rd1ixqn",
      "template_3hwy6az",
      {
        name: data.name,
        email: data.email,
        message: data.message,
        to_email:"hustledigital070@gmail.com"
      },
      "gV87tEjzaBDjcbGs1"
    )
    .then(() => {
      alert("✅ Сообщение отправлено успешно!");
      reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("❌ Ошибка при отправке сообщения.");
    });
};

  return (
    <section
      className="w-full max-w-[1200px] mx-auto py-8 md:py-16 px-4"
      id="contact-section"
      ref={sectionRef}
    >
      <div className="card-animate x`flex flex-col items-center mb-10 text-center">
        <h2 className="text-[36px] sm:text-[48px] md:text-[69.5px] font-bold tracking-[-2.09px] leading-tight [font-family:'Sansation',Helvetica] text-white">
          Какие у вас впечатление :D ?
        </h2>
        <p className="text-[20px] sm:text-[28px] md:text-[34.5px] font-normal tracking-[-1.03px] leading-snug [font-family:'Sansation',Helvetica] text-white mt-4 sm:mt-6">
          Есть вопросы? Мы здесь, чтобы помочь!
        </p>
      </div>

      
       

        {/* Right - Form */}
        <div className="card-animate w-full md:max-w-[520px] bg-[#9747ff] p-6 sm:p-8 md:p-10 m-auto rounded-[60px]" >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-1">
              <label className="block font-bold text-white text-[16px] sm:text-[18px]">
                Ваше имя
              </label>
              <Input
                {...register("name", { required: true })}
                type="text"
                placeholder="Иван"
                className="h-[44px] sm:h-[48px] border-2 border-[#ff76d6] bg-transparent text-white"
              />
            </div>
            <div className="space-y-1">
              <label className="block font-bold text-white text-[16px] sm:text-[18px]">
                Электронная почта
              </label>
              <Input
                {...register("email", { required: true })}
                type="email"
                placeholder="example@mail.com"
                className="h-[44px] sm:h-[48px] border-2 border-[#ff76d6] bg-transparent text-white"
              />
            </div>
            <div className="space-y-1">
              <label className="block font-bold text-white text-[16px] sm:text-[18px]">
                Сообщение
              </label>
              <textarea
                {...register("message", { required: true })}
                placeholder="Введите ваше сообщение"
                rows={5}
                className="w-full px-3 py-2 border-2 border-[#ff76d6] bg-transparent text-white rounded-[6px] placeholder:text-gray-300 resize-none"
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full h-[48px] sm:h-[52px] mt-4 sm:mt-6 bg-[linear-gradient(266deg,_rgba(103,111,244,1)_1%,_rgba(107,96,231,1)_100%)] hover:bg-[linear-gradient(266deg,_rgba(93,101,234,1)_1%,_rgba(97,86,221,1)_100%)] text-white px-4 py-2 rounded-lg transition duration-300 rounded-[6px] text-[16px] sm:text-[18px] font-bold text-white"
            >
              Отправить сообщение
            </Button>
          </form>
        </div>
     
    </section>
  );
};
