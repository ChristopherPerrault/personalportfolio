"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import SeeMoreButton from "./SeeMoreButton";
import { useTranslation } from "react-i18next";

export default function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const { t } = useTranslation();

  const projects = [
    {
      title: t("project.title1"),
      descriptionKey: "project.description1",
      images: [
        "/images/projects/drc1.png",
        "/images/projects/drc2.png",
        "/images/projects/drc3.png",
        "/images/projects/drc4.png",
        "/images/projects/drc5.png",
      ],
      // github: "https://github.com/ChristopherPerrault/drcsite",
      liveUrl: "https://drcharge.ca",
      techsUsed: ["Next.js", "Tailwind CSS", "Nodemailer"],
    },
    {
      title: t("project.title2"),
      descriptionKey: "project.description2",
      images: [
        "/images/projects/tb1.png",
        "/images/projects/tb2.png",
        "/images/projects/tb3.png",
        "/images/projects/tb4.png",
      ],
      github: "https://github.com/ChristopherPerrault/ticketblaster",
      liveUrl: "https://clever-hotteok-f60642.netlify.app/",
      techsUsed: [
        "MERN Stack",
        "Mongodb",
        "Express",
        "React",
        "Node.js",
        "MaterialUI",
      ],
    },
    {
      title: t("project.title3"),
      descriptionKey: "project.description3",
      images: [
        "/images/projects/ra1.png",
        "/images/projects/ra2.png",
        "/images/projects/ra3.png",
        "/images/projects/ra4.png",
        "/images/projects/ra5.png",
      ],
      github: "https://github.com/kevindarbydev/RegexAcademy",
      // liveUrl: "https://clever-hotteok-f60642.netlify.app/",
      techsUsed: ["C#", "WPF", "Entity Framework", "XAML"],
    },
  ];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="bg-ivory">
      <h2 className="mb-8 text-4xl font-bold text-center">
        {t("project.sectionHeader")}
      </h2>
      <div className="grid max-w-screen-md grid-cols-1 gap-8 mx-auto sm:px-6 lg:px-10">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            images={project.images}
            descriptionKey={project.descriptionKey}
            techsUsed={project.techsUsed}
            liveUrl={project.liveUrl}
            github={project.github}
          />
        ))}
      </div>

      {!showAllProjects && projects.length > 3 && (
        <SeeMoreButton
          onClick={() => setShowAllProjects(true)}
          label={t("project.seeMoreBtn")}
        />
      )}
    </section>
  );
}
