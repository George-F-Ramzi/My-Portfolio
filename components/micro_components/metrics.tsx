"use client";

import Intersection from "@/lib/intersection";
import { MutableRefObject, useEffect, useRef, useState } from "react";

export default function Metrics() {
  const [number, setNumber] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  let inViewPort = Intersection(
    ref as MutableRefObject<HTMLDivElement>,
    "-160px"
  );

  useEffect(() => {
    if (!inViewPort) return;
    let timeout;
    if (number !== 100) {
      timeout = setTimeout(() => {
        setNumber((number) => number + 1);
      }, 10);
    } else {
      clearTimeout(timeout);
    }
  }, [number, inViewPort]);

  return (
    <div className="grid -ml-2 gap-7 grid-cols-metrics">
      <div className="w-[114px] flex flex-col items-center ">
        <div
          ref={ref}
          // @ts-ignore
          style={{ "--incrementer": `${number}%` }}
          className="h-[100px] mb-6 w-[100px] flex items-center justify-center text-2xl font-bold progress-circle"
        >
          {number}
        </div>
        <h2 className="text-bold font-bold  leading-LH text-base">
          Performance
        </h2>
      </div>
      <div className="w-[114px] flex flex-col items-center ">
        <div
          ref={ref}
          // @ts-ignore
          style={{ "--incrementer": `${number}%` }}
          className="h-[100px] mb-6 w-[100px] flex items-center justify-center text-2xl font-bold progress-circle"
        >
          {number}
        </div>
        <h2 className="text-bold font-bold  leading-LH text-base">SEO</h2>
      </div>
      <div className="w-[114px] flex flex-col items-center ">
        <div
          ref={ref}
          // @ts-ignore
          style={{ "--incrementer": `${number}%` }}
          className="h-[100px] mb-6 w-[100px] flex items-center justify-center text-2xl font-bold progress-circle"
        >
          {number}
        </div>
        <h2 className="text-bold font-bold  leading-LH text-base">
          Accessibility
        </h2>
      </div>
      <div className="w-[114px] flex flex-col items-center ">
        <div
          ref={ref}
          // @ts-ignore
          style={{ "--incrementer": `${number}%` }}
          className="h-[100px] mb-6 w-[100px] flex items-center justify-center text-2xl font-bold progress-circle"
        >
          {number}
        </div>
        <h2 className="text-bold w-full  font-bold  leading-LH text-base">
          Best Practices
        </h2>
      </div>
    </div>
  );
}
