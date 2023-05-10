import './App.css';
import Banner from './components/Banner';
import { Contact } from './components/Contact';
import { ContactMe } from './components/ContactMe';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { Newsletter } from './components/Newsletter';
import { Projects } from './components/Projects';
import {Skills} from './components/Skills';

function App() {
  return (
    <>
    <NavBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Newsletter/>
    <ContactMe/>
    <Footer/>
    </>
  );
}

export default App;
