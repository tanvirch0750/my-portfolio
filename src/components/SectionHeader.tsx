export default function SectionHeader({
  title,
  eybrow,
  description,
}: {
  title: string;
  eybrow: string;
  description: string;
}) {
  return (
    <>
      <div className=" flex justify-center">
        <p className=" uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text ">
          {title}
        </p>
      </div>

      <h2 className=" font-serif text-3xl md:text-4xl mt-6 text-center tracking-wide">
        {eybrow}
      </h2>
      <p className="  text-white/60 mt-4 text-center md:text-md max-w-lg mx-auto">
        {description}
      </p>
    </>
  );
}
