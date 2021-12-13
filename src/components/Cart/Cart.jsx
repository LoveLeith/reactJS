import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useDeleteFromCart } from '../../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {

    const {cart, borrar, total} = useContext(CartContext);
    const deleteProduct = useDeleteFromCart();

    return ( cart.length === 0 ? 
        <div className = "zeroProductsContainer">
            <h1 className = "zeroProductsTitle">Aún no hay productos en el carrito</h1>
            <p className = "zeroProductsSubtitle">Hacé clic en el botón para volver al Home</p>
            <Link to='/'>
                <button type="button" className="btn btn-secondary btn-sm">Volver al Home</button>
            </Link>
        </div>
        :
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

            <div className = "priceContainer">
                <p className = "totalPrice">Total: ${total()}</p>
            </div>
            
            <button onClick={borrar} type="button" className="btn btn-secondary btn-sm btn-ml">Eliminar productos</button>
        </>
    )
};

export default Cart;