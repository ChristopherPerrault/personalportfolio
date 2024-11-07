import ProjectsSection from "./_components/Projects/ProjectsSection";
import AboutSection from "./_components/About/AboutSection";
import ResumeSection from "./_components/Resume/ResumeSection";
import ContactSection from "./_components/Contact/ContactSection";

export default function Home() {
  return (
    <>
      <ProjectsSection />
      <AboutSection />
      <ResumeSection />
      <ContactSection />
    </>
  );
}
