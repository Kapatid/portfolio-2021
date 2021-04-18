import React from "react";
import { useSpring, animated } from "react-spring";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image1 from "../img/about/nadji (2).jpg";
import Image2 from "../img/about/old me.png";

function About(props) {
  const animation = useSpring({
    from: { bottom: "100vh" },
    to: { bottom: "0vh" },
  });

  return (
    <animated.div
      className="about"
      style={{ ...props.customStyle, ...animation }}
    >
      <div className="container-about">
        <Splide
          className="about-pic"
          options={{
            type: "slide",
            focus: "center",
            perPage: 2,
            trimSpace: false,
            arrows: false,
          }}
        >
          <SplideSlide>
            <img src={Image1} alt="Nadji" />
          </SplideSlide>
          <SplideSlide>
            <img src={Image2} style={{ marginTop: "50px" }} alt="Meme" />
          </SplideSlide>
        </Splide>
        <div className="about-desc">
          <h2>Who am I?</h2>
          <br />
          <p>
            I was born and raised in the Philippines and grew up loving tech
            related media, devices, and at some point I changed my lifestyle to
            have better physical health. As to how I begun in wanting to learn
            more about web/software development is quite simple, I used to play
            a lot of games and as I delved into the deep parts of the web I saw
            those people who had a passion I am not familiar with and it was not
            even popular at that time. <br /> <br /> As time passess by and a
            lot of reading and watching videos on the web about programming I
            came to realize why not make it my profession? My first introduction
            to programming was of course about video games but there was only
            one game that I was a proud of but it was very simple and made in
            Unity. It was in college that I start to develop web apps and not
            regret a single thing about it because I learned a lot especially
            the best practices when coding.
          </p>
          <br />
          <p>
            <b>Likes: </b> Visual Studio Code, gym, cooking, coding, and dogs.
          </p>
        </div>
      </div>
    </animated.div>
  );
}

export default About;
