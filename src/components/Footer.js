import React from "react";
import { useSpring, animated } from "react-spring";

function Footer(props) {
  const animation = useSpring({
    to: { marginBottom: "0px" },
    from: { marginBottom: "100%" },
  });

  return (
    <animated.div
      className="footer"
      style={{ ...props.customStyle, ...animation }}
    >
      FOOTER
    </animated.div>
  );
}

export default Footer;
