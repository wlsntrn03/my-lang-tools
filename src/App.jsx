import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <div className="icon-footer">
        <div className="icon-link">
          <a href="https://wilsontran.vercel.app/" target="_blank" rel="noopener noreferrer" className="icon-link">
            <i className="fas fa-globe fa-2x"></i>
          </a>
        </div>
        <div className="icon-link">
          <a href="https://github.com/wlsntrn03" target="_blank" rel="noopener noreferrer" className="icon-link">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
        <div className="icon-link">
          <a href="https://www.linkedin.com/in/wilson-tran-3a31a922a/" target="_blank" rel="noopener noreferrer" className="icon-link">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
        <div className="icon-link">
          <a href="mailto:wlsntrn03@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-link">
            <i className="fas fa-envelope fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
