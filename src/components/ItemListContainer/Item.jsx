import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemStyle.css';

const Item = ({ item }) => {
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
                            <p className="card-text">Precio: ${item.price}</p>
                        </div>                      
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Item;
