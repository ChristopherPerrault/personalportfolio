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
      title: "Dr.Charge",
      descriptionKey: "project.description1",
      images: [
        "/images/projects/drc1.png",
        "/images/projects/drc2.png",
        "/images/projects/drc3.png",
      ],
      github: "https://github.com/ChristopherPerrault/drcsite",
      liveUrl: "https://drcharge.ca",
      techsUsed: ["Next.js", "Tailwind CSS", "Nodemailer"],
    },
    // {
    //   title: "Project 2",
    //   descriptionKey: "project.description2",
    //   images: ["/images/projects/drc1.png", "/images/projects/drc2.png"],
    //   github: "https://github.com/project2",
    //   liveUrl: "https://project2.com",
    //   techsUsed: ["React", "CSS Modules", "Node.js"],
    // },
    // {
    //   title: "Project 2",
    //   descriptionKey: "project.description2",
    //   images: ["/images/projects/drc1.png", "/images/projects/drc2.png"],
    //   github: "https://github.com/project2",
    //   liveUrl: "https://project2.com",
    //   techsUsed: ["React", "CSS Modules", "Node.js"],
    // },
    // {
    //   title: "Project 2",
    //   descriptionKey: "project.description2",
    //   images: ["/images/projects/drc1.png", "/images/projects/drc2.png"],
    //   github: "https://github.com/project2",
    //   liveUrl: "https://project2.com",
    //   techsUsed: ["React", "CSS Modules", "Node.js"],
    // },
    // {
    //   title: "Project 2",
    //   descriptionKey: "project.description2",
    //   images: ["/images/projects/drc1.png", "/images/projects/drc2.png"],
    //   github: "https://github.com/project2",
    //   liveUrl: "https://project2.com",
    //   techsUsed: ["React", "CSS Modules", "Node.js"],
    // },
    // Add more projects here...
  ];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-16 bg-ivory">
      <div className="container px-4 mx-auto">
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
          <SeeMoreButton onClick={() => setShowAllProjects(true)} />
        )}
      </div>
    </section>
  );
}
