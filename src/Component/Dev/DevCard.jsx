import { FaDev } from "react-icons/fa";
import { Link } from "react-router";

const DevCard = () => {
  return (
    <div className="relative w-[100px] h-[100px] rounded-3xl overflow-hidden border-2 border-white shadow-[0_7px_29px_0px_rgba(237,178,78,0.5)] transition-all duration-1000 hover:scale-110 group animate-[bounce-custom_2s_infinite]">
      <div className="absolute inset-0 bg-transparent" />

      {/* Center text */}
      <div className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 text-white text-xl font-semibold tracking-widest transition-all duration-500 group-hover:translate-x-[30px] group-hover:-translate-y-[22px] group-hover:tracking-normal">
        Dev.io
      </div>

      {/* Animated Join Button Box */}
      <Link
        to="https://dev.to/arjsabbir88"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="absolute w-[70%] h-[70%] bottom-[-70%] left-[-70%] p-2 text-right bg-white/40 border-t-2 border-r border-white rounded-[10%_13%_42%_0%/10%_12%_75%_0%] shadow-[rgba(100,100,111,0.3)_-7px_7px_29px_0px] transform-origin-bottom-left transition-all duration-1000 group-hover:bottom-[-1px] group-hover:left-[-1px] before:content-[''] before:absolute before:inset-0 before:rounded-inherit before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-500">
          <span className="inline-block w-5 h-5">
            <FaDev className="w-full h-full text-white/80 group-hover:drop-shadow-[0_0_5px_white] transition-all duration-500" />
          </span>
          <div className="flex justify-center text-sm text-[#edb24e] font-semibold animate-[bounce-custom_2s_infinite]">
            Join
          </div>
        </div>
      </Link>

      {/* Custom bounce animation */}
      <style>
        {`
          @keyframes bounce-custom {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
        `}
      </style>
    </div>
  );
};

export default DevCard;
