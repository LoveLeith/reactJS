import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';
import CartDetail from './CartDetail.jsx';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Order from './Order';
import { Link } from 'react-router-dom';

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
                    <div>                 
                        {cart.length === 0 ? (<div> </div>
                            ) : (
                                <div className = "cartContainer">
                                    <h1 className = "cartTitle">Carrito de compras</h1>
                                    {cart.map((prod) => (
                                    <CartDetail key = {prod.id} prod ={prod} />
                                    ))}
                                </div>       
                            )
                        }                     
                    </div>
                    <div className = "emptyCartTernaryContainer">
                        {cart.length === 0 ? (
                            <div className = "zeroProductsContainer">
                                <h1 className = "zeroProductsTitle">Aún no hay productos en el carrito</h1>
                                <p className = "zeroProductsSubtitle">Hacé clic en el botón para volver al Home</p>
                                <Link to='/'>
                                    <button type="button" className="btn btn-secondary btn-sm">Volver al Home</button>
                                </Link>
                            </div>
                                ) : (
                                    <div className = "fullCartTernaryContainer">
                                        <div className = "priceContainer">
                                            <p className = "totalPrice">Total: ${total()}</p>                               
                                        </div>           
                                        <div className = "deleteProducts">
                                            <button onClick={deleteAll} type="button" className="btn btn-secondary btn-sm btn-ml btn-mb">Eliminar productos</button>
                                        </div>
                                        <h2 className ="cartSubtitle">Por favor, ingresá tu email y tu nombre para poder confirmar tu compra.</h2>
                                        <p className = "cartText">Una vez completados estos datos, hacé clic en "Confirmar compra" para ver los productos que seleccionaste</p>
                                        <form className = "formContainer" method = "POST" onSubmit = {confirmPurchase}>
                                            <input onChange = {fillInForm} type = 'email' name = 'email' placeholder = 'Correo electrónico' />
                                            <input onChange = {fillInForm} type = 'text' name = 'nombre' placeholder = 'Nombre y apellido' />
                                            <input onChange = {fillInForm} type = 'tel' name = 'phone' placeholder = 'Teléfono' />
                                            <button disabled = {cart?.length === 0 || form.nombre === '' || form.email === '' || form.phone === ''}>Confirmar compra</button>                                      
                                        </form>
                                    </div>                                   
                                ) 
                        }
                    </div>                                       
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