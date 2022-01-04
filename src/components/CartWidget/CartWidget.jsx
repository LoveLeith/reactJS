import React, { useContext } from 'react';
import './CartWidget.css';
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const {unidades} = useContext(CartContext);

    return ( unidades() === 0 ? <></> :
    
        <>
            <div className = "cartContainer">
                <IoCartOutline className = "cart" />
                <span>{unidades()}</span>
            </div>
        </> 

    )
}

export default CartWidget

