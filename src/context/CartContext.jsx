import React, { useContext, useState } from 'react';

export const CartContext = React.createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [userEmail, setUserEmail] = useState ('');
    
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

    const deleteFromCart = (item) => {
        setCart(cart.filter(element => element.id !== item.id))
    }

    const deleteAll = () => {
        setCart([])
    }

    const unidades = () => {
        const unidadesCart = cart.reduce((x, y) => x + y.cantidad, 0);
        return unidadesCart;
    }

    const getUser = (form) => {
        setUserEmail(form);
    }

    return(
        <CartContext.Provider value = {{ addToCart, cart, deleteAll, deleteFromCart, total, unidades, getUser, userEmail }}>
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