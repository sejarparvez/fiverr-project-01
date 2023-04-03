type userProps = { img: string; title: string; summary: string };

export default function Model({ img, title, summary }: userProps) {
  return (
    <div className="flex flex-col bg-cyan-200 md:w-1/3 lg:1/4 p-4 rounded-2xl gap-4">
      <div className=" flex justify-end">
        <div className="h-24 w-24 rounded-full border overflow-hidden ">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="text-white font-bold text-4xl">{title}</div>
      <div className="text-white">{summary}</div>
    </div>
  );
}
