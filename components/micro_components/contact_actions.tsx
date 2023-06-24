import Image from "next/image";

export default function ContactActions() {
  return (
    <div className="flex items-center max-[700px]:w-[270px] justify-between w-[330px]">
      <a className="inline-block max-[700px]:px-6 max-[700px]:text-[14px] h-12 px-10 py-3 font-bold leading-LH bg-white text-black text-base rounded-full">
        Contact Me
      </a>
      <div className="flex w-[120px]  items-center justify-between">
        <a className="inline-block h-6 w-6">
          <Image
            className="aspect-square h-6 w-6"
            height={24}
            width={24}
            alt="Social media icon"
            src="/linkden.svg"
          />
        </a>
        <a className="inline-block ">
          <Image
            className="aspect-square h-6 w-7"
            height={24}
            width={29}
            alt="Social media icon"
            src="/twitter.svg"
          />
        </a>
        <a className="inline-block -ml-1">
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
