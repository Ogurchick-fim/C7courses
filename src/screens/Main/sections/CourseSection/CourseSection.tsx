import { ClockIcon, UsersIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";
import { Separator } from "../../../../components/ui/separator";
import { Modal } from "../../../../components/ui/Modal";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { use } from "i18next";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);


// Course data for mapping
const courses = [
  {
    title: "No-Code Разработка",
    description: "Создайте мощные приложения без написания кода благодаря искусственному интеллекту",
    price: "$299",
    duration: "6 недель",
    students: "150 студентов",
  },
  {
    title: "Автоматизация процессов",
    description: "Автоматизируйте бизнес-процессы с помощью нашего ИИ ассистента",
    price: "$399",
    duration: "8 недель",
    students: "250 студентов",
  },
  {
    title: "Создание приложений без кода",
    description: "Создайте мощные приложения без написания кода благодаря искусственному интеллекту",
    price: "$499",
    duration: "10 недель",
    students: "120 студентов",
  },
  {
    title: "Интеграция систем",
    description: "Соединяйте различные платформы и творите то, чего не могли ранее",
    price: "$399",
    duration: "6 недель",
    students: "230 студентов",
  },
];

export const CourseSection = (): JSX.Element => {
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
            start: "top 40%",
          },
        }
      );
    }
  }, []);
  const [openCourse, setOpenCourse] = useState<null | number>(null);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    emailjs
      .send(
        "service_oiltk0k",
        "template_6cywxbx",
        {
          from_name: data.name,
          from_email: data.email,
          title: openCourse !== null && courses[openCourse] ? courses[openCourse].title : "Курс",
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
      className="w-full py-16 md:py-24 px-4 md:px-8 " 
      id="courses-section"
      ref={sectionRef}
    >
      <div className="card-partner max-w-[1200px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[36px] md:text-[48px] font-bold tracking-[-1.44px] leading-[40px] md:leading-[50px] [font-family:'Sansation',Helvetica] text-white mb-4">
            Курсы
          </h2>
          <p className="text-[20px] md:text-[24px] font-normal tracking-[-0.72px] leading-[22px] md:leading-[26px] [font-family:'Sansation',Helvetica] text-white">
            Начните свой путь сегодня
          </p>
        </div>
        
        <ScrollArea className="w-full">
          <div className="flex space-x-8 pb-4 px-4">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="w-[320px] h-[340px] bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[24px] flex-shrink-0 relative shadow-xl"
              >
                <CardContent className="p-5 pt-[20px] h-full flex flex-col justify-between">
                  {/* Title and Description */}
                  <div>
                    <h2 className="[font-family:'Sansation',Helvetica] font-bold text-white text-[28px] leading-tight mb-3">
                      {course.title}
                    </h2>
                    <p className="[font-family:'Sansation',Helvetica] font-normal text-white text-[16px] leading-snug">
                      {course.description}
                    </p>
                  </div>

                  {/* Duration and Students */}
                  <div>
                    <Separator className="bg-white/2 my-4" />
                    <div className="flex items-center justify-between text-[#cacaca] text-[14px] mb-4">
                      
                      <div className="flex items-center">
                        <UsersIcon className="w-4 h-4 text-white mr-1" />
                        {course.students}
                      </div>
                    </div>

                    {/* Price and Button */}
                    <div className="flex items-center justify-between">
                      <span className="[font-family:'Sansation',Helvetica] font-bold text-white text-[24px]">
                        {course.price}
                      </span>
                      <Button
                        className="w-[150px] h-[44px] bg-gradient-to-r from-[#676ff4] to-[#6b60e7] hover:from-[#5d65ea] hover:to-[#6156dd] text-white px-4 py-2 rounded-lg transition duration-300 hover:-translate-y-1 hover:scale-105"
                        onClick={() => setOpenCourse(index)}
                      >
                        <span className="[font-family:'Sansation',Helvetica] text-white text-[16px]">
                          Записаться
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {/* Modal */}
        <Modal isOpen={openCourse !== null} onClose={() => setOpenCourse(null)}>
          {openCourse !== null && (
            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-center text-white">
                Запись на курс: {courses[openCourse].title}
              </h2>
              <p className="text-gray-300 mb-6 text-center">{courses[openCourse].description}</p>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="border border-gray-600 rounded-lg px-4 py-3 bg-slate-800 text-white"
                  {...register("name", { required: true })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-600 rounded-lg px-4 py-3 bg-slate-800 text-white"
                  {...register("email", { required: true })}
                />
                
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#676ff4] to-[#6b60e7] hover:from-[#5d65ea] hover:to-[#6156dd] text-white px-4 py-3 rounded-lg transition duration-300 font-medium mt-2"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};