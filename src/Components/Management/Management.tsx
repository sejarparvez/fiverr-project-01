import Pic1 from "../../img/4.png";
import Model from "./Model";

export default function Management() {
  return (
    <div className="flex flex-col items-center justify-center md:mt-20 mt-32 mb-8 sm:flex-row sm:flex-wrap sm:justify-center sm:mx-4 md:mx-0 lg:mx-20 gap-16 p-4">
      <Model
        img={Pic1}
        title="Seller and Buyer Ratings"
        summary="Give a detailed description of the service being provided here."
      />
      <Model
        img={Pic1}
        title="Storefronts pages"
        summary="Give a detailed description of the service being provided here."
      />
      <Model
        img={Pic1}
        title="Sales Management"
        summary="Give a detailed description of the service being provided here."
      />
    </div>
  );
}
