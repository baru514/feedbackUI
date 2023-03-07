import { NavLink } from "react-router-dom"
import Card from "../components/shared/Card"


function About() {
  return (
    <div className="container">
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This a React app to leave feedback for a product or service.</p>
        <p>Version: 1.0.0</p>
        <p>
          <NavLink to='/'>Back to home page.</NavLink>
        </p>
      </div>
    </Card>
    </div>
  )
}

export default About
