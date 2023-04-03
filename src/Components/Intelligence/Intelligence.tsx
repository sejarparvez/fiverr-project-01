import Pic13 from "../../img/13.png";
import Pic14 from "../../img/14.png";

export default function Intelligence() {
  return (
    <div className="bg-gray flex flex-col md:flex-row py-10 md:py-20 lg:py-40 p-4 md:p-8 lg:p-0 gap-0 md:gap-12 lg:gap-0 ">
      <div className="md:flex-1 lg:pl-40">
        <div className="text-3xl md:text-6xl font-bold py-10 md:mt-16">
          Desarrollado por Puente Intelligence
        </div>
        <div className=" text-slate-600">
          Somos objetivos, transparentes y nos basamos en reglas claras. Arch
          desarrolla y mantiena los indices mercado mas confiables para Web3.
        </div>
      </div>
      <div className=" flex md:-rotate-12 mt-10 md:mt-20 lg:mt-0 scale-125 md:scale-100 justify-center items-center md:-ml-20">
        <div>
          <img src={Pic13} alt="" className="w-[28rem]" />
        </div>
        <div className="md:-mx-32 -ml-0">
          <img src={Pic14} alt="" className="w-[28rem]" />
        </div>
      </div>
    </div>
  );
}
