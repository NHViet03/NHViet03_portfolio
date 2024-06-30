import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShowScroll((showScroll) => {
        if (
          !showScroll &&
          (document.body.scrollTop > 150 ||
            document.documentElement.scrollTop > 150)
        )
          return true;

        if (
          showScroll &&
          document.body.scrollTop < 50 &&
          document.documentElement.scrollTop < 50
        )
          return false;

        return showScroll;
      });
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header />
      <Introduction />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />

      <div
        className={`scroll_top box_shadow ${showScroll ? "active" : ""}`}
        onClick={handleScrollTop}
      >
        <i className="fa-solid fa-arrow-up" />
      </div>
    </div>
  );
}

export default App;
