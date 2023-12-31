import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Header and navegation */}
        <NavBar/>

        {/* Core content */}
        <section className='content'>
          <Routes >
              <Route path="/" element={<Navigate to="/home"/>} /> 
              <Route path="/home" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/contact" element={<Contact/>} />
          </Routes>
        </section>

        {/* Footer */}
        <Footer/>

      </div>
    </BrowserRouter>
  );
}

export default App;