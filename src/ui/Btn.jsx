import React from "react";

const Btn = ({text}) => {
  return (
    <button className="bg-[linear-gradient(90deg,rgba(122,66,244,1)0%,rgba(70,66,244,1)100%)] w-[188px] h-[54px]  sm:w-[209px] sm:h-[60px] text-[16px] font-bold rounded-[6px] text-white border-2 border-[#7A42F4] cursor-pointer">
      {text}
    </button>
  );
};

export default Btn;
