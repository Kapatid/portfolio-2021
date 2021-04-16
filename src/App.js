import "./scss/App.scss";
import React, { useState } from "react";

import Navbar from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("header");

  const changePage = (pageName) => {
    setPage(pageName);
  };

  return (
    <div className="App">
      <Navbar changePage={changePage} />
      {page === "header" ? <Header /> : null}
      {page === "about" ? <About /> : null}
      {page === "projects" ? <Projects /> : null}
      {page === "footer" ? <Footer /> : null}
    </div>
  );
}

export default App;
