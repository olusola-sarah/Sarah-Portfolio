 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
// import About from './Pages/About/About';
// import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>

  );
}

export default App;
