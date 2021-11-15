import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({stock, inicial}) => {

    const [number, setNumber] = useState(0)

    const add = () => {
        number !== stock && setNumber(number + 1);
        /*setNumber(number + 1)*/
    };

    const substract = () => {
        number !== inicial && setNumber(number - 1);
        /*setNumber(number - 1)
        if(number == 0) {
            setNumber(0);
        }*/
    };

    const date = new Date();

    return (
        <div className = "counterContainer">
            <div className = "counter">
                <button onClick = {add} type="button" className="btn btn-secondary">+</button>
                <h1 className = "counterNumber">{number}</h1>
                <button onClick = {substract} type="button" className="btn btn-secondary">-</button>
            </div>
            <div>
                <p className = "date">{date.toString()}</p>
            </div>
            
        </div>
    )
}

export default ItemCount;
