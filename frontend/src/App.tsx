import Navbar from '@components/menu/Navbar'
import Star from '@components/decorations/Star'
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from '@features/Footer';
import AOS from "aos";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Router>
      <Star classes="fill-sky-400 rotate-45 absolute -top-10 -left-10 p-0 m-0" />
      <Navbar
        links={[
          { href: "#skills", text: "Skills" },
          { href: "#portfolio", text: "Portfolio" },
          { href: "#timeline", text: "Experience" },
        ]} />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
