import Arrow from "./arrow";

export default function ProjectCTA() {
  return (
    <div className="text-white grid max-[820px]:hidden gap-y-8 grid-rows-[2.5fr,2fr,1fr]">
      <a
        target="_blank"
        href="https://soundly-peach.vercel.app/"
        className="block 
         cursor-pointer relative h-full py-9 pl-9 pr-5 text-white rounded-2xl  min-w-[312px] bg-BP "
      >
        <h1 className="font-bold text-5xl">Try It Now</h1>
        <Arrow
          color="white"
          height="40"
          width="40"
          classNames="absolute h-[40px] bottom-5 right-5 w-[40px]"
        />
      </a>
      <a
        target="_blank"
        href="https://github.com/George-F-Ramzi/soundly"
        className={`block cursor-pointer relative h-full py-9 pl-9 pr-5 text-white rounded-2xl  min-w-[312px] bg-BS `}
      >
        <h1 className="font-bold text-5xl">Code</h1>
        <Arrow
          color="white"
          height="40"
          width="40"
          classNames="absolute h-[40px] bottom-5 right-5 w-[40px]"
        />
      </a>
      <a
        target="_blank"
        href="https://www.figma.com/file/nohasksUb7HzWLOFQ8JiPV/Soundly----music-sharing-platfrom?type=design&mode=design&t=xZSFtb9YZf0uSdyx-0"
        className={`block  cursor-pointer h-full rounded-2xl min-w-[312px] bg-transparent border border-[#B8B8B8] `}
      >
        <div className="w-full h-full flex pl-9 pr-5 items-center  rounded-2xl">
          <h1 className="font-bold text-[#B8B8B8] text-[32px] grow">Design</h1>
          <Arrow
            color="#B8B8B8"
            height="40"
            width="40"
            classNames="h-[40px] w-[40px]"
          />
        </div>
      </a>
    </div>
  );
}
