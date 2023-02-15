import { useCartContext } from "../../context/CartContext";

const LogoCarrito = () => {
    const {cartList} = useCartContext();

    const {cantidadTotal} = useCartContext();

    return (
        <div>
            <span>{cantidadTotal() > 0 ? cantidadTotal() : "" }</span>
            <img id="logoCarrito" src="/carrito-de-compras.png"/>
        </div>
    )
}

export default LogoCarrito