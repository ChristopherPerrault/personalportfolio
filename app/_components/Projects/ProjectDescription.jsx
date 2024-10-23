// ProjectDescription.jsx
export default function ProjectDescription({ text, techsUsed }) {
  return (
    <>
      <p className="mt-2 text-gray-600">{text}</p>
      {techsUsed && (
        <ul className="flex flex-wrap gap-2 mt-2 text-gray-600">
          {techsUsed.map((tech, index) => (
            <li key={index} className="px-2 py-1 text-sm bg-gray-200 rounded">
              {tech}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
