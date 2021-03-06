import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({stock, onAdd }) => {

    const [number, setNumber] = useState(0)

    const add = () => {
        number !== stock && setNumber(number + 1);
    };

    const substract = () => {
        number !== 0 && setNumber(number - 1);
    };

    return (
        <div className = "counterContainer">
            <div className = "counter">
                <button onClick = {add} type="button" className="btn btn-secondary btn-sm">+</button>
                <h1 className = "counterNumber">{number}</h1>
                <button onClick = {substract} type="button" className="btn btn-secondary btn-sm">-</button>
                <button disabled = {number === 0} onClick = {()=>onAdd(number)} type="button" className="btn btn-secondary btn-sm btn-ml">Agregar al carrito</button>
            </div>     
        </div>
    )
}

export default ItemCount;
