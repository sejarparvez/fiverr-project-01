export default function Investor() {
  return (
    <div className="flex flex-col bg-cyan-200 md:px-16 lg:px-40 text-white items-center pt-16 pb-10 gap-10">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-28 w-full mx-auto">
        <div className="flex flex-col gap-1 text-center">
          <span className="font-bold text-4xl md:text-6xl">927</span>
          <span className="text-sm md:text-xl">Customers served</span>
        </div>
        <div className="flex flex-col gap-1 text-center">
          <span className="font-bold text-4xl md:text-6xl">10,403</span>
          <span className="text-sm md:text-xl">Products sold</span>
        </div>
        <div className="flex flex-col gap-1 text-center">
          <span className="font-bold text-4xl md:text-6xl">658</span>
          <span className="text-sm md:text-xl">Households improved</span>
        </div>
      </div>
      <div className="font-bold text-3xl md:text-4xl">Investors</div>
    </div>
  );
}
