import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const recipient = process.env.RECIPIENT_EMAIL;

export default function ContactLinks() {
  return (
    <div className="flex justify-center my-20 space-x-6 md:space-x-10 social-links">
      <Link
        href="https://www.linkedin.com/in/christopherperrault/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="social-icon"
      >
        <FaLinkedin className="text-4xl text-black transition-all md:text-5xl hover:text-yellow-500" />
      </Link>
      <Link
        href="https://github.com/ChristopherPerrault"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="social-icon"
      >
        <FaGithub className="text-4xl text-black transition-all md:text-5xl hover:text-yellow-500" />
      </Link>
      <a
        href={`mailto:${recipient}`}
        aria-label="Email"
        className="social-icon"
      >
        <FaEnvelope className="text-4xl text-black transition-all md:text-5xl hover:text-yellow-500" />
      </a>
    </div>
  );
}
