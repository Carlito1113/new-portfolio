import './App.css';
import Navbar from './components/navigation/Navbar';
import Intro from './components/intro/Intro';
import Works from './components/works/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Works/>
    </div>
  );
}

export default App;
