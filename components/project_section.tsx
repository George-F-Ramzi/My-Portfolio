import Image from "next/image";
import ProjectCTA from "./project_cta";

export default function ProjectSection() {
  return (
    <section className="gap-x-8  mb-8 grid grid-cols-[2fr,1fr] max-[820px]:grid-cols-[1fr]">
      <div className="text-white pt-12 pr-7 pb-20 pl-12 min-w-[400px] max-[820px]:p-7  max-[820px]:min-w-[328px]  bg-BBG  rounded-2xl ">
        <h2 className="text-para text-base max-[820px]:mb-3 mb-6 leading-LH">
          Personal Project
        </h2>
        <h1 className="leading-LH text-[64px] font-bold max-[820px]:mb-6 mb-[44px]">
          Soundly
        </h1>
        <p className="text-base text-para max-w-[496px] max-[820px]:mb-9 mb-20">
          Soundly is a music-sharing platform aiming to deliver the best user
          experience and libre environment for sharing music with no
          algorithm-based recommendation and an opportunity for everyone to get
          discovered and become famous
        </p>
        <div className="grid align-middle max-[820px]:mb-12 max-w-fit grid-cols-5 gap-7">
          <Image height={32} width={32} alt="tech icon" src={"/nextjs.svg"} />
          <Image
            height={32}
            width={32}
            alt="tech icon"
            src={"/typescript.svg"}
          />
          <Image height={32} width={32} alt="tech icon" src={"/mysql.svg"} />
          <Image height={32} width={21} alt="tech icon" src={"/figma.svg"} />
          <Image
            height={32}
            width={52}
            className="max-w-[52px] -ml-4 h-[32px] object-cover"
            alt="tech icon"
            src={"/tailwind.svg"}
          />
        </div>
        <div className="hidden max-[820px]:block">
          <a
            target="_blank"
            href="https://soundly-peach.vercel.app/"
            className="inline-block text-center mb-6 font-bold text-base w-full py-3 bg-BP rounded-full "
          >
            Try It Now
          </a>
          <div className="grid gap-x-4 grid-cols-2">
            <a
              target="_blank"
              href="https://github.com/George-F-Ramzi/soundly"
              className="inline-block text-center text-white  font-bold text-base w-full py-3 bg-BS rounded-full "
            >
              Code
            </a>
            <a
              target="_blank"
              href="https://www.figma.com/file/nohasksUb7HzWLOFQ8JiPV/Soundly----music-sharing-platfrom?type=design&mode=design&t=xZSFtb9YZf0uSdyx-0"
              className="inline-block text-center text-[#CCCCCC] font-bold text-base w-full py-3 bg-transparent border border-[#CCCCCC] rounded-full "
            >
              Design
            </a>
          </div>
        </div>
      </div>
      <ProjectCTA />
    </section>
  );
}
