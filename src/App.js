import Home from './components/NavBar/Home';
import Navbar from './components/NavBar/Navbar';
import Skills from './components/NavBar/Skills';
import About from './components/NavBar/About'
import Contact from './components/NavBar/Contact';

function App() {
  return (
    <div className="App">
   <Navbar />
   <Home />
   <About />
   <Skills />
   <Contact />
    </div>
  );
}

export default App;
