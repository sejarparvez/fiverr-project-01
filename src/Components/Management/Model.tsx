type userProps = { img: string; title: string; summary: string };
export default function Model({ img, title, summary }: userProps) {
  return (
    <div className="flex relative items-center justify-center gap-4 flex-col border-2 rounded-3xl w-80 px-6 pt-8 pb-4 border-gray scale-90">
      <div>
        <img src={img} alt="" className="w-20 absolute -top-10 left-32" />
      </div>
      <div className=" text-center text-blue-200 font-bold text-4xl">
        {title}
      </div>
      <div className="text-center">{summary}</div>
    </div>
  );
}
