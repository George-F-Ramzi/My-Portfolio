import Image from "next/image";
import ContactActions from "./micro_components/contact_actions";

export default function LandingHero() {
  return (
    <section className="mt-12 max-[932px]:flex max-[932px]:flex-col-reverse gap-x-8  grid grid-cols-[1fr,auto]">
      <div className="h-fit border border-color max-[700px]:px-6 max-[700px]:py-11 max-[700px]:min-w-[312px] w-full p-11 pr-4 rounded-2xl bg-Gradient">
        <p className="text-para text-base leading-LH">Front-End Developer</p>
        <h2 className="text-white mb-9 max-[620px]:text-4xl max-[500px]:text-[32px] text-5xl font-bold mt-7 leading-LH">
          George F.Ramzi
        </h2>
        <div className="h-[212px] flex flex-col">
          <p className="text-para  grow text-base max-w-[500px] leading-LH">
            Hi, I’m Front-end Developer based in Egypt, my love for the web
            started when I start coding my <b>UX UI work</b> seeing my designs
            going interactive for me, it’s like seeing my <b>designs alive.</b>
          </p>
          <ContactActions />
        </div>
      </div>
      <div className=" max-[932px]:hidden max-[472px]:flex max-[472px]:mb-8 max-[472px]:w-full max-[472px]:h-[500px] rounded-2xl flex items-center justify-center border-color w-[340px] h-full bg-Gradient ">
        <Image
          className="w-[244px] h-[336px]"
          src={"/me.png"}
          alt="George face"
          height={336}
          width={244}
        />
      </div>
    </section>
  );
}
