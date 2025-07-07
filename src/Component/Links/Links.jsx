import React from "react";
import { FaGithub, FaLinkedin, FaDev, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub size={28} />,
    url: "https://github.com/arjsabbir88",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={28} />,
    url: "https://www.linkedin.com/in/dev-arj-sabbir/",
  },
  {
    name: "Dev.to",
    icon: <FaDev size={28} />,
    url: "https://dev.to/arj_sabbir",
  },
  {
    name: "Twitter",
    icon: <FaTwitter size={28} />,
    url: "https://x.com/arj_sabbir",
  },
];

const Links = () => {
  return (
    <div className="flex items-center justify-center bg-black p-6 flex-col">
      <style>
        {`
          @keyframes bounce-custom {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          .hover\\:bounce:hover {
            animation: bounce-custom 0.5s;
          }
        `}
      </style>

      <div className="grid grid-cols-4 sm:grid-cols-4 gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-xl p-4 bg-black text-white shadow-lg transition-transform hover:scale-105 hover:bounce flex items-center justify-center
                       before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-[#edb24e] before:to-transparent before:blur-[6px] before:opacity-50 before:z-[-1]
                       after:absolute after:inset-0 after:rounded-xl after:border after:border-[#edb24e] after:opacity-30 after:z-[-2]"
          >
            {link.icon}
          </a>
        ))}
        
      </div>
      <div>
        <Link
          to="https://drive.google.com/file/d/1PzJCZK556jM7lWuvLo2vVgP_rOkgH1Cy/view?usp=sharing"
          target="_blank"
          className="relative mt-6 rounded-xl p-4 bg-black text-white shadow-lg transition-transform hover:scale-105 hover:bounce flex items-center justify-center
                       before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-[#edb24e] before:to-transparent before:blur-[6px] before:opacity-50 before:z-[-1]
                       after:absolute after:inset-0 after:rounded-xl after:border after:border-[#edb24e] after:opacity-30 after:z-[-2] cursor-pointer outline-1"
        >
          Download Resume
        </Link>
      </div>
    </div>
  );
};

export default Links;
