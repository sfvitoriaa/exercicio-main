import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cadastros from "./pages/Cadastros";
import Listagem from "./pages/Listagem";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastros" element={<Cadastros />} />
        <Route path="/listagem" element={<Listagem />} /> 
      </Routes>
    </Router>
  );
}

export default App;
