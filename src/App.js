import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
