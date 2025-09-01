import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home.jsx"
import Projects from "./Projects.jsx"
import Blog from "./Blog.jsx"
import Navbar from "./Navbar.jsx"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App
