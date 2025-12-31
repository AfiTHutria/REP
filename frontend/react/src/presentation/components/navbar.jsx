import "../components/navbar.css";
import "../components/button.jsx";
import { FiSearch, FiUser, FiHeart, FiPieChart,FiShoppingCart } from "react-icons/fi";
import Button from "../components/button.jsx";


// Navbar
export default function navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* Logo / Marca */}
       
        <Button to="/" className="button">
        <a className="brand">
          CLALUSPORT
        </a>
        </Button>
        <nav className="Navegacion principal">
          <ul className="menu">
            <li>
              <a >Ver todo</a>
            </li>
            <li>
              <a >Nuevos</a>
            </li>
            <li>
              <a >Superiores</a>
            </li>
            <li>
              <a >Inferiores</a>
            </li>
            <li>
              <a >Enterizos</a>
            </li>
            <li>
              <a >Sets</a>
            </li>
            <li>
              <a >Bono regalo</a>
            </li>
          </ul>
        </nav>

        <div className="actions">
          <a  className="icon-btn" aria-label="Buscar">
            <FiSearch />
          </a>
          <a  className="icon-btn" aria-label="Usuario">
            <FiUser />
          </a>
          <a  className="icon-btn" aria-label="Favoritos">
            <FiHeart />
          </a>
          <a  className="icon-btn cart" aria-label="Carrito">
            <Button to="/cart" className="button">
              <FiShoppingCart className="icon-btn"/>
            </Button>
            <span className="badge" aria-label="Productos en carrito">
              1
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
