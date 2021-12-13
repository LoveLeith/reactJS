import React, { useContext, useState } from 'react';

export const CartContext = React.createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    
    const isInCart = (item) => {
        return cart?.findIndex(element => element.id === item.id)
    }
    const addToCart = (item, cantidad) => {
        if(isInCart(item) === -1) { 
            setCart([...cart, {...item, cantidad}]);
        }
        else {
            let itemAux = cart.find(p => p.id === item.id)
            let itemAux2 = {
                id: itemAux.id,
                name: itemAux.name,
                price: itemAux.price,
                stock: itemAux.stock,
                img: itemAux.img,
                categoryId: itemAux.categoryId,
                cartCount: itemAux.cartCount + cantidad,
            };
            const cartAux = (cart.filter(element => element.id !== itemAux.id))
            setCart([...cartAux, itemAux2])
        }
        console.log(cart);
    };

    //Borrar un producto especifico del carrito
    const deleteFromCart = (item) => {
        setCart(cart.filter(element => element.id !== item.id))
    }

    //Borro todos los items del carrito
    const borrar = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value = {{ addToCart, cart, borrar, deleteFromCart }}>
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