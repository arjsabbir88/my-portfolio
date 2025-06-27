// src/components/CustomCursor.jsx
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorSize = 26; 

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 400, damping: 28 });
  const smoothY = useSpring(mouseY, { stiffness: 400, damping: 28 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - cursorSize / 2);
      mouseY.set(e.clientY - cursorSize / 2);
    };

    window.addEventListener("mousemove", moveCursor);

    // ✅ Enable OS cursor (keep default)
    // document.body.style.cursor = "none"; 

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full backdrop-blur-sm"
      style={{
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        x: smoothX,
        y: smoothY,
        backgroundColor: "rgba(255, 255, 255, 0.4)", // off-white with transparency
      }}
    />
  );
};

export default CustomCursor;
