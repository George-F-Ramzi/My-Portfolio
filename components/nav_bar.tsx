"use client";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between">
      <h1 className="text-base font-bold ">$George;</h1>
      <ul className="flex font-bold justify-between max-[560px]:w-[202px] w-[218px]">
        <li className=" ">
          <a className=" inline-block">Home</a>
        </li>
        <li className="text-para">
          <a className="inline-block">Projects</a>
        </li>
        <li className="text-para">
          <a className="inline-block">Skills</a>
        </li>
      </ul>
      <a className="h-9 px-6 flex text-[14px] max-[560px]:hidden items-center rounded-full text-center bg-white text-black font-bold">
        Contact Me
      </a>
    </nav>
  );
}
