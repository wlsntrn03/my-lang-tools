import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Dictionary from './pages/Dictionary/Dictionary';
import Thesaurus from './pages/Thesaurus/Thesaurus';
import Translator from './pages/Translator/Translator';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
    <div style={{ paddingTop: "180px" }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dictionary />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/thesaurus" element={<Thesaurus />} />
        <Route path="/translator" element={<Translator />} />
      </Routes>
      <h4 style={{ textAlign: 'center' }}>© 2025 Created by Wilson Tran</h4>
      <div className="icon-link">
      <a
        href="https://wilsontran.vercel.app/"
        className="icon-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-globe fa-2x"></i>
      </a>
      <a
        href="https://github.com/wlsntrn03"
        className="icon-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github fa-2x"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/wilson-tran-3a31a922a/"
        className="icon-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a
        href="mailto:wlsntrn03@gmail.com"
        className="icon-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-envelope fa-2x"></i>
      </a>
      </div>
    </div>
  );
}

export default App;