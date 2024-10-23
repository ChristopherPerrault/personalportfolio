import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Dr.Charge",
      descriptionKey: "project.description1",
      images: ["/images/projects/drc1.png", "/images/projects/drc2.png"],
      github: "https://github.com/ChristopherPerrault/drcsite",
      liveUrl: "https://drcharge.ca",
      techsUsed: ["Next.js", "Tailwind CSS", "Nodemailer"],
    },
    {
      title: "Project 2",
      descriptionKey: "project.description2",
      images: ["/images/projects/drc1.png", "/images/projects/drc2.png"],
      github: "https://github.com/project2",
      liveUrl: "https://project2.com",
      techsUsed: ["React", "CSS Modules", "Node.js"],
    },
  ];

  return (
    <section id="projects" className="py-16 bg-ivory">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center">Projects</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
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
      </div>
    </section>
  );
}
