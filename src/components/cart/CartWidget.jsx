import { useCartContext } from "../../context/CartContext";

const LogoCarrito = () => {
    const {cantidadTotal} = useCartContext();
    return (
        <div>
            <span className={cantidadTotal() > 0 ? "cartWidgetSpan" : ""}>
                {    
                    cantidadTotal() > 0 ? cantidadTotal() : ""
                }
            </span>
            <img id="logoCarrito" src="/carrito-de-compras.png"/>
        </div>
    )
}

export default LogoCarrito