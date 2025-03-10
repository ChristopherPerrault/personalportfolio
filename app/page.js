import Hero from "./_components/Hero/Hero";
import ProjectsSection from "./_components/Projects/ProjectsSection";
import AboutSection from "./_components/About/AboutSection";
import ResumeSection from "./_components/Resume/ResumeSection";
import ContactSection from "./_components/Contact/ContactSection";

export default function Home() {
  return (
    <>
      <div className="container px-4 mx-auto">
        <Hero />
        <section id="projects" className="py-16 bg-ivory">
          <ProjectsSection />
        </section>
        <section id="about" className="py-16 bg-ivory">
          <AboutSection />
        </section>
        <section id="resume" className="py-16 bg-ivory">
          <ResumeSection />
        </section>
        <section id="contact" className="py-16 bg-ivory">
          <ContactSection />
        </section>
      </div>
    </>
  );
}
