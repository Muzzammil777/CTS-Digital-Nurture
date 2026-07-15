// Student App - multi-page layout using component composition
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      {/* Page sections */}
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
