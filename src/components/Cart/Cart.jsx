import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useDeleteFromCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {

    const {cart, borrar} = useContext(CartContext);
    const deleteProduct = useDeleteFromCart();

    return (
        <>
            {cart.map((item) =>(
                <div key = {item.id}>
                    <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-2">
                            <img src={item.img} className="card-img imagen-card" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body cuerpo-body">
                                <h5 className="card-title textoCuerpo--fontFamily textoCuerpo--fontSize textoCuerpo--margin">{item.name}</h5>
                                <button className="btn-dark btn-add"> + </button>
                                <p className="card-text textoCuerpo--fontFamily textoCuerpo--fontWeight textoCuerpo--fontSize textoCuerpo--margin">{item.cantidad}</p>
                                <button className="btn-dark btn-sub"> - </button>
                                <p className="card-text textoCuerpo--fontFamily textoCuerpo--fontWeight textoCuerpo--fontSize textoCuerpo--margin">Precio: ${item.price}</p>
                                <button className = "btn-dark btn-delete" onClick = {() => deleteProduct(item)}> x </button>
                            </div>          
                        </div>
                    </div>
                </div>  
                </div>
            ))}

            <button onClick={borrar} type="button" className="btn btn-secondary btn-sm btn-ml">Eliminar productos</button>
        </>
    )
};

export default Cart;

//<button class="btn-dark btn-delete" onClick={() => deleteProduct(item)}> x </button>