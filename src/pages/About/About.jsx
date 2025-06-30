import React from "react";
import { motion } from "framer-motion";
import ShinyText from "@/Component/Welcome/AnimatedSubTitle/Animated";
import { BoxReveal } from "./BoxReveal";
import { Link } from "react-router";
// import { BoxReveal } from "@/components/ui/box-reveal";

const About = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center text-white px-4 py-16">
      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-bold mb-12">
        About{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#edb24e] to-[#f0be67]">
          Me
        </span>
      </h2>

      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-10">
        <motion.div
          className="md:w-1/3 flex flex-col items-center md:sticky top-10 justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.3 }}
        >
          {/* Inner Glow CSS */}
          <style>
            {`
              .inner-glow {
                background: radial-gradient(circle at center, rgba(237, 178, 78, 0.3) 0%, transparent 10%);
              }
            `}
          </style>

          <div className="relative mb-6">
            {/* Outer glow */}
            <div className="absolute inset-0 w-48 h-48 sm:w-56 sm:h-56 rounded-full blur-2xl bg-gradient-to-br from-[#edb24e] to-transparent opacity-40 z-0"></div>

            {/* Image wrapper with bounce */}
            <motion.div
              className="w-48 h-48 sm:w-56 sm:h-56 rounded-full relative z-10 overflow-hidden border border-[#edb24e]"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Inner glow overlay */}
              <div className="absolute inset-0 z-10 inner-glow rounded-full"></div>

              {/* Image */}
              <img
                src="https://i.ibb.co/RTswLd15/Picsart-25-06-28-14-27-55-974.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-full z-50"
              />
            </motion.div>
          </div>

          {/* Name & Subtitle */}
          <h3 className="text-4xl font-semibold text-gray-300">
            Tariqul Islam Khan
          </h3>
          <ShinyText
            text="MERN Stack Developer!!"
            disabled={false}
            speed={3}
            className="custom-class"
          />
          <p className="text-center max-w-sm text-gray-400 text-sm sm:text-base px-4 mt-4">
            Turning ideas into fully functional web experiences using MongoDB,
            Express, React, and Node. I build apps that not only work—but wow
          </p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }} // 👈 no `once: true`
          >
            <Link
              to="https://drive.google.com/file/d/1e2TMMuVDjTLzua-wRRFlvFtBmuvpDQzD/view?usp=sharing"
              target="_blank"
              className="relative mt-6 rounded-xl p-4 bg-black text-white shadow-lg transition-transform hover:scale-105 hover:bounce flex items-center justify-center
                       before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-[#edb24e] before:to-transparent before:blur-[6px] before:opacity-50 before:z-[-1]
                       after:absolute after:inset-0 after:rounded-xl after:border after:border-[#edb24e] after:opacity-30 after:z-[-2] cursor-pointer"
            >
              Download Resume
            </Link>
          </motion.div>
        </motion.div>
        {/* Left Side - Sticky with Image */}

        {/* Right Side - Motion Content */}
        <motion.div
          className="md:w-2/3 space-y-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ amount: 0.3 }} // 👈 no `once: true`
        >
          {/* Intro */}
          {/* <div className="bg-[#0f1d25] p-5 rounded-xl text-sm sm:text-base leading-relaxed shadow-md">
            <p className="text-2xl">
              Hey, I'm <strong>Tariqul Islam Khan</strong>, a full-stack
              developer specializing in the{" "}
              <span className="font-medium">
                <ShinyText
                  text="MERN Stack!!"
                  disabled={false}
                  speed={3}
                  className="custom-class text-[#edb24e]"
                />{" "}
              </span>
              .
              <br />
              I’ve been turning ideas into high-performing web apps using{" "}
              <span className="text-[#edb24e] font-medium">React</span> and{" "}
              <span className="text-[#edb24e] font-medium">Node</span> and
              everything in between.
              <br /> thrive on challenges, love writing clean, maintainable
              code, and constantly push to deliver polished, production-ready
              products that stand out.
            </p>
          </div> */}
          <BoxReveal>
            <div className="bg-[#0f1d25] p-5 rounded-xl text-sm sm:text-base leading-relaxed shadow-md">
              <div className="text-2xl">
                Hey, I'm <strong>Tariqul Islam Khan</strong>, a full-stack
                developer specializing in the{" "}
                <span className="font-medium">
                  <ShinyText
                    text="MERN Stack!!"
                    disabled={false}
                    speed={3}
                    className="custom-class text-[#edb24e]"
                  />
                </span>
                .
                <br />
                I’ve been turning ideas into high-performing web apps using{" "}
                <span className="text-[#edb24e] font-medium">
                  React
                </span> and{" "}
                <span className="text-[#edb24e] font-medium">Node</span> and
                everything in between.
                <br />I thrive on challenges, love writing clean, maintainable
                code, and constantly push to deliver polished, production-ready
                products that stand out.
              </div>
            </div>
          </BoxReveal>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }} // 👈 no `once: true`
          >
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold italic mb-2">
                EXPERIENCE
              </h3>
              <h4 className="font-bold">
                {" "}
                <ShinyText
                  text="MERN Stack "
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />{" "}
                <span className="text-[#edb24e]"> Developer</span>
              </h4>
              <p className="text-gray-400 text-sm mb-2">
                @FRESHER | 2025.1 - PRESENT
              </p>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                <h3 className="text-lg sm:text-xl font-extrabold italic mb-2">
                  TECHNICAL SKILLS
                </h3>
                <li>Frontend: Js, React, Tailwind CSS, Material ui</li>
                <li>Backend: Node.js, Express.js</li>
                <li>Database: MongoDB</li>
                <li> Tools: Git, GitHub, Vercel, Netlify, Surge</li>
              </ul>
            </div>
          </motion.div>

          {/* Certification
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold italic mb-2">
              CERTIFICATION
            </h3>
            <h4 className="font-bold">Full Stack Developer</h4>
            <p className="text-gray-400 text-sm mb-2">
              House of Professionals | 2021 - 2022
            </p>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>Earned full-stack certificate from HOP.</li>
              <li>Ranked top in class for skills and commitment.</li>
            </ul>
          </div> */}

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }}
          >
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold italic mb-2">
                EDUCATION
              </h3>
              <h4 className="font-bold">
                Bachelor of Science in Computer Science (BSCS)
              </h4>
              <p className="text-gray-400 text-sm">
                crown institute of business and technology (CIBT) | 2023 -
                Present
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
