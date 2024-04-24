import { useState } from "react";
import "./app.css";
import ScrollToTop from "react-scroll-to-top";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import GitStats from "./components/GitStats";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GitStats />
      <Contact />
      <Footer />
      <ScrollToTop
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
        style={{
          width: "3rem",
          height: "3rem",
          backgroundColor: isHovered?"#43ad61":"#689775",
          borderRadius: "50%",
          paddingTop: "10px",
          paddingRight: "10px",
          paddingBottom: "10px",
          paddingLeft: "10px",
          color:"rgb(0,0,6)"
        }}
        smooth
      />
    </>
  );
}

export default App;
