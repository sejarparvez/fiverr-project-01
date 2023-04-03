import Pic11 from "../../img/11.png";
import Pic12 from "../../img/12.png";
import Model from "./Model";

export default function StoreFront() {
  return (
    <div className=" bg-gray pt-20  flex flex-col gap-10 p-4">
      <div className=" flex flex-col gap-4 items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Storefront
        </h1>
        <span className="text-center text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          laborum!
        </span>
      </div>
      <div className=" lg:w-3/4 w-full mx-auto flex flex-col gap-16">
        <Model
          text="Chat"
          title="Un portafolio preparado para adaptarse a tu perfil de riesgo"
          summary="Estos productos, elaborados por expertos y rebalanceados automáticamente, ofrecen todas las ventajas de la diversificación al combinar index tokens Y activos individuales, como las stablecoins, en un único token"
          pic={Pic11}
        />
        <Model
          text="Dashboard"
          title="Múltiples criptoactivos en un solo token"
          summary="Estos productos, elaborados por expertos y rebalanceados automáticamente, ofrecen todas las ventajas de la diversificación al combinar index tokens Y activos individuales, como las stablecoins, en un único token"
          pic={Pic12}
        />
      </div>
    </div>
  );
}
