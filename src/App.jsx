import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hokage from "./components/Hokage";
import Characters from "./components/characters";
import Justu from "./components/Justu";
import Villans from "./components/villans";
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Characters />
      <Hokage />
      <Justu />
      <Villans />
    </>
  );
}