import TestimonialSlider from "../TestimonialSlider";
import "./App.css";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className=" select-none ">
        <div className="bg-[url('./assets/bg-tablet-pattern.svg')]  "

        >

        <Navbar />
        <Intro />
        </div>
      <Main />
      <TestimonialSlider />
      <Footer />
      </div>
    </>
  );
}

export default App;
