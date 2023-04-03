import { useContext } from "react";
import Pic1 from "../../img/4.png";
import { LanguageContext } from "../../LanguageContext";

export default function Hero() {
  const languageContext = useContext(LanguageContext);
  const language = languageContext?.language;
  return (
    <div className="relative flex flex-col gap-6 md:gap-0 md:flex-row md:items-center lg:my-24 lg:mx-32 px-4 pt-10 md:p-4">
      <div className="absolute h-60 w-60 bg-cyan-100 rounded-full blur-3xl  top-[27rem] lg:top-12 md:top-20 md:right-1 right-8 -z-30 md:h-96 md:w-96"></div>
      <div className="md:flex-1">
        <div className="text-4xl md:text-6xl font-bold py-2">
          {language === "en" ? (
            <h1>Looking to change the way supply chain connects.</h1>
          ) : (
            <h1>Vous cherchez à changer la façon dont la chaîne</h1>
          )}
        </div>
        <div className="text-lg md:text-xl text-blue-200 py-4 text-justify md:tracking-widest">
          Where buyers can easily find reliable and qualified suppliers, while
          factories can reach new customers and increase their market exposure.
        </div>
        <div className="py-6 px-2">
          <button className="btn underline !pb-2">Learn More</button>
        </div>
      </div>
      <div className="md:flex-1">
        <img src={Pic1} alt="" className="w-full md:w-[30rem]" />
      </div>
    </div>
  );
}
