import React, { useState, useEffect } from "react";

function Nav(props) {
  const [count, setCount] = useState(0);
  const pages = ["header", "about", "projects", "footer"];

  useEffect(() => {
    props.changePage(pages[count]);
  });

  return (
    <div className={`nav ${count === 0 ? "" : "dark"}`}>
      <div
        className="btn-prev"
        onClick={() => {
          count <= pages.length - 1 && count > 0 && setCount(count - 1);
        }}
      >
        <div className="arrow-up"></div>
        PREV
      </div>

      <div className={`circle ${count === 0 ? "active" : ""}`}></div>
      <div className={`circle ${count === 1 ? "active" : ""}`}></div>
      <div className={`circle ${count === 2 ? "active" : ""}`}></div>
      <div className={`circle ${count === 3 ? "active" : ""}`}></div>

      <div
        className="btn-next"
        onClick={() => {
          count >= 0 && count < pages.length - 1 && setCount(count + 1);
        }}
      >
        NEXT
        <div className="arrow-down"></div>
      </div>
    </div>
  );
}

export default Nav;
