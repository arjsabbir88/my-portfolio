import React from "react";
import { motion } from "framer-motion";
import ShinyText from "@/Component/Welcome/AnimatedSubTitle/Animated";

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
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Inner Glow CSS */}
          <style>
            {`
              .inner-glow {
                background: radial-gradient(circle at center, rgba(237, 178, 78, 0.3) 0%, transparent 10%);
              }
            `}
          </style>

          {/* Image with Glows */}
          <div className="relative mb-6">
            {/* Outer glow */}
            <div className="absolute inset-0 w-48 h-48 sm:w-56 sm:h-56 rounded-full blur-2xl bg-gradient-to-br from-[#edb24e] to-transparent opacity-40 z-0"></div>

            {/* Image wrapper */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full relative z-10 overflow-hidden border border-[#edb24e]">
              {/* Inner glow overlay */}
              <div className="absolute inset-0 z-10 inner-glow rounded-full"></div>

              {/* Image */}
              <img
                src="https://i.ibb.co/RTswLd15/Picsart-25-06-28-14-27-55-974.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-full z-50"
              />
            </div>
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
        </motion.div>
        {/* Left Side - Sticky with Image */}

        {/* Right Side - Motion Content */}
        <motion.div
          className="md:w-2/3 space-y-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Intro */}
          <div className="bg-[#0f1d25] p-5 rounded-xl text-sm sm:text-base leading-relaxed shadow-md">
            <p>
              👋 Hey, I'm <strong>Abdullah Iqbal</strong>, a Full Stack
              Developer.
              <br />
              <br />
              I've been working with{" "}
              <span className="text-blue-400 font-medium">React</span> and{" "}
              <span className="text-blue-400 font-medium">Node</span> for the
              past <strong>three years</strong>, building apps that are fast,
              scalable, and user-friendly.
              <br />
              <br />I enjoy solving problems, exploring new technologies, and
              working on passion projects.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold italic mb-2">
              EXPERIENCE
            </h3>
            <h4 className="font-bold">Full Stack Developer</h4>
            <p className="text-gray-400 text-sm mb-2">
              @WIMETRIX | 2022 - PRESENT
            </p>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>Contributed to Sooperwizer, a key automation project.</li>
              <li>Built interactive dashboards using React.</li>
              <li>Developed Android apps with React Native.</li>
            </ul>
          </div>

          {/* Certification */}
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
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold italic mb-2">
              EDUCATION
            </h3>
            <h4 className="font-bold">
              Bachelor of Science in Computer Science (BSCS)
            </h4>
            <p className="text-gray-400 text-sm">
              Virtual University of Pakistan | 2022 - Present
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
