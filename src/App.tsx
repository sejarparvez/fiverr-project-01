import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import Intelligence from "./Components/Intelligence/Intelligence";
import Investor from "./Components/Investor/Investor";
import Management from "./Components/Management/Management";
import Navbar from "./Components/Navbar/Navbar";
import OurClients from "./Components/OurClients/OurClients";
import StoreFront from "./Components/StoreFront/StoreFront";
import Subscribe from "./Components/Subscribe/Subscribe";
import WhyUs from "./Components/WhyUs/WhyUs";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className=" overflow-hidden">
        <Navbar />
        <Hero />
        <Management />
        <Investor />
        <HowItWorks />
        <StoreFront />
        <Intelligence />
        <WhyUs />
        <OurClients />
        <Subscribe />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
