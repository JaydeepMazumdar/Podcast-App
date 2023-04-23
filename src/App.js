import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Admin from "./Pages/admin";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />     
          </Routes>
          <Routes>
            <Route path="/admin" element={<Admin />} />     
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
