import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetailStyle.css';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const [irAlCarrito, setIrAlCarrito] = useState(false);
    const { addToCart } = useContext(CartContext);

    const onAdd = (cantidad) => {
        //console.log({ ...item, quantity: cantidad });
        addToCart(item, cantidad);
        setIrAlCarrito(true);
    }

    return (
        <>
            <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-2">
                            <img src={item.img} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title textoCuerpo--fontFamily textoCuerpo--fontSize">{item.name}</h5>
                                <p className="card-text textoCuerpo--fontFamily textoCuerpo--fontWeight textoCuerpo--fontSize">10% de descuento pagando por transferencia bancaria o efectivo</p>
                                <p className="card-text textoCuerpo--fontFamily textoCuerpo--fontSize">Envío gratis a todo el país a partir de $5000</p>
                                <p className="card-text textoCuerpo--fontFamily textoCuerpo--fontSize">Talle: 1/2</p>
                                <p className="card-text textoCuerpo--fontFamily textoCuerpo--fontWeight textoCuerpo--fontSize">Precio: ${item.price}</p>
                                <p className="textoCuerpo--fontFamily textoCuerpo--fontSize">Stock disponible: {item.stock} unidades</p>
                            </div>   
                            <div className = "stockCounterContainer">
                                {irAlCarrito ? (
                                    <>
                                        <Link to='/cart'>
                                        <button type="button" className="btn btn-secondary btn-sm btn-ml">Ir al carrito</button>
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <ItemCount stock = {item.stock} onAdd = {onAdd}/>
                                    </>
                                )}                                
                           </div>         
                        </div>
                    </div>
            </div>      
        </>
    )
}

export default ItemDetail;
