import iconSmallPng from "./images/icon-small.png"
import ReactFacts from "./images/ReactFacts.png"
import ExtraTitle from "./images/extra title.png"
export default function Navbar() {

    return (
        <nav className="navbar">
        <img src={iconSmallPng} alt= "icon" className="navbar-image" />
        <img src={ReactFacts} alt= "text" className="navbar-text" />
        <img src={ExtraTitle} alt= "text2" className="navbar-text2" />

        <ul>
        
        {/* <li>ReactFacts</li> */}
        {/* <li>ReactCourse-project</li> */}
        
        </ul>
        
        </nav>
    );
}   
