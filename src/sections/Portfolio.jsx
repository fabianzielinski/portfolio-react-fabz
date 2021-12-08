import React from "react";
import Slider from "infinite-react-carousel";
import portfolio from "../images/portfolio.png";
import store from "../images/Store.png";
import cezar from "../images/cezar.png";
import fwjasna from "../images/fw-jasna.jpg";
import spacelandingpage from "../images/space-landing-page.png";

const portfoliolist = [
  {
    id: 1,
    src: portfolio,
    alt: "Portfolio_Photo",
    hrefdemo: "https://fabianzielinski.github.io/Portfolio/",
    hrefgit: "https://github.com/fabianzielinski/Portfolio",
    title: "One Page Portfolio",
    techinfo: "Website, Javascript, HTML, CSS, RWD",
    info: "Simple one page Portfolio.",
  },
  {
    id: 2,
    src: store,
    alt: "Electronic Online Store",
    hrefdemo: "https://fabz-onlinestore.netlify.com/",
    hrefgit: "https://github.com/fabianzielinski/online-electronics-store",
    title: "Final Project Online Electronics Store",
    techinfo: "Website, React, Javascript, HTML, CSS, Bootstrap, RWD",
    info: "A website for an online electronics shop in React. ",
  },
  {
    id: 3,
    src: cezar,
    alt: "Cesar's code",
    hrefdemo: "https://fabianzielinski.github.io/Cezar/dist/index.html",
    hrefgit: "https://github.com/fabianzielinski/Cezar",
    title: "Cesar's code",
    techinfo: "Website, Javascript, HTML, CSS, RWD",
    info: "A simple website that uses Caesar code to encrypt and decrypt text messages.",
  },
  {
    id: 4,
    src: fwjasna,
    alt: "One page FW Jasna",
    hrefdemo: "https://fabianzielinski.github.io/one-page-fw-jasna",
    hrefgit: "https://github.com/fabianzielinski/one-page-fw-jasna",
    title: "One Page Farma Wiatrowa Jasna",
    techinfo: "Website, HTML, SCSS, RWD",
    info: "Simple one page about Wind Farm Jasna.",
  },
  {
    id: 5,
    src: spacelandingpage,
    alt: "Space-landing-page",
    hrefdemo: "https://fabianzielinski.github.io/space-landing-page",
    hrefgit: "https://github.com/fabianzielinski/space-landing-page",
    title: "Space-landing-page",
    techinfo: "Website, HTML, SCSS, REACT",
    info: "Simple one page in React .",
  },
];

const settings = {
  adaptiveHeight: true,
  // arrows: false,
  dots: true,
  overScan: 1,
  swipe: false,
};

const Portfolio = () => {
  return (
    <section className="portfolio container flex-center" id="portfolio">
      <h1>My Portfolio ...</h1>
      <Slider className="slider" {...settings}>
        {portfoliolist.map((project) => (
          <div className="project">
            <a href={project.src} target="_blank">
              <img
                className="project_img"
                src={project.src}
                alt={project.alt}
              />
            </a>
            <a
              href={project.hrefdemo}
              className="project_link_demo"
              target="_blank"
              rel="noopener"
            >
              <button className="project_button demo">Demo</button>
            </a>
            <a
              href={project.hrefgit}
              target="_blank"
              rel="noopener"
              className="project_link_github"
            >
              <button className="project_button github">GitHub</button>
            </a>
            <div className="project_content">
              <h3>{project.title}</h3>
              <h4>{project.techinfo}</h4>
              <p>{project.info}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Portfolio;
