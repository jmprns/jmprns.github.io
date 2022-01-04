import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <main id="skip" className="flex flex-col px-8 bg-gray-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
           </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
