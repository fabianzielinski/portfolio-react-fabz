// import { Rotate as Hamburger } from "hamburger-react";
import Navigation from "./components/Navigation";
import Header from "./sections/Header";
import Me from "./sections/Me";
import Portfolio from "./sections/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Me />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
