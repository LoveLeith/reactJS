import React, { useContext, useState } from 'react';

export const CartContext = React.createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    
    const isInCart = (item) => {
        return cart?.findIndex(element => element.id === item.id)
    }
    const addToCart = (item, cantidad) => {
        total();
        if(isInCart(item) === -1) { 
            setCart([...cart, {...item, cantidad}]);
        }
        else {
            sumarCantidad(item, cantidad);
        }
        console.log(cart);
    };

    const total = () => {
        const sumaTotal = cart.reduce((x, y) => x + y.price * y.cantidad, 0);
        return sumaTotal;
    };

    const sumarCantidad = (item, quantity) => {
        const cantidad = [...cart];
        cantidad.forEach((c) => {
            c.id === item.id && (c.cantidad += quantity);
        });
        setCart(cantidad);
    }

    //Borrar un producto especifico del carrito
    const deleteFromCart = (item) => {
        setCart(cart.filter(element => element.id !== item.id))
    }

    //Borro todos los items del carrito
    const borrar = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value = {{ addToCart, cart, borrar, deleteFromCart, total }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext).useCart
}

export function useDeleteFromCart(){
    return useContext(CartContext).deleteFromCart
}