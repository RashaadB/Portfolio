import "./App.css";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Projects from "./components/ProjectList/ProjectList";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
