import ProjectDescription from "./ProjectDescription";
import ProjectImage from "./ProjectImage";
import LinkButton from "./LinkButton";

export default function ProjectCard({
  title,
  descriptionKey,
  techsUsed,
  images,
  liveUrl,
  github,
}) {
  return (
    <div className="p-6 transition-shadow duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
      <ProjectImage images={images} />
      <h3 className="mt-6 text-2xl font-bold text-darkGray">{title}</h3>
      <ProjectDescription textKey={descriptionKey} techsUsed={techsUsed} />

      <div className="flex justify-between mt-6 space-x-4">
        {liveUrl && <LinkButton url={liveUrl} labelKey="project.visitSite" />}
        {github && <LinkButton url={github} labelKey="project.github" />}
      </div>
    </div>
  );
}
