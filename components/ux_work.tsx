import Image from "next/image";
import React from "react";

export default function UXWork() {
  return (
    <section className="mt-32  max-[800px]:mt-8 ">
      <div className="grid  max-[800px]:flex mb-8 grid-cols-2 gap-x-8">
        <div className="max-w-[592px] max-[800px]:hidden h-[620px]">
          <Image
            className="w-full h-full"
            src={"/chat.png"}
            height={620}
            width={592}
            alt="ux ui project cover"
          />
        </div>
        <div className="p-11 min-w-[328px] max-[500px]:h-[445px] max-[500px]:p-6  h-[620px] grow rounded-2xl  bg-Gradient border-color border">
          <div className="flex flex-col h-full">
            <p className="text-base leading-LH text-[#2BEA55] mb-7">
              MY UX UI WORK
            </p>
            <h2 className="leading-LH font-bold text-4xl max-[500px]:text-[32px]">
              Chat_~
            </h2>
            <div className="flex  flex-col h-full">
              <p className="mt-9 grow leading-LH text-base text-para">
                Chat_~ is a UX UI Mesagging kit for mobile and the web
              </p>
              <a
                target="_blank"
                href="https://www.figma.com/file/u6HQwCCpFYT8I1nUGO9x73/Messaging-App-UI-kit?type=design&node-id=302-3434&mode=design&t=vE7VO7kQbM4DnLsn-0"
                className=" cursor-pointer w-full py-3 bg-white text-black font-bold inline-block rounded-full text-center"
              >
                See The Design
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid  max-[800px]:flex mb-8 grid-cols-2 gap-x-8">
        <div className="p-11 min-w-[328px] max-[500px]:h-[445px] max-[500px]:p-6  h-[620px] grow rounded-2xl  bg-Gradient border-color border">
          <div className="flex flex-col h-full">
            <p className="text-base leading-LH text-[#2BEA55] mb-7">
              MY UX UI WORK
            </p>
            <h2 className="leading-LH font-bold text-4xl max-[500px]:text-[32px]">
              Greate Pyramid
            </h2>
            <div className="flex  flex-col h-full">
              <p className="mt-9 grow leading-LH text-base text-para">
                The Greate Pyramid is a design system i built to help me in my
                UX UI work
              </p>
              <a
                target="_blank"
                href="https://www.figma.com/file/VH6QOFYuS3GmiMUlnOfwTu/My-Design-system?type=design&mode=design"
                className=" cursor-pointer w-full py-3 bg-white text-black font-bold inline-block rounded-full text-center"
              >
                See The Design
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-[592px] max-[800px]:hidden h-[620px]">
          <Image
            className="w-full h-full"
            src={"/system.png"}
            height={620}
            width={592}
            alt="ux ui project cover"
          />
        </div>
      </div>
      <div className="grid  max-[800px]:flex  grid-cols-2 gap-x-8">
        <div className="max-w-[592px] rounded-2xl bg-[#3F3F3F] max-[800px]:hidden h-[620px]"></div>
        <div className="p-11 min-w-[328px] max-[500px]:h-[445px] max-[500px]:p-6  h-[620px] grow rounded-2xl  bg-Gradient border-color border">
          <div className="flex flex-col h-full">
            <p className="text-base leading-LH text-[#2BEA55] mb-7">
              MY UX UI WORK
            </p>
            <h2 className="leading-LH font-bold text-4xl max-[500px]:text-[32px]">
              My Portfolio
            </h2>
            <div className="flex  flex-col h-full">
              <p className="mt-9 grow leading-LH text-base text-para">
                My Portfolio Design
              </p>
              <a
                target="_blank"
                href="https://www.figma.com/file/qyKs9FtF9GXgxzWMilGgX6/My-Portfolio?type=design&node-id=0-1&mode=design&t=aa2QKvOGpIifD0rM-0"
                className=" cursor-pointer w-full py-3 bg-white text-black font-bold inline-block rounded-full text-center"
              >
                See The Design
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
