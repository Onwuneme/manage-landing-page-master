import TestimonialSlider from "../TestimonialSlider";
import "./App.css";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className=" select-none">
        <Navbar />
        <Intro />
      <Main />
      <TestimonialSlider />
      <Footer />
      </div>
    </>
  );
}

export default App;
