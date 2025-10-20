import '../components/navbar.css';
import { CgShoppingCart } from "react-icons/cg";

// Navbar
export default function navbar(){
    return (
        <nav className='navbar'>
            <ul className='ul_button_bar'>
                <div className='nav-links'>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Tienda</a></li>
                    <li><a href="">Contactanos</a></li>
                </div>
                <div >
                    <li className='Carro'><a href="#"><CgShoppingCart /></a></li>
                </div>
            </ul>
            
        </nav>
    );
}
