import Header from "../../components/header/header"
import About from "../../components/about/about"
import Help from "../../components/help/help"
import SignUp from "../../components/signUp/signUp"


import './homepage.css'

export default function Homepage() {
  return (
    <>

      <Header />
      <div className="main">
        <About />
        <Help />
        <SignUp/>
      </div>
            

    </>
  )
}

