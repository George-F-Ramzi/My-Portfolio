"use client";

export default function NavBar() {
  return (
    <nav id="home" className="flex items-center justify-between">
      <a href="#home" className="text-base font-bold ">
        $George;
      </a>
      <ul className="flex font-bold justify-between max-[560px]:w-[202px] w-[218px]">
        <li className=" ">
          <a href="#home" className=" inline-block">
            Home
          </a>
        </li>
        <li className="text-para">
          <a href="#projects" className="inline-block">
            Projects
          </a>
        </li>
        <li className="text-para">
          <a href="#skills" className="inline-block">
            Skills
          </a>
        </li>
      </ul>
      <a
        onClick={(e) => {
          e.preventDefault();
          navigator.clipboard.writeText("george.fawzi.ramzi@gmail.com");
          window.alert("Email Copied");
        }}
        className="h-9 cursor-pointer px-6 flex text-[14px] max-[560px]:hidden items-center rounded-full text-center bg-white text-black font-bold"
      >
        Contact Me
      </a>
    </nav>
  );
}
