import { Link } from 'react-router-dom'
import LogoCarrito from '../cart/CartWidget'
import './Nav.css'


const Nav = () => {
    return (
        <nav>
            <Link to={"/"} id="logoTitulo"><div>
                <img src='/icon.png'/>
                <h1>Clean Solutions</h1>
            </div></Link>
            <ul>
                <Link to={"/"} className="text-decoration-none"><li> INICIO</li></Link>
                <Link to={"/categorias/liquidos"} className="text-decoration-none"><li> LIQUIDOS</li></Link>
                <Link to={"/categorias/limpieza"} className="text-decoration-none"><li> LIMPIEZA</li></Link>
                <Link to={"/categorias/textil"} className="text-decoration-none"><li> TEXTIL</li></Link>
            </ul>
            <Link to={"/cart"}><LogoCarrito/></Link>
        </nav>
    )
}

export default Nav


