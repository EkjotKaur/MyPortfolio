import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'ui-neumorphism/dist/index.css'
import Skills from './Components/Skills/Skill';
import About from './Components/AboutUs/About';
import Navbar from './Components/Navbar/Navbar';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import ContactUs from './Components/ContactUs/ContactUs';



const App = () => {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default App;
