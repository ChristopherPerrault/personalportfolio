import ProjectCard from "./ProjectCard";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Dr.Charge",
      description:
        "Commercial landing page, designed & built from scratch for the client. Modern, clear & very fast; developed with the foundations set for ease of growth.",
      image: "/path-to-image-1.jpg",
      github: "https://github.com/project1",
      liveUrl: "https://drcharge.ca",
      techsUsed: ["Next.js", "Tailwind CSS", "Nodemailer"],
    },
    {
      title: "Project 2",
      description: "This is a description for Project 2.",
      image: "/path-to-image-2.jpg",
      github: "https://github.com/project2",
      liveUrl: "https://project2.com",
      techsUsed: ["React", "CSS Modules", "Node.js"], // Add techsUsed here
    },
    // Add more projects as needed
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
              image={project.image}
              description={project.description}
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
