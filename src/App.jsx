import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import NewsComp from "./components/NewsComp";

function App() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Router>
      <div className={animate ? "animate-slide-in" : ""}>
        <Navbar />
        <Routes>
          <Route path="/" element={<NewsComp />} />
          <Route path="/:category" element={<NewsComp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;