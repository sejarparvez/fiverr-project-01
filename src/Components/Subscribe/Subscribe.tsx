export default function Subscribe() {
  return (
    <div className="bg-cyan-200 flex px-10 p-12 lg:m-44 mx-2 md:my-20 my-6 flex-col md:flex-row gap-10 md:gap-0 rounded-2xl">
      <div className="md:flex-1 text-4xl md:text-5xl text-white flex items-center justify-center font-bold">
        Subscribe To Our Weekly Newsletter
      </div>
      <form className="flex-1 flex items-center justify-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="abc@example.com"
          className="bg-black text-white placeholder:text-white h-12 w-40 md:w-60 pl-4 rounded-l-xl outline-none"
        />
        <button className="bg-white h-12 px-4 rounded-r-xl font-bold">
          Subscribe
        </button>
      </form>
    </div>
  );
}
