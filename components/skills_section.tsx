import Image from "next/image";

export default function SkillsSection() {
  return (
    <section className={` mb-8 grid grid-cols-skills gap-8`}>
      {skills.map((p, i) => {
        return <Skill width={p.width} name={p.name} url={p.url} key={i} />;
      })}
    </section>
  );
}

interface Prop {
  name: string;
  url: string;
  width: number;
}

function Skill({ name, url, width }: Prop) {
  return (
    <div className="bg-Gradient border border-color p-8 h-fit  rounded-2xl">
      <h2 className="text-[20px] mb-12 font-bold text-white">{name}</h2>
      <Image
        className="w-auto h-[48px]"
        height={48}
        alt="tech skill"
        width={width}
        src={url}
      />
    </div>
  );
}

let skills = [
  {
    name: "React Js",
    url: "/reactjs.svg",
    width: 55,
  },
  {
    name: "Next Js",
    url: "/nextjs.svg",
    width: 48,
  },
  {
    name: "TypeScript",
    url: "/typescript.svg",
    width: 48,
  },
  {
    name: "JavaScript",
    url: "/javascript.svg",
    width: 48,
  },
  {
    name: "Node JS",
    url: "/nodejs.svg",
    width: 42,
  },
  {
    name: "Tailwind CSS",
    url: "/tailwind.svg",
    width: 80,
  },
  {
    name: "Github",
    url: "/github.svg",
    width: 48,
  },
  {
    name: "Story Book",
    url: "/storybook.svg",
    width: 57,
  },
  {
    name: "Graph QL",
    url: "/graphQL.svg",
    width: 42,
  },
  {
    name: "Figma",
    url: "/figma.svg",
    width: 32,
  },
  {
    name: "MySql",
    url: "/mysql.svg",
    width: 48,
  },
  {
    name: "Drizzel ORM",
    url: "/Drizzel.svg",
    width: 48,
  },
];
