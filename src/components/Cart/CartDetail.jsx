import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartDetail.css';

const CartDetail = ({ prod }) => {

    const {deleteFromCart} = useContext(CartContext)
    
    return (
            <>
                <div className="card mb-3 card-width">
                    <div className="row no-gutters">
                        <div className="col-md-2">
                            <img src={prod.img} className="card-img imagen-card" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body cuerpo-body">
                                <h5 className="card-title textoCuerpo--fontFamily textoCuerpo--fontWeight textoCuerpo--fontSize textoCuerpo--margin">{prod.name}</h5>
                                <p className="card-text textoCuerpo--fontFamily textoCuerpo--fontWeight textoCuerpo--fontSize textoCuerpo--margin">Cantidad: {prod.cantidad}</p>
                                <p className="card-text textoCuerpo--fontFamily textoCuerpo--fontWeight textoCuerpo--fontSize textoCuerpo--margin">Total producto: ${prod.price * prod.cantidad}</p>
                                <button className = "btn btn-secondary btn-sm" onClick = {() => deleteFromCart(prod)}> x </button>
                            </div>          
                        </div>
                    </div>
                </div>  
            </>
    )
        
}

export default CartDetail;