import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./scrollToTop.js";
import Navbar from "./components/Navbar.js";
import MobileNavbar from "./components/Navbar--Mobile.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Menu from "./pages/Menu.js";
import Catering from "./pages/Catering.js";

function App() {
  return (
    <div className="App text-gray-primary">
      <Router>
        <ScrollToTop />
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="block md:hidden">
          <MobileNavbar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/catering" element={<Catering />}></Route>
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
