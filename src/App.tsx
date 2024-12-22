import Navbar from '@components/Navbar'
import Star from '@components/Star'
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
   <Router>
    <Star classes="fill-sky-400 rotate-45 absolute top-0 left-0 p-0 m-0" />
     <Navbar
       title="Kia"
       links={[
         { href: "#about", text: "About" },
         { href: "#portfolio", text: "Portfolio" },
         { href: "#contact", text: "Contact" },
       ]} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
   </Router>
  )
}

export default App
