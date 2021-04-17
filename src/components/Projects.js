import React from "react";
import { useSpring, animated } from "react-spring";

function Projects(props) {
  const animation = useSpring({
    to: { marginBottom: "0px" },
    from: { marginBottom: "100%" },
  });

  return (
    <animated.div
      className="projects"
      style={{ ...props.customStyle, ...animation }}
    >
      <div className="container-proj">
        <div className="proj-vid">VID</div>
        <div className="proj-title">TITLE</div>
        <div className="proj-desc">DESC</div>
        <div className="proj-tech">TECH</div>
      </div>

      <div className="proj-divider" />

      <div className="container-proj">
        <div className="proj-vid">VID</div>
        <div className="proj-title">TITLE</div>
        <div className="proj-desc">DESC</div>
        <div className="proj-tech">TECH</div>
      </div>
    </animated.div>
  );
}

export default Projects;
