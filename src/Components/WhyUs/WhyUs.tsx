import User from "../../img/4.png";
import Model from "./Model";

export default function WhyUs() {
  return (
    <div className=" my-16 px-2 md:px-0  flex items-center justify-center flex-col">
      <div className="lg:w-10/12 md:w-11/12 w-full mx-auto bg-gray rounded-lg flex flex-col gap-12 px-2 lg:px-12 py-8">
        <div className="md:text-6xl text-4xl font-bold text-center mx-auto">Why Us</div>
        <div className="flex gap-10 md:gap-6 flex-col md:flex-row items-center justify-center">
          <Model
            img={User}
            title="Bespoke Solution"
            summary="Support your header with a short one liner."
          />
          <Model
            img={User}
            title="Bespoke Solution"
            summary="Support your header with a short one liner."
          />
          <Model
            img={User}
            title="Bespoke Solution"
            summary="Support your header with a short one liner."
          />
        </div>
      </div>
      <div className="mt-10">
        <button className="btn !py-4 !px-8">Create my storefront</button>
      </div>
    </div>
  );
}
