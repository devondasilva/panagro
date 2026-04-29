import './index.css'
import App from './App.tsx';
import Exploitation from './pages/Exploitation.tsx';
import About from './pages/About.tsx';
import Invest from './pages/Invest.tsx';
import Login from './pages/Users/Login.tsx';
import Careers from './pages/Careers.tsx';
import Hebergement from './pages/Hebergement.tsx';
import Contact from './pages/Contact.tsx';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/exploitation" element={<Exploitation />} />
        <Route path="/about" element={<About />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hebergement" element={<Hebergement />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
} else {
  console.error("Root element not found");
}