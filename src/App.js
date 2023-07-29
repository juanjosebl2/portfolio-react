import './App.css';
import { Footer } from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
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
          </Routes>
        </section>

        {/* Footer */}
        <Footer/>

      </div>
    </BrowserRouter>
  );
}

export default App;