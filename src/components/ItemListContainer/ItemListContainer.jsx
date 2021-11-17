import './ItemListContainer.css';
import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import { products } from './Items';

const ItemListContainer = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const bringProducts = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        })
        bringProducts
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);
    

    return (
        <div className = "greetingContainer">
            <h1 className = "greetingStyle">{props.greeting}</h1>
            <ItemList items = {items}/>
        </div>
    )
}

export default ItemListContainer;