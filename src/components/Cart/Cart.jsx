import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';
import CartDetail from './CartDetail.jsx';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Order from './Order';

const Cart = () => {

    const {cart, deleteAll, total, getUser} = useContext(CartContext);
    const [goToTicket, setGoToTicket] = useState(false);
    const [form, getForm] = useState ({ nombre: '', email: ''});

    const fillInForm = (e) => {
        const { name, value } = e.target;
        getForm({
            ...form,
            [name]: value,
        });
    }

    const date = new Date();

    const confirmPurchase = () => {
        getUser(form);
        const db = getFirestore();
        const ref = collection(db, 'ticket');
        const newOrder = {
            buyer: form.email,
            items: cart,
            date: date,
            total: total(),
        };
        addDoc(ref, newOrder);
        setGoToTicket(true);
        deleteAll();
    }

    return ( 
        <>
            <>
            {!goToTicket ? (
                <>
                    <div className = "cartContainer">
                        <h1 className = "cartTitle">Carrito de compras</h1>
                        {cart.map((prod) => (
                            <CartDetail key = {prod.id} prod ={prod} />
                        ))}
                    </div>
                    <div className = "priceContainer">
                                <p className = "totalPrice">Total: ${total()}</p>
                            </div>           
                            <div className = "deleteProducts">
                                <button onClick={deleteAll} type="button" className="btn btn-secondary btn-sm btn-ml btn-mb">Eliminar productos</button>
                            </div>
                        <h2 className ="cartSubtitle">Por favor, ingresá tu email y tu nombre para poder confirmar tu compra.</h2>
                        <p className = "cartText">Una vez completados estos datos, hacé clic en "Confirmar compra" para ver los productos que seleccionaste</p>
                        <form className = "formContainer" method = "POST" onSubmit = {confirmPurchase}>
                            <input onChange = {fillInForm} type = 'email' name = 'email' placeholder = 'email' />
                            <input onChange = {fillInForm} type = 'text' name = 'nombre' placeholder = 'nombre' />
                            <button disabled = {cart?.length === 0 || form.nombre === '' || form.email === ''}>Confirmar compra</button>                                      
                        </form>                    
                </>               
            ) : (
                <>
                    <Order />
                </>
            )}           
            </>       
        </>        
    );
};

export default Cart;