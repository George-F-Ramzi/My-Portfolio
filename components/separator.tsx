export default function Separator({ title }: { title: string }) {
  return (
    <div
      className={`mb-8  font-bold text-center rounded-2xl bg-[#EE9B00] text-[#001219] text-xl py-[25px]`}
    >
      {title}
    </div>
  );
}
