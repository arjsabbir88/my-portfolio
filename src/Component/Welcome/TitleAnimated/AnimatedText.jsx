import React from "react";
import BlurText from "./AnimatedComponent";
import { motion } from "framer-motion";


const AnimatedText = (text) => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
 
  <BlurText
    text="Tariqul Islam Khan"
    delay={150}
    animateBy="words"
    direction="top"
    onAnimationComplete={handleAnimationComplete}
    className="text-xl md:text-3xl lg:text-6xl"
  />
  );
};

export default AnimatedText;
