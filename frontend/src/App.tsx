import Navbar from '@components/menu/Navbar'
import Star from '@components/decorations/Star'
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Star classes="fill-sky-400 rotate-45 absolute -top-10 -left-10 p-0 m-0" />
      <Navbar
        title="Kia"
        links={[
          { href: "#skills", text: "Skills" },
          { href: "#portfolio", text: "Portfolio" },
          { href: "#contact", text: "Contact" },
        ]} />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
