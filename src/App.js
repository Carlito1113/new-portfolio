import './App.css';
import Navbar from './components/navigation/Navbar';
import Intro from './components/intro/Intro';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
