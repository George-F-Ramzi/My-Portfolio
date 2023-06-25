import React from "react";

export default function ProjectActions() {
  return (
    <div className="grid grid-rows-2 gap-y-6">
      <a className="inline-block leading-LH p-3 h-12 rounded-full font-bold text-base text-center bg-white text-black ">
        Try It Now
      </a>
      <div className="grid grid-cols-2 gap-x-6">
        <a className="inline-block p-3 leading-LH h-12 rounded-full font-bold text-base text-center bg-[#585555] text-white ">
          Code
        </a>
        <a className="inline-block p-3 leading-LH h-12 rounded-full font-bold text-base text-center bg-transparent text-white border border-[#585555] ">
          Design
        </a>
      </div>
    </div>
  );
}
