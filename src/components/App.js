import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./NavBar";
import Home from "./Home";
import About from "./About/About";
import Footer from "./Footer";
import Banner from "./Banner";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Banner />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Website" element={<Navigate replace to="/" />} />
        </Routes>

        <div className="grow" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
