import "./App.css";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Projects from "./components/ProjectList/ProjectList";
import Contact from "./components/Contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";
import Nav from "./components/Nav/Nav";


function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    
      <div
        className="App"
        style={{
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode && "white",
        }}
      >
        <Toggle />
        <Nav />
        <Intro />
         <About /> 
          <Projects />
          <Contact />
       
      </div>
   
  );
}

export default App;
