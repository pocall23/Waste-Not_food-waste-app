
import About from "../../components/about/about"
import Help from "../../components/Help/help"
import SignUp from "../../components/signUp/signUp"


import './homepage.css'

export default function Homepage() {
  return (
    <>
      <div className="main">
        <About />
        <Help />
        <SignUp/>
        
      </div>
    </>
  )
}

