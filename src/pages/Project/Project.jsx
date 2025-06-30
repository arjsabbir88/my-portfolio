import React from "react";
import { Timeline } from "./TimeLine";
import { FaArrowCircleRight, FaGithub, FaStaylinked } from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiDaisyui, SiExpress, SiMongodb } from "react-icons/si";
import { Link } from "react-router";
import { motion } from "framer-motion";

const tools = [
  { icon: <FaReact size={30} />, name: "React" },
  { icon: <SiTailwindcss size={30} />, name: "Tailwind CSS" },
  { icon: <SiDaisyui size={30} />, name: "DaisyUI" },
  { icon: <SiExpress size={30} />, name: "Express.js" },
  { icon: <FaNodeJs size={30} />, name: "Node.js" },
  { icon: <SiMongodb size={30} />, name: "MongoDB" },
];

const technologyLinks = (
  <>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center">
      {tools.map((tool, idx) => (
        <div
          key={idx}
          className="w-[40px] md:w-[50px] lg:w-[100px] group relative outline-1 to-transparent backdrop-blur-md rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-[0_0_30px_10px_#edb24e66] hover:bg-gradient-to-br from-[#edb24e]/40 "
        >
          {tool.icon}
          {/* <span className="mt-3 text-white">{tool.name}</span> */}

          <span className="absolute -top-12 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black bg-[#edb24e] px-2 py-1 rounded shadow-lg">
            {tool.name}
          </span>
        </div>
      ))}
    </div>
  </>
);

