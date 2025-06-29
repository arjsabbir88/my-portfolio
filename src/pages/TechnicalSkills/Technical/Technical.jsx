"use client";

import React from "react";
import { TechnicalComponent } from "./CechnicalComponent";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiDaisyui,
  SiExpress,
  SiMongodb,
  SiReactrouter,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 size={50} />, name: "HTML5" },
  { icon: <FaCss3Alt size={50} />, name: "CSS3" },
  { icon: <SiTailwindcss size={50} />, name: "TailwindCSS" },
  { icon: <SiDaisyui size={50} />, name: "DaisyUI" },
  { icon: <FaReact size={50} />, name: "React" },
  { icon: <SiReactrouter size={50} />, name: "React Router" },
  { icon: <FaNodeJs size={50} />, name: "Node.js" },
  { icon: <SiExpress size={50} />, name: "Express.js" },
  { icon: <SiMongodb size={50} />, name: "MongoDB" },
];

export function Technical() {
  return (
    <div className=" flex flex-col antialiased  bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        Skills <span className="text-[#edb24e]">&&</span> Tools
      </h2>

      <TechnicalComponent skills={skills} direction="left" speed="normal" />
    </div>
  );
}
