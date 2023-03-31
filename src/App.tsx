import Hero from "./Components/Hero/Hero";
import Investor from "./Components/Investor/Investor";
import Management from "./Components/Management/Management";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Management />
      <Investor />
    </div>
  );
}

export default App;
