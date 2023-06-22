import Image from "next/image";

export default function SkillsSection({ show }: { show: string }) {
  return (
    <section className={`${show} mb-8 grid grid-cols-skills gap-8`}>
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
    <div className="bg-BBG pt-[40px] h-[248px]  px-7 pb-[42px] rounded-2xl">
      <h2 className="text-[28px] mb-[52px] font-bold text-white">{name}</h2>
      <Image height={72} alt="tech skill" width={width} src={url} />
    </div>
  );
}

let skills = [
  {
    name: "React Js",
    url: "/react.svg",
    width: 83,
  },
  {
    name: "Next Js",
    url: "/nextjs.svg",
    width: 72,
  },
  {
    name: "TypeScript",
    url: "/typescript.svg",
    width: 72,
  },
  {
    name: "JavaScript",
    url: "/javascript.svg",
    width: 72,
  },
  {
    name: "Node JS",
    url: "/node.svg",
    width: 64,
  },
  {
    name: "Tailwind CSS",
    url: "/tailwind.svg",
    width: 120,
  },
  {
    name: "Github",
    url: "/github.svg",
    width: 74,
  },
  {
    name: "Story Book",
    url: "/storybook.svg",
    width: 57,
  },
  {
    name: "Graph QL",
    url: "/graphql.svg",
    width: 64,
  },
  {
    name: "Figma",
    url: "/figma.svg",
    width: 48,
  },
  {
    name: "MySql",
    url: "/mysql.svg",
    width: 72,
  },
];
