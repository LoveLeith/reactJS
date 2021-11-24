import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetailStyle.css';

const ItemDetail = ({ item }) => {
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
                                <p className="card-text textoCuerpo--fontFamily textoCuerpo--fontWeight textoCuerpo--fontSize">5% de descuento pagando por transferencia bancaria o efectivo</p>
                                <p className="card-text textoCuerpo--fontFamily textoCuerpo--fontSize">Envío gratis a todo el país a partir de $5000</p>
                                <p className="card-text textoCuerpo--fontFamily textoCuerpo--fontSize">Talle: 1/2</p>
                                <p className="card-text textoCuerpo--fontFamily textoCuerpo--fontWeight textoCuerpo--fontSize">Precio: ${item.price}</p>
                                <p className="textoCuerpo--fontFamily textoCuerpo--fontSize">Stock disponible: {item.stock} unidades</p>
                            </div>   
                            <div className = "stockCounterContainer">
                                <ItemCount stock = {item.stock}/>
                            </div>         
                        </div>
                    </div>
            </div>      
        </>
    )
}

export default ItemDetail;
