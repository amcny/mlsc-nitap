
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Vision from './components/Vision';
import Benefits from './components/Benefits';
import Apply from './components/Apply';
import Contact from './components/Contact';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Element name='home'>
        <Home/>
      </Element>
      <Element name='about'>
      <About/>
      </Element>
      <Element name='vision'>
      <Vision/>
      </Element>
      <Element name='benefits'>
      <Benefits/>
      </Element>
      <Element name='apply'>
      <Apply/>
      </Element>
      <Element name='contact'>
      <Contact/>
      </Element>
    </div>
  );
}

export default App;
