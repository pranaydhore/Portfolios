import React from 'react';
import { Route,Routes} from 'react-router-dom';
// import './App.css'

import NavBar from './components/Navbar';
import About from './components/Script/About';
import Projects from './components/Script/Projects';
import Internship from "./components/Script/Internship";
import Education from "./components/Script/Education";
import Skills from "./components/Script/Skills";
import Certificates from "./components/Script/Certificates";
import Contact from "./components/Script/Contact";
import Footer from "./components/Footer";
import Home from "./components/Script/Home";

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path="/internship" element={<Internship />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
    </>
  )
}

export default App
