import { Link } from "react-router-dom"
import "./navbar.css"
function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-glass">
        <div className="nav-container">
          <div className="nav-logo">
            <span>JK</span>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">Projects</Link>
            </li>
          </ul>
          <input 
            type="checkbox" 
            id="hamburger-1" 
            className="hamburger-checkbox" 
          />
          <label htmlFor="hamburger-1" className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </label>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
