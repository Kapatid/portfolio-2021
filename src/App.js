import "./scss/App.scss";
import React, { useState } from "react";

import Navbar from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("header");
  const [prevPage, setPrevPage] = useState("");

  const front = { zIndex: 9 };
  const back = { zIndex: 2 };
  const disable = { zIndex: 0 };

  const changePage = (pageName) => {
    setPage(pageName);
  };

  return (
    <div className="App">
      <Navbar
        changePage={changePage}
        setPrevPage={setPrevPage}
        prevPage={page}
      />
      {page === "header" && <Header customStyle={front} />}
      {prevPage === "header" ? (
        <Header customStyle={back} />
      ) : (
        <Header customStyle={disable} />
      )}
      {page === "about" && <About customStyle={front} />}
      {prevPage === "about" ? (
        <About customStyle={back} />
      ) : (
        <About customStyle={disable} />
      )}
      {page === "projects" && <Projects customStyle={front} />}
      {prevPage === "projects" ? (
        <Projects customStyle={back} />
      ) : (
        <Projects customStyle={disable} />
      )}
      {page === "footer" && <Footer customStyle={front} />}
      {prevPage === "footer" ? (
        <Footer customStyle={back} />
      ) : (
        <Footer customStyle={disable} />
      )}
    </div>
  );
}

export default App;
