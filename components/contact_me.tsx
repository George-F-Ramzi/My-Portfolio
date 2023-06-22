import Arrow from "./arrow";

export default function ContactMe() {
  return (
    <a
      target="_blank"
      href="https://www.linkedin.com/in/george-ramzi-74646a228/"
      className="mt-8  bg-BP rounded-2xl h-[136px] flex items-center px-8 "
    >
      <h2 className="text-white max-[540px]:text-[32px] font-bold text-5xl grow">
        Contact Me
      </h2>
      <Arrow
        color="white"
        height="72"
        width="72"
        classNames="max-[540px]:h-[48px] max-[540px]:w-[48px]  h-[72px] w-[72px]"
      />
    </a>
  );
}
