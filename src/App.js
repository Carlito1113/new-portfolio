import './App.scss';
import Navbar from './components/navbar/Navbar';
import Navigation from './components/navigation/Navigation';
import Intro from './components/intro/Intro';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import { useState } from 'react';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <Navigation navOpen={navOpen} setNavOpen={setNavOpen} />
      <div className="sections">
        <Intro />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
