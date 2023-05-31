import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
