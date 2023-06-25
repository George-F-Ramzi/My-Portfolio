import Image from "next/image";
import React from "react";

export default function SkillsUsed() {
  return (
    <div className=" max-[700px]:mt-9 grow mt-12 ">
      <div className="flex h-fit items-center justify-between w-[261px]">
        <Image
          className="w-7 h-7 aspect-square"
          alt="skill used"
          src={"/nextjs.svg"}
          height={28}
          width={28}
        />
        <Image
          className="w-7 h-7 aspect-square"
          alt="skill used"
          src={"/typescript.svg"}
          height={28}
          width={28}
        />
        <Image
          className="w-7 h-7 aspect-square"
          alt="skill used"
          src={"/mysql.svg"}
          height={28}
          width={28}
        />
        <Image
          className="w-7 h-7 aspect-square"
          alt="skill used"
          src={"/figma.svg"}
          height={28}
          width={19}
        />
        <Image
          className="w-12 h-7  aspect-square"
          alt="skill used"
          src={"/tailwind.svg"}
          height={28}
          width={47}
        />
      </div>
    </div>
  );
}
