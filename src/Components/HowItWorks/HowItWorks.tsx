import Pic from "../../img/5.png";

export default function HowItWorks() {
  return (
    <div className="flex flex-col gap-16 pt-10 md:pt-16 lg:pt-28 px-4 pb-10 md:pb-0">
      <div className="flex items-center justify-center flex-col text-center gap-6">
        <h1 className="font-bold text-4xl md:text-6xl">How it works</h1>
        <span className="text-slate-500">
          A platform packed with everything you need to build trusted trades
        </span>
      </div>
      <div className="flex flex-col gap-8 md:flex-row mx-auto items-center justify-center md:px-4">
        <div className="w-full lg:w-2/5 flex justify-end">
          <img src={Pic} alt="" />
        </div>
        <div className="flex flex-col gap-10 justify-center lg:ml-16">
          <div className="flex flex-col gap-4">
            <div className="flex gap-7 lg:items-center">
              <span className="h-8 w-16 lg:w-12 lg:h-12 bg-blue-200 text-white rounded-full flex items-center justify-center font-bold lg:text-5xl text-2xl">
                1
              </span>
              <span className="text-slate-500">
                A platform packed with everything you need to build trusted
                trades
              </span>
            </div>
            <div className="flex gap-7 lg:items-center">
              <span className="h-8 w-16 lg:w-12 lg:h-12 bg-blue-200 text-white rounded-full flex items-center justify-center font-bold lg:text-5xl text-2xl">
                2
              </span>
              <span className="text-slate-500">
                A platform packed with everything you need to build trusted
                trades
              </span>
            </div>
            <div className="flex gap-7 lg:items-center">
              <span className="h-8 w-16 lg:w-12 lg:h-12 bg-blue-200 text-white rounded-full flex items-center justify-center font-bold lg:text-5xl text-2xl">
                3
              </span>
              <span className="text-slate-500">
                A platform packed with everything you need to build trusted
                trades
              </span>
            </div>
            <div className="flex gap-7 lg:items-center">
              <span className="h-8 w-16 lg:w-12 lg:h-12 bg-blue-200 text-white rounded-full flex items-center justify-center font-bold lg:text-5xl text-2xl">
                4
              </span>
              <span className="text-slate-500">
                A platform packed with everything you need to build trusted
                trades
              </span>
            </div>
            <div className="flex gap-7 lg:items-center">
              <span className="h-8 w-16 lg:w-12 lg:h-12 bg-blue-200 text-white rounded-full flex items-center justify-center font-bold lg:text-5xl text-2xl">
                5
              </span>
              <span className="text-slate-500">
                A platform packed with everything you need to build trusted
                trades
              </span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="btn text-xl py-4 lg:!py-4">
              Create my storefront
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
