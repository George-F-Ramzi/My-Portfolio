export default function UXSection() {
  return (
    <section className={`mb-8  grid grid-cols-projects gap-8`}>
      {projects.map((p, i) => {
        return (
          <Project name={p.name} details={p.details} url={p.url} key={i} />
        );
      })}
    </section>
  );
}

interface Prop {
  name: string;
  details: string;
  url: string;
}

function Project({ name, details, url }: Prop) {
  return (
    <div className="bg-BBG h-[460px] pt-14 px-7 pb-10 rounded-2xl">
      <div className="flex flex-col h-full w-full">
        <h2 className="text-white  max-[400px]:text-3xl font-bold text-[40px]">
          {name}
        </h2>
        <p className="mt-8  grow text-para">{details}</p>
        <a
          target="_blank"
          href={url}
          className="inline-block text-center text-white  font-bold text-base w-full py-3 bg-BP rounded-full "
        >
          See The Design
        </a>
      </div>
    </div>
  );
}

let projects = [
  {
    name: "Chat_~",
    details: "Chat_~ is a UX UI Mesagging kit for mobile and the web",
    url: "https://www.figma.com/file/u6HQwCCpFYT8I1nUGO9x73/Messaging-App-UI-kit?type=design&node-id=302%3A3434&mode=design&t=uRuPvGSzlo3A1HSq-1",
  },
  {
    name: "Great Pyramid",
    details:
      "The Greate Pyramid is a design system i built to help me in my ux ui work ",
    url: "https://www.figma.com/file/VH6QOFYuS3GmiMUlnOfwTu/My-Design-system?type=design&node-id=93-5&mode=design&t=p19XwiOKnzSCvNWs-0",
  },
  {
    name: "My Portfolio",
    details: "My Portfolio Desgin",
    url: "https://www.figma.com/file/qyKs9FtF9GXgxzWMilGgX6/My-Portfolio?type=design&node-id=764-130&mode=design&t=PwpcoCK492Ix2N3r-0",
  },
];
