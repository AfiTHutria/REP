import "../components/footer.css";

export default function PiedePagina() {
    return(
        <footer className="footer">

            <ul className="left">
                <il>© 2025 Nombre de la Empresa. Todos los derechos reservados. <br /></il>
                <il>Diseñado con pasión para ofrecer la mejor experiencia. <br /></il>  
                <il>  </il>
            </ul>

            {/* CENTRO PARA REDES  */}
             <section className="center">
                {/* <li> LOGO </li> */}
                <li>  Síguenos en redes sociales: </li>
                    <li>Facebook · Instagram · LinkedIn </li>
            </section>  

            <ul className="right">
                
            </ul>
           
        </footer>
    );
}