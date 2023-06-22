"use client";

import Image from "next/image";

export default function LandingSection() {
  return (
    <section className="gap-x-8 mb-8 max-[1020px]:block grid grid-cols-[1fr,auto]">
      <div className="h-fit max-[700px]:p-7 max-[700px]:min-w-[328px] w-full pt-8 pl-12 pr-4 pb-12 rounded-2xl bg-BBG">
        <h1 className="text-5xl max-[620px]:text-4xl max-[500px]:text-2xl text-white font-bold leading-LH">
          Your <span className="text-[#94D2BD]">Tal</span>
          <span className="text-[#EE9B00]">en</span>
          <span className="text-[#F07167]">ted</span>
          <br />
          Front-end Developer
        </h1>
        <p className="text-base max-w-[550px] text-para leading-LH mt-7">
          Hi, my name is <b>George Fawzi</b>, I’m Front-end Developer based in
          Egypt, my love for the web started when I start coding my{" "}
          <b>UX UI work</b> seeing my designs going interactive for me, it’s
          like seeing my <b>designs alive</b>.
        </p>
        <a
          className="rounded-full inline-block max-[500px]:mt-[56px] mt-[68px] text-base font-bold text-white bg-BP leading-LH px-12 py-3"
          target="_blank"
          href="https://www.linkedin.com/in/george-ramzi-74646a228/"
        >
          Contact Me
        </a>
      </div>
      <Image
        className="h-full max-[1020px]:hidden max-w-[324px]"
        alt="George Fawzi Face"
        height={440}
        width={324}
        src="/me.png"
      />
    </section>
  );
}
