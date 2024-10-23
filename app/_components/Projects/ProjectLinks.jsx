import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectLinks({ liveUrl, github }) {
  return (
    <div className="mt-4 space-x-2">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-400"
        >
          <FaExternalLinkAlt className="mr-2" />
          Live URL
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-600"
        >
          <FaGithub className="mr-2" />
          GitHub
        </a>
      )}
    </div>
  );
}
