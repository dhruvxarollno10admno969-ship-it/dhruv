import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hokage from "./components/Hokage";
import Characters from "./components/characters";
import Justu from "./components/Justu";
import Villans from "./components/villans";
import Team from "./components/team";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Characters />
      <Hokage />
      <Justu />
      <Villans />
      <Team />
    </>
  );
}

export default App;