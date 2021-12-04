import {
  DecorationHexBlue,
  DecorationHexGreen,
  // DecorationHexDubleMix,
  // DecorationHexGreen,
  DecorationHexMoreMix,
} from "../components/Decoration";

const Contact = () => {
  return (
    <section class="contact container flex-center" id="contact">
      <div class="content_page">
        {/* <img class="contact_hex-center hex" src="images/hex_more_mix.svg" alt="more_mix"/>
                <img class="contact_hex-mid-top hex" src="images/hex_blue.svg" alt="hex_blue"/>
                <img class="contact_hex-mid-bottom hex" src="images/hex_green.svg" alt="hex_green"/> */}
        <DecorationHexMoreMix localization={"decoration_hex-center"} />
        <div class="row contact_title">
          <div class="col-sm-12 col-md-12">
            <h1>Contact</h1>
          </div>
        </div>
        <div class="row contact_row">
          <div class="col-sm-12 col-md-6">
            <a
              class="contact_link"
              href="mailto:fabian.zielinski@o2.pl"
              target="_blank"
              rel="noopener"
            >
              <div class="contact_ico">
                <i class="fas fa-envelope"></i>
              </div>
              <p class="contact_name">fabian.zielinski@o2.pl</p>
            </a>
          </div>
          <div class="col-sm-12 col-md-6">
            <a
              class="contact_link"
              href="https://drive.google.com/open?id=1fXnbec0vMPd6Cumd065jtCwL6fG3I0ZR"
              target="_blank"
              rel="noopener"
            >
              <div class="contact_ico">
                <i class="fas fa-file-pdf"></i>
              </div>
              <p class="contact_name">Curriculum vitae</p>
            </a>
          </div>
        </div>

        <div class="row contact_row">
          <div class=" col-sm-12 col-md-6">
            <a
              class="contact_link"
              href="https://bit.ly/linked-fz"
              target="_blank"
              rel="noopener"
            >
              <div class="contact_ico">
                <i class="fab fa-linkedin"></i>
              </div>
              <p class="contact_name">https://bit.ly/linked-fz</p>
            </a>
          </div>
          <div class="col-sm-12 col-md-6">
            <a
              class="contact_link"
              href="https://github.com/fabianzielinski"
              target="_blank"
              rel="noopener"
            >
              <div class="contact_ico">
                <i class="fab fa-github"></i>
              </div>
              <p class="contact_name">github.com/fabianzielinski</p>
            </a>
          </div>
        </div>
        <DecorationHexBlue localization={"decoration_hex-mid-top"} />
        <DecorationHexGreen localization={"decoration_hex-mid-bottom"} />
      </div>
    </section>
  );
};

export default Contact;
