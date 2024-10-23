import ProjectDescription from "./ProjectDescription";

export default function ProjectCard({
  title,
  description,
  image,
  github,
  liveUrl,
  techsUsed,
}) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-md">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-48 rounded-lg"
      />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <ProjectDescription text={description} techsUsed={techsUsed} />
      <div className="flex justify-between mt-4">
        {github && (
          <a
            href={github}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </a>
        )}
      </div>
    </div>
  );
}
