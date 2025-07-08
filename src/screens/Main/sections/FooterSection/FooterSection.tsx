import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  const companyLinks = [
    { title: "О нас", href: "#" },
    { title: "Контакты", href: "#" },
    { title: "Blog", href: "#" },
  ];

  const courseLinks = [
    { title: "No-Code Разработка", href: "#" },
    { title: "Автоматизация процессов", href: "#" },
    { title: "Создание приложений без кода", href: "#" },
    { title: "Интеграйия систем", href: "#" },
  ];

  const contactInfo = {
    email: "support@c7courses.com",
    phone: "+996706677297",
    address: "Улица Юнусалиева, 80, ololoPlanet Коворкинг-центр",
  };

  return (
    <footer className="w-full py-8 md:py-10 text-white bg-[#28104E]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <h3 className="text-[20px] md:text-[24px] tracking-[-0.6px] leading-[22px] md:leading-[26px] font-bold [font-family:'Sansation',Helvetica]">
              C7courses
            </h3>
            <Separator className="w-full md:w-[280px]" />
            <p className="text-[16px] md:text-[18px] tracking-[-0.48px] leading-[18px] md:leading-[20px] [font-family:'Sansation',Helvetica] font-normal">
              Развиваем новое поколение
              <br />
              решениям без кода
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-[20px] md:text-[24px] tracking-[-0.6px] leading-[22px] md:leading-[26px] font-bold [font-family:'Sansation',Helvetica]">
              Курсы
            </h3>
            <Separator className="w-full md:w-[280px]" />
            <div className="flex flex-col space-y-3">
              {courseLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[16px] md:text-[18px] tracking-[-0.48px] leading-[18px] md:leading-[20px] [font-family:'Sansation',Helvetica] font-normal hover:text-gray-300 transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-[20px] md:text-[24px] tracking-[-0.6px] leading-[22px] md:leading-[26px] font-bold [font-family:'Sansation',Helvetica]">
              Компания
            </h3>
            <Separator className="w-full md:w-[280px]" />
            <div className="flex flex-col space-y-3">
              {companyLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[16px] md:text-[18px] tracking-[-0.48px] leading-[18px] md:leading-[20px] [font-family:'Sansation',Helvetica] font-normal hover:text-gray-300 transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-[20px] md:text-[24px] tracking-[-0.6px] leading-[22px] md:leading-[26px] font-bold [font-family:'Sansation',Helvetica]">
              Контакты
            </h3>
            <Separator className="w-full md:w-[280px]" />
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <MailIcon className="w-5 h-5" />
                <span className="text-[16px] md:text-[18px] tracking-[-0.48px] leading-[18px] md:leading-[20px] [font-family:'Sansation',Helvetica] font-normal">
                  {contactInfo.email}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5" />
                <span className="text-[16px] md:text-[18px] tracking-[-0.48px] leading-[18px] md:leading-[20px] [font-family:'Sansation',Helvetica] font-normal">
                  {contactInfo.phone}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-5 h-5" />
                <span className="text-[16px] md:text-[18px] tracking-[-0.48px] leading-[18px] md:leading-[20px] [font-family:'Sansation',Helvetica] font-normal">
                  {contactInfo.address.split(", ").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < contactInfo.address.split(", ").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Separator className="w-full" />
          <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-4 md:gap-0">
            <div className="text-[14px] md:text-[16px] tracking-[-0.42px] leading-[16px] md:leading-[18px] [font-family:'Sansation',Helvetica] font-normal">
              2025 C7courses. Все права защищены
            </div>
            <div className="flex gap-4 md:gap-6">
              <a
                href="#"
                className="text-[14px] md:text-[16px] tracking-[-0.42px] leading-[16px] md:leading-[18px] [font-family:'Sansation',Helvetica] font-normal hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[14px] md:text-[16px] tracking-[-0.42px] leading-[16px] md:leading-[18px] [font-family:'Sansation',Helvetica] font-normal hover:text-gray-300 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};