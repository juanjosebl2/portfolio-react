import './App.css';
import { Footer } from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="home">
        <Hero/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;