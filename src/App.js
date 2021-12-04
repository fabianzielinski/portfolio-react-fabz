// import { Rotate as Hamburger } from "hamburger-react";
import Navigation from "./components/Navigation";
import Header from "./sections/Header";
import Me from "./sections/Me";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Me />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
