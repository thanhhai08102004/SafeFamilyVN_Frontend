import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutUs from "./pages/About/AboutUs";
import LegalInfoSection from "./pages/InfoLaw/LegalInfoSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="about" element={<AboutUs />}></Route>
          <Route path="infomation" element={<LegalInfoSection />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
