type userProps = { img: string; title: string; summary: string };
export default function Model({ img, title, summary }: userProps) {
  return (
    <div className="flex relative items-center justify-center gap-4 flex-col border-2 rounded-3xl lg:w-1/4 md:w-[28%] md:px-2 lg:px-6 px-6 pt-8 pb-4 border-gray">
      <div>
        <img src={img} alt="" className="w-20 -mt-20" />
      </div>
      <div className=" text-center text-blue-200 font-bold md:text-3xl lg:text-4xl text-4xl">
        {title}
      </div>
      <div className="text-center">{summary}</div>
    </div>
  );
}
