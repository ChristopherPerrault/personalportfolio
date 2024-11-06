"use client";
import React, { useState } from "react";
import {
  TbBrandReactNative,
  TbBrandUnity,
  TbBrandInertia,
} from "react-icons/tb";
import { BsTypeH2 } from "react-icons/bs";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDaisyui,
  SiExpress,
  SiCsharp,
  SiPhp,
  SiLaravel,
  SiDotnet,
  SiSpring,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiPrisma,
  SiVisualstudio,
  SiVisualstudiocode,
  SiIntellijidea,
  SiNpm,
  SiMicrosoftazure,
} from "react-icons/si";
import { AiFillOpenAI, AiOutlineDown } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const techCategories = {
  frontend: [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: FaReact },
    { name: "React Native", icon: TbBrandReactNative },
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "daisyUI", icon: SiDaisyui },
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "Laravel", icon: SiLaravel },
    { name: "PHP", icon: SiPhp },
    { name: "Inertia", icon: TbBrandInertia },
    { name: "C#", icon: SiCsharp },
    { name: "ASP.NET", icon: SiDotnet },
    { name: "Java", icon: FaJava },
    { name: "Spring Boot", icon: SiSpring },
  ],
  database: [
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "SQLite", icon: SiSqlite },
    { name: "H2", icon: BsTypeH2 },
    { name: "Prisma", icon: SiPrisma },
  ],
  tools: [
    { name: "AWS", icon: FaAws },
    { name: "Azure", icon: SiMicrosoftazure },
    { name: "GitHub", icon: FaGithub },
    { name: "Unity", icon: TbBrandUnity },
    { name: "npm", icon: SiNpm },
    { name: "ChatGPT", icon: AiFillOpenAI },
    { name: "VS Code", icon: SiVisualstudiocode },
    { name: "Visual Studio", icon: SiVisualstudio },
    { name: "IntelliJ IDEA", icon: SiIntellijidea },
  ],
};

export default function TechShowcase() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const buttonStyles =
    "px-4 py-2 text-lg font-semibold text-black transition-transform duration-200 transform bg-white rounded-md shadow-md hover:bg-yellow-500 flex items-center justify-center";

  return (
    <section id="tech" className="py-6 bg-ivory">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-4xl font-bold">{t("techStack.title")}</h2>
        <div className="flex justify-center mt-4">
          <div className="flex rounded-md p-0.5 bg-black">
            <button onClick={() => setIsOpen(!isOpen)} className={buttonStyles}>
              {isOpen ? t("techStack.hide") : t("techStack.show")}
              <AiOutlineDown
                className={`ml-2 transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-8 space-y-6">
            {Object.entries(techCategories).map(([category, techs]) => (
              <div key={category} className="flex items-center justify-center">
                <h3 className="mr-6 text-xl font-semibold text-gray-700 capitalize">
                  {category}
                </h3>

                <div className="flex flex-wrap justify-center gap-4">
                  {techs.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-center w-24 h-24 p-2 transition-all bg-white rounded-md shadow-md hover:bg-yellow-400 hover:scale-105"
                    >
                      {React.createElement(tech.icon, {
                        className: "mb-1 text-4xl text-gray-700",
                      })}
                      <span className="text-base font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
