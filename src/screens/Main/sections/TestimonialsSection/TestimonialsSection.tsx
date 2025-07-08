import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const TestimonialsSection = (): JSX.Element => {
  // Company section data
  const companyLinks = [
    { title: "О нас", href: "#" },
    { title: "Контакты", href: "#" },
    { title: "Blog", href: "#" },
  ];

  // Courses section data
  const courseLinks = [
    { title: "No-Code Разработка", href: "#" },
    { title: "Автоматизация процессов", href: "#" },
    { title: "Создание приложений без кода", href: "#" },
    { title: "Интеграйия систем", href: "#" },
  ];

  // Contact information
  const contactInfo = {
    email: "support@c7courses.com",
    phone: "+996706677297",
    address: "Улица Юнусалиева, 80, ololoPlanet Коворкинг-центр",
  };

  return (
    <footer className="w-full py-10 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-[24.3px] tracking-[-0.73px] leading-[25.5px] font-bold [font-family:'Sansation',Helvetica]">
              C7courses
            </h3>
            <Separator className="w-[298px]" />
            <p className="text-[20.1px] tracking-[-0.60px] leading-[21.1px] [font-family:'Sansation',Helvetica] font-normal">
              Развиваем новое поколение
              <br />
              решениям без кода
            </p>
          </div>

          {/* Courses Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-[24.3px] tracking-[-0.73px] leading-[25.5px] font-bold [font-family:'Sansation',Helvetica]">
              Курсы
            </h3>
            <Separator className="w-[298px]" />
            <div className="flex flex-col space-y-4">
              {courseLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[20.1px] tracking-[-0.60px] leading-[21.1px] [font-family:'Sansation',Helvetica] font-normal"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-[24.3px] tracking-[-0.73px] leading-[25.5px] font-bold [font-family:'Sansation',Helvetica]">
              Компания
            </h3>
            <Separator className="w-[298px]" />
            <div className="flex flex-col space-y-4">
              {companyLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[20.1px] tracking-[-0.60px] leading-[21.1px] [font-family:'Sansation',Helvetica] font-normal"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-[24.3px] tracking-[-0.73px] leading-[25.5px] font-bold [font-family:'Sansation',Helvetica]">
              Контакты
            </h3>
            <Separator className="w-[298px]" />
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <MailIcon className="w-[25px] h-[25px]" />
                <span className="text-[20.1px] tracking-[-0.60px] leading-[21.0px] [font-family:'Sansation',Helvetica] font-normal">
                  {contactInfo.email}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-[25px] h-[25px]" />
                <span className="text-[20.1px] tracking-[-0.60px] leading-[21.0px] [font-family:'Sansation',Helvetica] font-normal">
                  {contactInfo.phone}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-[25px] h-[25px]" />
                <span className="text-[20.1px] tracking-[-0.60px] leading-[21.0px] [font-family:'Sansation',Helvetica] font-normal">
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

        {/* Footer Bottom */}
        <div className="mt-8">
          <Separator className="w-full" />
          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            <div className="text-[20.1px] tracking-[-0.60px] leading-[21.1px] [font-family:'Sansation',Helvetica] font-normal">
              2025 C7courses. Все права защищены
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-[20.1px] tracking-[-0.60px] leading-[21.1px] [font-family:'Sansation',Helvetica] font-normal"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[20.1px] tracking-[-0.60px] leading-[21.1px] [font-family:'Sansation',Helvetica] font-normal"
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
