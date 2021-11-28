import React from "react";
import Slider from "infinite-react-carousel";
import portfolio from "../images/portfolio.png";
import store from "../images/Store.png";

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
        <div className="project">
          <img className="project_img" src={portfolio} alt="Portfolio_Photo" />
          <a
            href="https://github.com/fabianzielinski/Portfolio"
            className="project_link_demo"
            target="_blank"
            rel="noopener"
          >
            <button className="project_button demo">Demo</button>
          </a>
          <a
            href="https://github.com/fabianzielinski/Portfolio"
            target="_blank"
            rel="noopener"
            className="project_link_github"
          >
            <button className="project_button github">GitHub</button>
          </a>
          <div className="project_content">
            <h4>Portfolio</h4>
            <p>Website, Javascript, HTML, CSS, RWD</p>
          </div>
        </div>
        <div className="project">
          <img
            className="project_img"
            src={store}
            alt="Electronic Online Store"
          />
          <a
            href="https://fabz-onlinestore.netlify.com/"
            target="_blank"
            rel="noopener"
            className="project_link_demo"
          >
            <button className="project_button demo">Demo</button>
          </a>
          <a
            href="https://github.com/fabianzielinski/online-electronics-store"
            target="_blank"
            rel="noopener"
            className="project_link_github"
          >
            <button className="project_button github">GitHub</button>
          </a>
          <div className="project_content">
            <h4>Final Project Online Electronics Store</h4>
            <p>Website, React, Javascript, HTML, CSS, Bootstrap, RWD</p>
          </div>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </section>
  );
};

export default Portfolio;
