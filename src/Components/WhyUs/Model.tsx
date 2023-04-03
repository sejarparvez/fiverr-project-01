type userProps = { img: string; title: string; summary: string };

export default function Model({ img, title, summary }: userProps) {
  return (
    <div className=" md:px-12 text-center  lg:w-1/3 w-full flex flex-col items-center justify-center gap-4">
      <div className="w-32 h-32 rounded-full border-8 border-blue-100">
        <img src={img} alt="" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      <p className=" text-blue-200">{summary}</p>
    </div>
  );
}
