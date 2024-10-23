import ProjectsSection from "./_components/Projects/ProjectsSection";
import AboutSection from "./_components/About/AboutSection";
import ResumeSection from "./_components/Resume/ResumeSection";
import ContactSection from "./_components/Contact/ContactSection";

export default function Home() {
  return (
    <>
      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-ivory">
        <ProjectsSection />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-ivory">
        <AboutSection />
      </section>

      {/* Resume Section */}
      <section id="resume" className="min-h-screen bg-ivory">
        <ResumeSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-ivory">
        <ContactSection />
      </section>
    </>
  );
}
