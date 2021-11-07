import hex_blue from "../images/hex_blue.svg";

const Me = () => {
  return (
    <section class="me container flex-center" id="me">
      <div class="row">
        <dev class="col-sm-12 col-md-12">
          <h1>O mnie</h1>
          {/* <h3></h3> */}
        </dev>
        <div class="col-sm-12 col-md-6">
          <img class="decoration_hex-top-right" src={hex_blue} alt="hex_blue" />
          <img
            class="decoration_hex-bottom-right"
            src="images/hex_more_mix.svg"
            alt="more_mix"
          />
        </div>
        <div class="col-sm-12 col-md-6">
          <span class="me_title">Początki</span>
          <p class="me_text">
            {" "}
            Moja fascynacja komputerami i programowaniem wykiełkowa w wieku 13
            lat wraz z pojawieniem się u nas w domu pierwszego PC 386. Na
            początku były to głównie gry, ale z czasem już mi to nie wystarczło.
            Zacząłem interesować się jak to wszystko w środku działa i zaczęły
            się pierwsze próby programowania w Basic i Pascalu. Nie były to
            czasy powszechnego internetu i łatwego, tak jak dziś, dostępu do
            wiedzy. W niewielkiej miejscowości w jakiej dorastałem zdobycie
            książek na temat programowania nie było prostą sprawą. W związku z
            czym pierwsze kroki w kodowaniu nie były ani lekkie, ani łatwe i
            często kończyły się niepowodzeniami. Z czasem moje losy potoczyły
            się w innym kierunku, skończyłem studia inżynierskie ale w
            specjalności budownictwo. Jednak komputery oraz zainteresowanie
            programowaniem pozostało ze mną. Były chobby do którego lubiłem
            wracać w wolnych chwilach.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <span class="me_title">Zmiany</span>
          <p class="me_text">
            Przyszedł czas gdy postanowiłem coś w swoim życiu zmienić, zacząć
            robić to co zawsze kochałem i sprawiało mi przyjemność, przy okazji
            pracując. Na szczęście na naukę nigdy nie jest za późno i w drugiej
            połowie 2019 roku ukończyłam intensywny 9-miesięczny kurs
            programowania pod opieką indywidualnego mentora – Bootcamp Web
            Developer Plus w Kodilla. Zdecydowałem się na to chcąc
            usystematyzować i uzupełnić swoją do tąd zdobytą wiedzę. Mam też za
            sobą kilka kursów na platformie Udemy. Pomimo wielu godzin
            spędzonych na nauce, wiem że stoję dopiero na samym początku tej
            ciekawej i kreatywnej drogi jaką jest kariera developera, ale z
            ekscytacją czekam na kolejne kroki jakie na niej postawie.
          </p>
        </div>
        <div class="col-sm-12 col-md-6">
          <span class="me_title"></span>
          <p class="me_text"></p>
        </div>
      </div>
      <div class="row">
        <dev class="col-sm-12 col-md-12">
          <h1>Umiejętności</h1>
        </dev>
      </div>
      <div class="me_technology">
        <div class="row">
          <dev class="col-sm-12 col-md-3">
            <h2>FRONT-END</h2>
          </dev>
          <div class="col-sm-12 col-md-3">
            <div class="me_ico">
              <i class="fab fa-html5"></i>
            </div>
            <p class="me_name">Html</p>
          </div>
          <div class="col-sm-12 col-md-3">
            <div class="me_ico">
              <i class="fab fa-css3-alt"></i>
            </div>
            <p class="me_name">CSS</p>
          </div>
          <div class="col-sm-12 col-md-3">
            <div class="me_ico">
              <i class="fab fa-js-square"></i>
            </div>
            <p class="me_name">JavaScript</p>
          </div>
        </div>
        <div class="row">
          <dev class="col-sm-12 col-md-3">
            <img
              class="decoration_hex-mid-left"
              src="images/hex_more_mix.svg"
              alt="duble_mix"
            />
          </dev>
          <div class="col-sm-12 col-md-3">
            <div class="me_ico">
              <i class="fab fa-sass"></i>
            </div>
            <p class="me_name">Sass</p>
          </div>
          <div class="col-sm-12 col-md-3">
            <div class="me_ico">
              <i class="fab fa-bootstrap"></i>
            </div>
            <p class="me_name">Bootstrap</p>
          </div>
          <div class="col-sm-12 col-md-3">
            <div class="me_ico">
              <i class="fab fa-react"></i>
            </div>
            <p class="me_name">React + Redux</p>
          </div>
        </div>
      </div>
      <div class="me_technology">
        <div class="row">
          <dev class="col-sm-12 col-md-3">
            <h2>BACK-END</h2>
          </dev>
          <div class="col-sm-12 col-md-3">
            <div class="me_ico">
              <i class="fab fa-node"></i>
            </div>
            <p class="me_name">Node.js + Express</p>
          </div>
          <div class="col-sm-12 col-md-3">
            <div class="me_ico">
              <i class="fab fa-envira"></i>
            </div>
            <p class="me_name">MongoDB</p>
          </div>
          <div class="col-sm-12 col-md-3">
            <div class="me_ico">
              <i class="fas fa-layer-group"></i>
            </div>
            <p class="me_name">Stack MERN</p>
          </div>
        </div>
      </div>
      <div class="me_technology">
        <div class="row">
          <dev class="col-sm-12 col-md-3">
            <h2>NARZĘDZIA</h2>
          </dev>
          <div class="col-sm-12 col-md-3">
            <div class="me_ico">
              <i class="fab fa-git-alt"></i>
            </div>
            <p class="me_name">Git</p>
          </div>
          <div class="col-sm-12 col-md-3">
            <div class="me_ico">
              <i class="fab fa-npm"></i>
            </div>
            <p class="me_name">npm</p>
          </div>
          <div class="col-sm-12 col-md-3">
            <div class="me_ico">
              <i class="fab fa-yarn"></i>
            </div>
            <p class="me_name">Yarn</p>
          </div>
        </div>
        <div class="row">
          <dev class="col-sm-12 col-md-3">
            <img
              class="decoration_hex-bottom-right"
              src="images/hex_duble_mix.svg"
              alt="duble_mix"
            />
          </dev>
          <div class="col-sm-12 col-md-3">
            <div class="me_ico">
              <i class="fab fa-jira"></i>
            </div>
            <p class="me_name">Jira</p>
          </div>
          <div class="col-sm-12 col-md-3">
            <div class="me_ico">
              <i class="fab fa-slack"></i>
            </div>
            <p class="me_name">Slack</p>
          </div>
          <div class="col-sm-12 col-md-3">
            <img
              class="decoration_hex-top-right"
              src="images/hex_blue.svg"
              alt="hex_blue"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;
