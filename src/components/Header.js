import React from "react";
import { useTrail, useSpring, animated, config } from "react-spring";

function Header(props) {
  const animation = useSpring({
    to: { marginBottom: "0px" },
    from: { marginBottom: "100%" },
  });

  const helloTxt = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 800,
  });

  const nameIsTxt = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1800,
  });

  const nameTxt = useSpring({
    to: { marginLeft: "0px", opacity: 1, color: "#F0E100" },
    from: { marginLeft: "30px", opacity: 0 },
    delay: 2900,
  });

  const nameTxtColor = useSpring({
    to: { color: "#F0E100" },
    from: { color: "#ffffff" },
    delay: 3500,
  });

  const items = ["I", "am", "an", "aspiring"];
  const trail = useTrail(items.length, {
    marginLeft: "0px",
    opacity: 1,
    from: { marginLeft: "50px", opacity: 0 },
    delay: 4200,
    config: { mass: 5, tension: 2000, friction: 200 },
  });

  const animTrapezoid = useSpring({
    config: { ...config.wobbly, duration: 300 },
    to: [
      { transform: "perspective(200px) rotateX(7deg)" },
      { transform: "perspective(200px) rotateX(-7deg)" },
      { transform: "perspective(200px) rotateX(0deg)" },
    ],
    from: { transform: "perspective(200px) rotateX(-90deg)" },
    delay: 5200,
  });

  return (
    <animated.div
      className="header"
      style={{ ...props.customStyle, ...animation, overflow: "visible" }}
    >
      <div className="p1" style={{}}>
        <animated.span style={helloTxt}>Hello! </animated.span>
        <animated.span style={nameIsTxt}>My name is</animated.span> <br />
        <animated.span className="s1" style={{ ...nameTxt, ...nameTxtColor }}>
          Nadji Tan
        </animated.span>{" "}
        <br />
        <span>
          {trail.map((otherProps, i) => (
            <animated.span key={i} style={otherProps}>
              {items[i]}{" "}
            </animated.span>
          ))}
        </span>
        <br />
        <animated.div
          className="s2"
          style={{ ...animTrapezoid, transformOrigin: "top center" }}
        >
          <code>
            <mark>Web Developer</mark>
          </code>
        </animated.div>
      </div>
    </animated.div>
  );
}

export default Header;
