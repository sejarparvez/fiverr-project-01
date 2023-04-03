import Pic4 from "../../img/4.png";

import Model from "./Model";

export default function OurClients() {
  return (
    <div className="bg-gray lg:px-40 px-4 py-10">
      <h1 className="font-bold text-4xl md:text-6xl text-center">Hear From Our Clients</h1>
      <div className="flex flex-col md:flex-row md:justify-end mt-20 gap-8">
        <Model
          img={Pic4}
          title="Dempsey and Delta"
          summary="Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services"
        />
        <Model
          img={Pic4}
          title="Dempsey and Delta"
          summary="Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services"
        />
        <Model
          img={Pic4}
          title="Dempsey and Delta"
          summary="Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services"
        />
      </div>
    </div>
  );
}
