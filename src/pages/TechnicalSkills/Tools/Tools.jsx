"use client";
import React from "react";
import { VscVscode } from "react-icons/vsc";
import { ToolsComponent } from "./ToolsComponent";

import {
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobexd,
  SiGnubash,
} from "react-icons/si";

const tools = [
  { icon: <SiFigma size={50} />, name: "Figma" },
  { icon: <VscVscode size={50} />, name: "VS Code" },
  { icon: <SiGnubash size={50} />, name: "Bash" },
  { icon: <SiAdobepremierepro size={50} />, name: "Premiere Pro" },
  { icon: <SiAdobephotoshop size={50} />, name: "Photoshop" },
  { icon: <SiAdobeillustrator size={50} />, name: "Illustrator" },
  { icon: <SiAdobexd size={50} />, name: "Adobe XD" },
];

const Tools = () => {
  return (
    <div className="flex flex-col antialiased  bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <ToolsComponent tools={tools} direction="right" speed="normal" />
    </div>
  );
};

export default Tools;
