import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { PortfolioPage } from "./pages/portfolio";
import { PricesPage } from "./pages/prices";
import { AboutPage } from "./pages/about";
import "./styles/main.scss";

function App() {
  return (
    <section className="App">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
}

export default App;
