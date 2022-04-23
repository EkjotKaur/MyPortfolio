import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'ui-neumorphism/dist/index.css'
import Skills from './Components/Skills/Skill';
import About from './Components/AboutUs/About';
import Navbar from './Components/Navbar/Navbar';
import NavbarMobile from './Components/NavbarMobile/NavbarMobile';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import ContactUs from './Components/ContactUs/ContactUs';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';


const X = () => {
  return (<div className="App">
    <Navbar />
    <NavbarMobile />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <ContactUs />
    <Footer />
  </div>);
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<X/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
