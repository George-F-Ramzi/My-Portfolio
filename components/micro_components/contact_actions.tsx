"use client";

import Image from "next/image";

export default function ContactActions() {
  return (
    <div className="flex items-center max-[700px]:w-[270px] justify-between w-[330px]">
      <a
        onClick={(e) => {
          e.preventDefault();
          navigator.clipboard.writeText("george.fawzi.ramzi@gmail.com");
          window.alert("Email Copied");
        }}
        className="inline-block cursor-pointer max-[700px]:px-6 max-[700px]:text-[14px] h-12 px-10 py-3 font-bold leading-LH bg-white text-black text-base rounded-full"
      >
        Contact Me
      </a>
      <div className="flex w-[120px]  items-center justify-between">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/george-ramzi-74646a228"
          className="inline-block cursor-pointer h-6 w-6"
        >
          <Image
            className="aspect-square h-6 w-6"
            height={24}
            width={24}
            alt="Social media icon"
            src="/linkden.svg"
          />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/GeorgeRamzi2"
          className="inline-block cursor-pointer "
        >
          <Image
            className="aspect-square h-6 w-7"
            height={24}
            width={29}
            alt="Social media icon"
            src="/twitter.svg"
          />
        </a>
        <a
          target="_blank"
          href="https://github.com/George-F-Ramzi"
          className="inline-block cursor-pointer -ml-1"
        >
          <Image
            className="aspect-square h-6  w-6"
            height={24}
            width={24}
            alt="Social media icon"
            src="/github.svg"
          />
        </a>
      </div>
    </div>
  );
}
