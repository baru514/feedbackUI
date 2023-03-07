import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header>
      <nav>
        <h1>Feedback UI</h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
      </nav>
    </header>
  )
}

export default Header
