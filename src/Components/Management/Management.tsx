import Pic1 from "../../img/4.png";
import Model from "./Model";

export default function Management() {
  return (
    <div className="flex items-center justify-center mt-44 mb-20 gap-12">
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
