import { useCartContext } from "../../context/CartContext";

const LogoCarrito = () => {
    const {cartList} = useCartContext();;

    return (
        <div>
            <span>{cartList.length > 0 ? cartList.length : "" }</span>
            <img id="logoCarrito" src="/carrito-de-compras.png"/>
        </div>
    )
}

export default LogoCarrito