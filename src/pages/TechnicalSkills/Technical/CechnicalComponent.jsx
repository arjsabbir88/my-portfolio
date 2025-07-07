"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ShinyText from "@/Component/Welcome/AnimatedSubTitle/Animated";

export const TechnicalComponent = ({
  skills,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-x-hidden md:overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.3 }}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 overflow-x-auto scrollbar-hide",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {skills.map((skill) => (
            <li key={skill.name} className="px-4 pt-12 bg-black list-none">
              <div className="w-24 sm:w-28 md:w-[150px] lg:w-[200px] group relative bg-gradient-to-br from-[#edb24e]/40 to-transparent backdrop-blur-md rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_30px_10px_#edb24e66]">
                {skill.icon}
                <span className="mt-3 text-white">
                  <ShinyText text={skill.name} disabled={false} speed={3} />
                </span>
                <span className="absolute -top-12 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black bg-[#edb24e] px-2 py-1 rounded shadow-lg">
                  {skill.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};





// this code form chatgpt

// "use client";

// import { cn } from "@/lib/utils";
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import ShinyText from "@/Component/Welcome/AnimatedSubTitle/Animated";

// export const TechnicalComponent = ({
//   skills,
//   direction = "left",
//   speed = "fast",
//   pauseOnHover = true,
//   className,
// }) => {
//   const containerRef = React.useRef(null);
//   const scrollerRef = React.useRef(null);

//   const [start, setStart] = useState(false);

//   useEffect(() => {
//     addAnimation();
//   }, []);

//   function addAnimation() {
//     if (containerRef.current && scrollerRef.current) {
//       const scrollerContent = Array.from(scrollerRef.current.children);

//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         if (scrollerRef.current) {
//           scrollerRef.current.appendChild(duplicatedItem);
//         }
//       });

//       getDirection();
//       getSpeed();
//       setStart(true);
//     }
//   }

//   const getDirection = () => {
//     if (containerRef.current) {
//       containerRef.current.style.setProperty(
//         "--animation-direction",
//         direction === "left" ? "forwards" : "reverse"
//       );
//     }
//   };

//   const getSpeed = () => {
//     if (containerRef.current) {
//       let duration = "40s";
//       if (speed === "fast") duration = "20s";
//       else if (speed === "slow") duration = "80s";

//       containerRef.current.style.setProperty("--animation-duration", duration);
//     }
//   };

//   return (
//     <div
//       ref={containerRef}
//       className={cn(
//         "scroller relative z-20 w-full overflow-x-auto overflow-y-hidden max-w-7xl",
//         "sm:overflow-hidden", // scroll only on small devices
//         "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
//         className
//       )}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ amount: 0.3 }}
//       >
//         <ul
//           ref={scrollerRef}
//           className={cn(
//             "flex w-max shrink-0 flex-nowrap gap-4 py-4",
//             start && "animate-scroll",
//             pauseOnHover && "hover:[animation-play-state:paused]"
//           )}
//         >
//           {skills.map((skill) => (
//             <li key={skill.name} className="px-2 py-8 min-w-[140px] sm:min-w-0">
//               <div className="w-[100px] md:w-[150px] lg:w-[200px] group relative bg-gradient-to-br from-[#edb24e]/40 to-transparent backdrop-blur-md rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_30px_10px_#edb24e66]">
//                 {skill.icon}
//                 <span className="mt-3 text-white">
//                   <ShinyText text={skill.name} disabled={false} speed={3} />
//                 </span>
//                 <span className="absolute -top-12 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black bg-[#edb24e] px-2 py-1 rounded shadow-lg">
//                   {skill.name}
//                 </span>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//     </div>
//   );
// };

