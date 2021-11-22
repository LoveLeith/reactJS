import React from 'react'

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
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">5% de descuento pagando por transferencia bancaria o efectivo</p>
                            <p className="card-text">Talle: 1/2</p>
                            <p className="card-text">Precio: ${item.price}</p>
                            <p className="card-text">Envío gratis a todo el país a partir de $5000</p>
                        </div>                      
                        </div>
                    </div>
            </div>            
        </>
    )
}

export default ItemDetail;
