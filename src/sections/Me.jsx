// import hex_blue from "../images/hex_blue.svg";
import {
  DecorationHexBlue,
  // DecorationHexGreen,
  DecorationHexDubleMix,
  DecorationHexMoreMix,
} from "../components/Decoration";

const Me = () => {
  return (
    <section className="me container flex-center" id="me">
      <div className="row">
        <dev className="col-sm-12 col-md-12">
          <h1>ABOUT ME :)</h1>
        </dev>
        <div className="col-sm-12 col-md-6">
          <DecorationHexBlue localization={"decoration_hex-top-right"} />
          <DecorationHexMoreMix localization={"decoration_hex-bottom-right"} />
        </div>
        <div className="col-sm-12 col-md-6">
          <span className="me_title">Origins</span>
          <p className="me_text">
            {" "}
            My fascination with computers and programming germinated at the age
            of 13 with the At the beginning it was mainly games, but with time
            it was not enough for me. At the beginning it was mainly games, but
            with time it wasn't enough for me. I started to be interested in how
            it all works inside and started first attempts of programming in
            Basic and Pascal started. Those were not the times of common
            internet and easy access to knowledge, as it is today. knowledge as
            it is today. In the small town I grew up in, getting books books on
            programming was not an easy matter. As a result the first steps in
            coding were neither easy nor simple and often ended in failure.
            often ended in failure. With time, my life went In time my fate went
            in a different direction, I finished my studies in engineering
            specialization in construction. However, computers and the interest
            in programming remained with me. They were a hobby to which I liked
            come back to in my free time.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <span className="me_title">Changes</span>
          <p className="me_text">
            There came a time when I decided to change something in my life, to
            start to do what I had always loved and enjoyed, while working.
            Fortunately, it's never too late to learn and in the second half of
            2019 I completed an intensive 9-month course Programming under the
            supervision of an individual mentor - Bootcamp Web Developer Plus at
            Kodilla. I decided to do this wanting to systematize and complement
            my knowledge gained so far. I have also done I also took a few
            courses on the Udemy platform. Despite the many hours spent on
            learning, I know that I stand only at the very beginning of this
            interesting and creative path which is a career of a developer, but
            with excitement I look forward to the next steps that I will put on
            it. At the moment I create for myself and pleasure. I invite you to
            my Portfolio.
          </p>
        </div>
        <div className="col-sm-12 col-md-6">
          <DecorationHexMoreMix localization={"decoration_hex-mid-right"} />
        </div>
        <div className="col-sm-12 col-md-6">
          <span className="me_title"></span>
          <p className="me_text"></p>
        </div>
      </div>
      <div className="row">
        <dev className="col-sm-12 col-md-12">
          <h1>SKILLS</h1>
        </dev>
      </div>
      <div className="me_technology">
        <div className="row">
          <dev className="col-sm-12 col-md-3">
            <h2>FRONT-END</h2>
          </dev>
          <div className="col-sm-12 col-md-3">
            <div className="me_ico">
              <i className="fab fa-html5"></i>
            </div>
            <p className="me_name">Html</p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="me_ico">
              <i className="fab fa-css3-alt"></i>
            </div>
            <p className="me_name">CSS</p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="me_ico">
              <i className="fab fa-js-square"></i>
            </div>
            <p className="me_name">JavaScript</p>
          </div>
        </div>
        <div className="row">
          <dev className="col-sm-12 col-md-3">
            <DecorationHexMoreMix localization={"decoration_hex-mid-left"} />
          </dev>
          <div className="col-sm-12 col-md-3">
            <div className="me_ico">
              <i className="fab fa-sass"></i>
            </div>
            <p className="me_name">Sass</p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="me_ico">
              <i className="fab fa-bootstrap"></i>
            </div>
            <p className="me_name">Bootstrap</p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="me_ico">
              <i className="fab fa-react"></i>
            </div>
            <p className="me_name">React + Redux</p>
          </div>
        </div>
      </div>
      <div className="me_technology">
        <div className="row">
          <dev className="col-sm-12 col-md-3">
            <h2>BACK-END</h2>
          </dev>
          <div className="col-sm-12 col-md-3">
            <div className="me_ico">
              <i className="fab fa-node"></i>
            </div>
            <p className="me_name">Node.js + Express</p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="me_ico">
              <i className="fab fa-envira"></i>
            </div>
            <p className="me_name">MongoDB</p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="me_ico">
              <i className="fas fa-layer-group"></i>
            </div>
            <p className="me_name">Stack MERN</p>
          </div>
        </div>
      </div>
      <div className="me_technology">
        <div className="row">
          <dev className="col-sm-12 col-md-3">
            <h2>TOOLS</h2>
          </dev>
          <div className="col-sm-12 col-md-3">
            <div className="me_ico">
              <i className="fab fa-git-alt"></i>
            </div>
            <p className="me_name">Git</p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="me_ico">
              <i className="fab fa-npm"></i>
            </div>
            <p className="me_name">npm</p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="me_ico">
              <i className="fab fa-yarn"></i>
            </div>
            <p className="me_name">Yarn</p>
          </div>
        </div>
        <div className="row">
          <dev className="col-sm-12 col-md-3">
            <DecorationHexDubleMix
              localization={"decoration_hex-bottom-right"}
            />
          </dev>
          <div className="col-sm-12 col-md-3">
            <div className="me_ico">
              <i className="fab fa-jira"></i>
            </div>
            <p className="me_name">Jira</p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="me_ico">
              <i className="fab fa-slack"></i>
            </div>
            <p className="me_name">Slack</p>
          </div>
          <div className="col-sm-12 col-md-3">
            <DecorationHexBlue localization={"decoration_hex-top-right"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;
