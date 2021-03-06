import {
  DecorationHexBlue,
  // DecorationHexGreen,
  // DecorationHexDubleMix,
  // DecorationHexGreen,
  DecorationHexMoreMix,
} from "../components/Decoration";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section className="contact container flex-center" id="contact">
      <div className="content_page">
        <div className="row contact_title">
          <div className="col-sm-12 col-md-12">
            <h1>Contact</h1>
          </div>
        </div>
        <div className="row contact_row">
          <div class="col-sm-12 col-md-4">
            <a
              className="contact_link"
              href="mailto:fabian.m.zielinski@gmail.com"
              target="_blank"
              rel="noopener"
            >
              <div className="contact_ico">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <p className="contact_name">fabian.m.zielinski@gmail.com</p>
            </a>
          </div>
          <div className="col-sm-12 col-md-4">
            <DecorationHexMoreMix localization={"decoration_hex-center"} />
          </div>
          <div className="col-sm-12 col-md-4">
            <a
              className="contact_link"
              href="https://drive.google.com/file/d/1MAozEWmw8rrqfEmNcevQawiD5bfSreWg/view?usp=sharing"
              target="_blank"
              rel="noopener"
            >
              <div className="contact_ico">
                <FontAwesomeIcon icon={faFilePdf} />
              </div>
              <p className="contact_name">Curriculum vitae</p>
            </a>
          </div>
        </div>

        <div className="row contact_row">
          <div className=" col-sm-12 col-md-4">
            <a
              className="contact_link"
              href="https://bit.ly/linked-fz"
              target="_blank"
              rel="noopener"
            >
              <div className="contact_ico">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <p className="contact_name">https://bit.ly/linked-fz</p>
            </a>
          </div>
          <div className="col-sm-12 col-md-4">
            <DecorationHexBlue localization={"decoration_hex-mid-top"} />
          </div>
          <div className="col-sm-12 col-md-4">
            <a
              className="contact_link"
              href="https://github.com/fabianzielinski"
              target="_blank"
              rel="noopener"
            >
              <div className="contact_ico">
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <p className="contact_name">github.com/fabianzielinski</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
