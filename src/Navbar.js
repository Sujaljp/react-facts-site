import logo from './logo.svg';
import "./Navbar.css"


export default function Navbar() {
    
    return (
        <div>
            <nav>
                <img src={logo} alt="logo" width="90px"/>
                <h3>ReactFacts</h3>
                <h4>React Course - Project 1</h4>
            </nav>
        </div>
    )
}