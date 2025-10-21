import "../components/navbar.css";
import { CgShoppingCart } from "react-icons/cg";
import { FiSearch, FiUser, FiHeart, FiPieChart } from "react-icons/fi";

// Navbar
export default function navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* Logo / Marca */}
        <a className="brand" href="#">
          CLALUSPORT
        </a>
        <nav className="Navegacion principal">
          <ul className="menu">
            <li>
              <a href="facebook.com">Ver todo</a>
            </li>
            <li>
              <a href="#">Nuevos</a>
            </li>
            <li>
              <a href="">Superiores</a>
            </li>
            <li>
              <a href="">Inferiores</a>
            </li>
            <li>
              <a href="">Enterizos</a>
            </li>
            <li>
              <a href="">Sets</a>
            </li>
            <li>
              <a href="">Bono regalo</a>
            </li>
          </ul>
        </nav>

        <div className="actions">
          <a href="#" className="icon-btn" aria-label="Buscar">
            <FiSearch />
          </a>
          <a href="#" className="icon-btn" aria-label="Buscar">
            <FiUser />
          </a>
          <a href="#" className="icon-btn" aria-label="Buscar">
            <FiHeart />
          </a>
          <a href="#" className="icon-btn cart" aria-label="Buscar">
            <CgShoppingCart />
            <span className="badge" aria-label="Productos en carrito">
              1
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
