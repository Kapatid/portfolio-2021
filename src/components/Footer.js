import React from "react";
import { useSpring, animated } from "react-spring";
import Break from "react-break";

function Footer(props) {
  const UIBreakpoints = {
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 992,
  };

  const animation = useSpring({
    from: { bottom: "100vh" },
    to: { bottom: "0vh" },
  });

  const headerAnim = useSpring({
    from: { fontSize: "2rem", bottom: "48%" },
    to: { fontSize: "1rem", bottom: "55%" },
    delay: 2000,
  });

  const detailsAnim1 = useSpring({
    from: { opacity: 0, bottom: "55%" },
    to: { opacity: 1, bottom: "45%" },
    delay: 3000,
  });

  const detailsAnim2 = useSpring({
    from: { opacity: 0, bottom: "55%" },
    to: { opacity: 1, bottom: "40%" },
    delay: 3000,
  });

  const DetailsText = () => {
    return (
      <>
        Contact me: <br />
        nadji.tan@ciit.edu.ph |{" "}
        <a
          href="https://github.com/Kapatid"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/nadji-roi-tan-8471b2194"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </>
    );
  };

  return (
    <animated.div
      className="footer"
      style={{ ...props.customStyle, ...animation }}
    >
      <div className="container-footer">
        <animated.h2 style={headerAnim}>
          Do you like what you see?
        </animated.h2>

        <Break
          breakpoints={UIBreakpoints}
          query={{ method: "is", breakpoint: "mobile" }}
        >
          <animated.p className="footer-links" style={detailsAnim2}>
            <DetailsText />
          </animated.p>
        </Break>
        <Break
          breakpoints={UIBreakpoints}
          query={{ method: "is", breakpoint: "desktop" }}
        >
          <animated.p className="footer-links" style={detailsAnim1}>
            <DetailsText />
          </animated.p>
        </Break>

        <p className="footer-credit">
          <code>Made by Nadji Tan</code>
        </p>
      </div>
    </animated.div>
  );
}

export default Footer;
