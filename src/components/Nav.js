import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

function Nav(props) {
  const [count, setCount] = useState(0);
  const pages = ["header", "about", "projects", "footer"];
  const animation = useSpring({
    from: { right: props.animValues[0], opacity: 0 },
    to: { right: props.animValues[1], opacity: 1 },
    delay: 1000,
  });

  useEffect(() => {
    props.changePage(pages[count]);

    const handleArrows = (event) => {
      // When up arrow key pressed
      if (event.keyCode === 38) {
        count <= pages.length - 1 && count > 0 && setCount(count - 1);
        props.setPrevPage(props.prevPage);
      }
      // When down arrow key pressed
      if (event.keyCode === 40) {
        count >= 0 && count < pages.length - 1 && setCount(count + 1);
        props.setPrevPage(props.prevPage);
      }
    };
    window.addEventListener("keydown", handleArrows);

    return () => {
      window.removeEventListener("keydown", handleArrows);
    };
  });

  return (
    <animated.div
      className={`nav ${count === 0 ? "" : "dark"}`}
      style={animation}
    >
      <div
        className="btn-prev"
        onClick={() => {
          count <= pages.length - 1 && count > 0 && setCount(count - 1);
          props.setPrevPage(props.prevPage);
        }}
      >
        <div className="arrow-up"></div>
        <span>PREV</span>
      </div>

      <div className={`circle ${count === 0 ? "active" : ""}`}></div>
      <div className={`circle ${count === 1 ? "active" : ""}`}></div>
      <div className={`circle ${count === 2 ? "active" : ""}`}></div>
      <div className={`circle ${count === 3 ? "active" : ""}`}></div>

      <div
        className="btn-next"
        onClick={() => {
          count >= 0 && count < pages.length - 1 && setCount(count + 1);
          props.setPrevPage(props.prevPage);
        }}
      >
        <span>NEXT</span>
        <div className="arrow-down"></div>
      </div>
    </animated.div>
  );
}

export default Nav;
