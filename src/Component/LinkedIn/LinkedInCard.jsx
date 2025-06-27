import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const LinkedInCard = () => {
  return (
    <div className="relative w-[100px] h-[100px] rounded-3xl overflow-hidden border-2 border-white shadow-[0_7px_29px_0px_rgba(237,178,78,0.4)] transition-all duration-1000 hover:scale-110 group animate-[bounce-custom_2s_infinite]">
      <div className="absolute inset-0 bg-transparent" />
      {/* gradient-to-tr from-[#0e76a8] via-[#2d9fd9] to-[#0e76a8] */}
      
      <div className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 text-white text-xl font-semibold tracking-widest transition-all duration-500 group-hover:translate-x-[30px] group-hover:-translate-y-[22px] group-hover:tracking-normal">
        LinkedIn
      </div>

      <Link to="https://linkedin.com/in/arjsabbir88" target="_blank" rel="noopener noreferrer">
        <div className="absolute w-[70%] h-[70%] bottom-[-70%] left-[-70%] p-2 text-right bg-white/40 border-t-2 border-r border-white rounded-[10%_13%_42%_0%/10%_12%_75%_0%] shadow-[rgba(100,100,111,0.3)_-7px_7px_29px_0px] transform-origin-bottom-left transition-all duration-1000 group-hover:bottom-[-1px] group-hover:left-[-1px] before:content-[''] before:absolute before:inset-0 before:rounded-inherit  before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-500">
        {/* before:bg-[radial-gradient(circle_at_30%_107%,#0e76a8_0%,#2d9fd9_100%)] */}
          <span className="inline-block w-5 h-5">
            <FaLinkedinIn className="w-full h-full text-white/80 group-hover:drop-shadow-[0_0_5px_white] transition-all duration-500" />
          </span>
          <div className="flex justify-center text-sm group-hover:scale-105 transition-transform duration-300 text-[#edb24e] font-semibold">
            Join
          </div>
        </div>
      </Link>

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

export default LinkedInCard;
