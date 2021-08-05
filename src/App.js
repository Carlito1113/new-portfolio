import './App.css';
import Navbar from './components/navbar/Navbar';
import Navigation from './components/navigation/Navigation';
import Intro from './components/intro/Intro';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navigation />
      <Intro />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
