import Navbar from "../components/navbar.jsx";
import PiedePagina from"../components/footer.jsx";
import "../pages/HomePage.css"

export default function Homepage() {
  return (
    <div className="margen">
    <header> <Navbar/> </header>
    
    <footer> <PiedePagina /> </footer>
    </div>
  );
}