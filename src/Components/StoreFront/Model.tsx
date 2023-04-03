type userProps = { title: string; summary: string; text: string; pic: string };

export default function Model({ text, title, summary, pic }: userProps) {
  return (
    <div className="bg-white flex-col md:flex-row flex rounded-2xl overflow-hidden">
      <div className="md:flex-1 w-full  md:py-8 py-4 lg:pl-10 md:pr-20 pl-4 pr-4 lg:w-96 gap-6">
        <div className="text-2xl text-blue-200 font-bold">{text}</div>
        <div className="md:text-4xl text-3xl md:tracking-wide font-bold py-6">
          {title}
        </div>
        <div className="text-blue-100 md:tracking-wider">{summary}</div>
        <div className="py-6">
          <button className="btn !py-4">Create my storefront</button>
        </div>
      </div>
      <div className=" bg-cyan-200 md:-ml-20 lg:ml-0 flex-1 flex">
        <div className="flex items-end justify-center">
          <img
            src={pic}
            alt=""
            className=" items-end w-11/12 md:w-full lg:w-11/12"
          />
        </div>
      </div>
    </div>
  );
}
