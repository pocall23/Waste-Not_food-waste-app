
import About from "../../components/about/about"
import Help from "../../components/help/help"
import SignUp from "../../components/signUp/signUp"


import './Homepage.css'

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