export function TimelineDemo() {
  const data = [
    {
      title: "TourTide",
      subtitle: "Tour Package Booking Platform",
      content: (
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }} // 👈 no `once: true`
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://i.ibb.co/3YSb2ZFh/b-1.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="https://i.ibb.co/5g5TbPZP/b-2.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="https://i.ibb.co/9mK5JY8M/b-3.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="https://i.ibb.co/yF8JmgWn/b-4.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }} // 👈 no `once: true`
          >
            <p className="mt-8 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
              "TourTide" is a full-stack MERN web application that allows users
              to explore, book, and manage tour packages. This booking
              management system includes user authentication, real-time tour
              data handling, booking history, and user-specific tour management
              functionality.
            </p>

            {/* functionality */}
            <div className="mt-8 text-xs md:text-sm lg:text-lg text-white">
              <p className="flex items-center gap-2">
                <FaArrowCircleRight /> Manage My Packages (Update/Delete)
              </p>
              <p className="flex items-center gap-2">
                <FaArrowCircleRight /> Booking count updates automatically using
                $inc
              </p>
              <p className="flex items-center gap-2">
                <FaArrowCircleRight /> View My Bookings & confirm status
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }} // 👈 no `once: true`
          >
            {/* technology links */}
            <div>
              <div className="px-2 py-5">{technologyLinks}</div>
            </div>

            {/* repo links */}
            <div className="grid md:grid-cols-2 gap-10">
              <Link
                className="relative mt-6 rounded-xl p-4 bg-black text-white shadow-lg transition-transform hover:scale-105 hover:bounce flex items-center justify-center outline-1
                       before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-[#edb24e] before:to-transparent before:blur-[6px] before:opacity-50 before:z-[-1]
                       after:absolute after:inset-0 after:rounded-xl after:border after:border-[#edb24e] after:opacity-30 after:z-[-2]"
              >
                <FaStaylinked size={20} className="mr-2" /> Demo Link
              </Link>
              <Link
                className="relative mt-6 rounded-xl p-4 bg-black text-white shadow-lg transition-transform hover:scale-105 hover:bounce flex items-center justify-center outline-1
                       before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-[#edb24e] before:to-transparent before:blur-[6px] before:opacity-50 before:z-[-1]
                       after:absolute after:inset-0 after:rounded-xl after:border after:border-[#edb24e] after:opacity-30 after:z-[-2]"
              >
                <FaGithub size={20} className="mr-2" />
                Repo Link
              </Link>
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "RoomSync",
      subtitle: "Find Your Ideal Roommate",
      content: (
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://i.ibb.co/b5k8Czpd/a-1.png"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="https://i.ibb.co/Y4dRz285/a-2.png"
                alt="feature template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="https://i.ibb.co/0pSrjrBB/a-3.png"
                alt="bento template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="https://i.ibb.co/8DTwPcx4/a-4.png"
                alt="cards template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }}
          >
            <p className="my-8 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
              RoomSync is a full-stack web application designed to help users
              find and list roommates efficiently. Users can browse listings,
              like posts, and manage their own listings after logging in
              securely. Built with a modern tech stack focused on clean UI and
              smooth user experience.
            </p>
            {/* added key functionality */}
            <div className="mt-8 text-xs md:text-sm lg:text-lg text-white">
              <p className="flex items-center gap-2">
                <FaArrowCircleRight /> Engage with posts using the like button
                (with count).
              </p>
              <p className="flex items-center gap-2">
                <FaArrowCircleRight /> Authenticated users can manage their
                listings. $inc
              </p>
              <p className="flex items-center gap-2">
                <FaArrowCircleRight /> View individual post info in detail.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }}
          >
            {/* technology */}
            <div>
              <div className="px-2 py-5">{technologyLinks}</div>
            </div>

            {/* links */}
            <div className="grid md:grid-cols-2 gap-10">
              <Link
                className="relative mt-6 rounded-xl p-4 bg-black text-white shadow-lg transition-transform hover:scale-105 hover:bounce flex items-center justify-center outline-1
                       before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-[#edb24e] before:to-transparent before:blur-[6px] before:opacity-50 before:z-[-1]
                       after:absolute after:inset-0 after:rounded-xl after:border after:border-[#edb24e] after:opacity-30 after:z-[-2]"
              >
                <FaStaylinked size={20} className="mr-2" /> Demo Link
              </Link>
              <Link
                className="relative mt-6 rounded-xl p-4 bg-black text-white shadow-lg transition-transform hover:scale-105 hover:bounce flex items-center justify-center outline-1
                       before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-[#edb24e] before:to-transparent before:blur-[6px] before:opacity-50 before:z-[-1]
                       after:absolute after:inset-0 after:rounded-xl after:border after:border-[#edb24e] after:opacity-30 after:z-[-2]"
              >
                <FaGithub size={20} className="mr-2" />
                Repo Link
              </Link>
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "Lily",
      subtitle: "A BookHouse Subscription Box Service Platform",
      content: (
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://i.ibb.co/76wbq3F/c-1.png"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="https://i.ibb.co/nNX2XxbH/c-2.png"
                alt="feature template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="https://i.ibb.co/PGWPkpRS/c-3.png"
                alt="bento template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="https://i.ibb.co/xtmB8HxH/c-4.png"
                alt="cards template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }}
          >
            <p className="my-4 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
              A personalized subscription box service platform built with React,
              Firebase, and Node.js. Users can browse, subscribe, and review
              different monthly box services based on their preferences.
            </p>
            <div className="mt-8 text-xs md:text-sm lg:text-lg text-white">
              <p className="flex items-center gap-2">
                <FaArrowCircleRight /> Add & view reviews per subscription
                service
              </p>
              <p className="flex items-center gap-2">
                <FaArrowCircleRight /> Email/Password + Google Login via
                Firebase Auth.
              </p>
              <p className="flex items-center gap-2">
                <FaArrowCircleRight /> Each route sets its own document title.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }} // 👈 no `once: true`
          >
            {/* technology */}
            <div>
              <div className="px-2 py-5">{technologyLinks}</div>
            </div>

            {/* links */}
            <div className="grid md:grid-cols-2 gap-10">
              <Link
                className="relative mt-6 rounded-xl p-4 bg-black text-white shadow-lg transition-transform hover:scale-105 hover:bounce flex items-center justify-center outline-1
                       before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-[#edb24e] before:to-transparent before:blur-[6px] before:opacity-50 before:z-[-1]
                       after:absolute after:inset-0 after:rounded-xl after:border after:border-[#edb24e] after:opacity-30 after:z-[-2]"
              >
                <FaStaylinked size={20} className="mr-2" /> Demo Link
              </Link>
              <Link
                className="relative mt-6 rounded-xl p-4 bg-black text-white shadow-lg transition-transform hover:scale-105 hover:bounce flex items-center justify-center outline-1
                       before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-[#edb24e] before:to-transparent before:blur-[6px] before:opacity-50 before:z-[-1]
                       after:absolute after:inset-0 after:rounded-xl after:border after:border-[#edb24e] after:opacity-30 after:z-[-2]"
              >
                <FaGithub size={20} className="mr-2" />
                Repo Link
              </Link>
            </div>
          </motion.div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip ">
      <Timeline data={data} />
    </div>
  );
}
