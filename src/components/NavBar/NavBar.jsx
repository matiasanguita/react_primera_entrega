import "./NavBar.css";
import Carrito from "../Carrito/Carrito";
import logo from "../../assets/logo.svg";

function NavBar() {
    return (
        <nav className="navbar">

            <ul className="navbar-links">
                <li className="navbar-items">
                    <a href="#">Inicio</a>
                </li>
                <li className="navbar-items">
                    <a href="#">Nuestras Donas</a>
                </li>
                <li className="navbar-items">
                    <a href="#">Ofertas</a>
                </li>
            </ul>
            <div>
                <img src={logo} alt="Logo Donas Angol" className="logo" />
            </div>
            <Carrito />
        </nav>
    )
}

export default NavBar
