import "./App.css";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Projects from "./components/ProjectList/ProjectList";
import Contact from "./components/Contact/Contact";
import Toggle from "./components/toggle/Toggle";

function App() {
 

  return (
    <div className="App">
      <ThemeProvider>
      <Toggle />
      <Intro />
     
      <About />
      <Projects />
      <Contact />
      </ThemeProvider>
      
    </div>
  );
}

export default App;
