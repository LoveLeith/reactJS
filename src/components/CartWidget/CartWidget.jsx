import Carrito from './Assets/Images/carticon.png';
import './CartWidget.css'

const CartWidget = () => {
    return (
        <img src = {Carrito} className = "cartStyle" alt = "imagen carrito"/>
    )
}

export default CartWidget