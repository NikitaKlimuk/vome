import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { Navbar } from "./components/navbar";
import "./styles/main.scss";

function App() {
  return (
    <section className="App">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </section>
  );
}

export default App;
