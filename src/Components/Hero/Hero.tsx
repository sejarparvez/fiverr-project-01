import Pic1 from "../../img/4.png";

export default function Hero() {
  return (
    <div className=" relative grid grid-cols-2 gap-20 items-center my-16 mx-20">
      <div className=" col-span-1">
        <div className="text-6xl font-bold py-2">
          Looking to change the way supply chain connects.
        </div>
        <div className=" text-blue-200 py-4 text-justify tracking-widest">
          Where buyers can easily find reliable and qualified suppliers, while
          factories can reach new customers and increase their market exposure.
        </div>
        <div className="py-4">
          <button className="btn underline scale-125">Learn More</button>
        </div>
      </div>
      <div className=" col-span-1">
        <img src={Pic1} alt="" className="w-[30rem]" />
      </div>
    </div>
  );
}
