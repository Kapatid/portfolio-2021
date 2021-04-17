import React from "react";
import { useSpring, animated } from "react-spring";

function About(props) {
  const animation = useSpring({
    to: { marginBottom: "0px" },
    from: { marginBottom: "100%" },
  });

  return (
    <animated.div
      className="about"
      style={{ ...props.customStyle, ...animation }}
    >
      <div className="container-about">
        <div className="about-pic">PIC</div>
        <div className="about-title">TITLE</div>
        <div className="about-desc">DESC</div>
      </div>
    </animated.div>
  );
}

export default About;
