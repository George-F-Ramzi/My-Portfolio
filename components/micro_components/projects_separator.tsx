"use client";

import Intersection from "@/lib/intersection";
import Image from "next/image";
import { MutableRefObject, useRef } from "react";

export default function ProjectsSeparator() {
  const ref = useRef<HTMLHeadingElement | null>(null);
  let inViewPort = Intersection(
    ref as MutableRefObject<HTMLHeadingElement>,
    "-200px"
  );

  return (
    <div className="relative  max-[470px]:mt-14 max-[470px]:ml-2  max-[470px]:mb-8 max-[800px]:mt-20 mb-20 mt-[156px]">
      <h2
        ref={ref}
        className={`text-[96px] ${
          inViewPort ? "fade" : "fade-out opacity-0"
        } max-[470px]:text-4xl max-[470px]:mb-8  max-[600px]:text-5xl max-[1020px]:text-7xl font-bold leading-LH`}
      >
        Selected Work
      </h2>
      <Image
        className="h-[120px] max-[800px]:hidden animate-bounce w-[160px] absolute -top-20 right-24"
        alt="arrow"
        height={120}
        width={160}
        src="/Arrow.svg"
      />
    </div>
  );
}
