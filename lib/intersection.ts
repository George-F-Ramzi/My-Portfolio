"use client";

import { MutableRefObject, useEffect, useState } from "react";

export default function Intersection(
  element:
    | MutableRefObject<HTMLHeadingElement>
    | MutableRefObject<HTMLDivElement>,
  rootMargin: string
) {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    element.current && observer.observe(element.current);

    return () => observer.unobserve(element!.current);
  }, []);

  return isVisible;
}
