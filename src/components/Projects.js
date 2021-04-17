import React from "react";
import { useSpring, animated } from "react-spring";

import Video1 from "../video/projects/Interactive-Infographic-2021.webm";
import Video2 from "../video/projects/Agila 2020.mp4";
import Video3 from "../video/projects/Php 2020.mp4";
import Video4 from "../video/projects/Web Design 2020.mp4";
import Video5 from "../video/projects/Masetera 2020.mp4";
import Video6 from "../video/projects/Portfolio 2021.mp4";

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
      <h1>PROJECTS</h1>
      <div className="container-proj">
        <div className="proj-vid">
          <video controls loop muted>
            <source src={Video1} type="video/webm" />
          </video>
        </div>
        <div className="proj-desc">
          <p>
            <b>Title: </b> Interactive Infographic
          </p>{" "}
          <br />
          <p>
            <b>Description: </b>A project about countries in the ASEAN union. It
            aims to show information about a country with visuals that will
            engage users to learn more about them.
          </p>
        </div>
        <div className="proj-tech">
          <b>Tech: </b>
          <div className="tech html-css">HTML / CSS</div>
          <div className="tech javascript">JavaScript</div>
          <div className="tech sass">Sass</div>
        </div>
        <div className="proj-github">
          <b>GitHub: </b>
          <a
            href="https://github.com/Kapatid/interactive-infographic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <mark>
              <code>https://github.com/Kapatid/interactive-infographic</code>
            </mark>
          </a>
        </div>
      </div>

      <div className="container-proj">
        <div className="proj-vid">
          <video controls loop muted>
            <source src={Video2} type="video/mp4" />
          </video>
        </div>
        <div className="proj-desc">
          <p>
            <b>Title: </b> Agila (Flight Booking)
          </p>{" "}
          <br />
          <p>
            <b>Description: </b>A simple web app made to simulate booking
            flights and it is built using the Laravel framework. Its features
            are login/signup, profile page, booking page, and password reset.
          </p>
        </div>
        <div className="proj-tech">
          <b>Tech: </b>
          <div className="tech blade">Blade</div>
          <div className="tech javascript">JavaScript</div>
          <div className="tech laravel">Laravel</div>
          <div className="tech sass">Sass</div>
          <div className="tech php">PHP</div>
          <div className="tech mysql">MySQL</div>
        </div>
        <div className="proj-github">
          <b>GitHub: </b>
          <a
            href="https://github.com/Kapatid/web-prog-finals"
            target="_blank"
            rel="noopener noreferrer"
          >
            <mark>
              <code>https://github.com/Kapatid/web-prog-finals</code>
            </mark>
          </a>
        </div>
      </div>

      <div className="container-proj">
        <div className="proj-vid">
          <video controls loop>
            <source src={Video3} type="video/mp4" />
          </video>
        </div>
        <div className="proj-desc">
          <p>
            <b>Title: </b> PHP MVC
          </p>{" "}
          <br />
          <p>
            <b>Description: </b>Made using PHP as a main tool to handle page
            rendering and back-end programming. I followed the structure of MVC
            (model-view-controller) to organize the codes and make it easy to
            scale. It is a simple store web app with accounts, items, receipts,
            which are stored in a database using MySQL. In the video I go
            in-depth in what the codes do and overall the structure of the
            project.
          </p>
        </div>
        <div className="proj-tech">
          <b>Tech: </b>
          <div className="tech html-css">HTML / CSS</div>
          <div className="tech javascript">JavaScript</div>
          <div className="tech sass">Sass</div>
          <div className="tech php">PHP</div>
          <div className="tech mysql">MySQL</div>
        </div>
        <div className="proj-github">
          <b>GitHub: </b>
          <a
            href="https://github.com/Kapatid/php-proj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <mark>
              <code>https://github.com/Kapatid/php-proj</code>
            </mark>
          </a>
        </div>
      </div>

      <div className="container-proj">
        <div className="proj-vid">
          <video controls loop muted>
            <source src={Video4} type="video/mp4" />
          </video>
        </div>
        <div className="proj-desc">
          <p>
            <b>Title: </b> Game Website
          </p>{" "}
          <br />
          <p>
            <b>Description: </b>One of my first project when I was still
            learning web development but I had fun styling it and using
            JavaScript. The accounts where stored in the local storage of the
            web browser and all of the games where made by me and the
            text-adventure game was written by my partner during the developemnt
            of it in school and it was a terminal/console game at first but I
            thought of transferring it to html and learned a lot.
          </p>
        </div>
        <div className="proj-tech">
          <b>Tech: </b>
          <div className="tech html-css">HTML / CSS</div>
          <div className="tech javascript">JavaScript</div>
        </div>
        <div className="proj-github">
          <b>GitHub: </b>
          <i>n/a</i>
        </div>
      </div>

      <div className="container-proj">
        <div className="proj-vid">
          <video controls loop muted>
            <source src={Video5} type="video/mp4" />
          </video>
        </div>
        <div className="proj-desc">
          <p>
            <b>Title: </b> Masetera
          </p>{" "}
          <br />
          <p>
            <b>Description: </b> A sample store website that sells plants and
            users can create there own accounts. To store information I only
            used the local storage available in every browser. In here I learned
            a lot about JavaScript and how powerful it is when developing the
            front-end side of a web app.
          </p>
        </div>
        <div className="proj-tech">
          <b>Tech: </b>
          <div className="tech html-css">HTML / CSS</div>
          <div className="tech javascript">JavaScript</div>
        </div>
        <div className="proj-github">
          <b>GitHub: </b>
          <a
            href="https://github.com/Kapatid/JS-Web-Design-FINALS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <mark>
              <code>https://github.com/Kapatid/JS-Web-Design-FINALS</code>
            </mark>
          </a>
        </div>
      </div>

      <div className="container-proj">
        <div className="proj-vid">
          <video controls loop muted>
            <source src={Video6} type="video/mp4" />
          </video>
        </div>
        <div className="proj-desc">
          <p>
            <b>Title: </b> Portfolio 2021
          </p>{" "}
          <br />
          <p>
            <b>Description: </b> This is my first portfolio made in React JS. I
            made it so people will somewhat know more about me and what I have
            been doing these past years.
          </p>
        </div>
        <div className="proj-tech">
          <b>Tech: </b>
          <div className="tech html-css">HTML / CSS</div>
          <div className="tech javascript">JavaScript</div>
          <div className="tech react">React</div>
        </div>
        <div className="proj-github">
          <b>GitHub: </b>
          <a
            href="https://github.com/Kapatid/portfolio-2021"
            target="_blank"
            rel="noopener noreferrer"
          >
            <mark>
              <code>https://github.com/Kapatid/portfolio-2021</code>
            </mark>
          </a>
        </div>
      </div>
    </animated.div>
  );
}

export default Projects;
