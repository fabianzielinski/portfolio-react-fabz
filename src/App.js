// import { Rotate as Hamburger } from "hamburger-react";
import Navigation from "./components/Navigation";
import Header from "./sections/Header";
import Me from "./sections/Me";
import Portfolio from "./sections/Portfolio";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Me />
      <Portfolio />
    </div>
  );
}

export default App;
