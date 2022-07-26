import "./header.css"




export default function Header() {
  return (
    <>
    <div className="header-container">
            <div className="header-left">
            <div className="title">WASTE NOT!</div>
        </div>
        <div className="header-centre">
            <div className="navbar">
                <ul>
                    <span className="nav">About</span>
                    <span className="nav">Help Out</span>
                    <span className="nav">FAQ</span>
                </ul>
            </div>
        </div>
        </div>
        </>
  )
}