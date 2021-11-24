import './ItemListContainer.css';
import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import { products } from './Items';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
    const {categoryId} = useParams()
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(true);
        const bringProducts = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        })
        bringProducts
            .then((res) => {
                const filtrado = res.filter((prod) => prod.categoryId === `${categoryId}`);
                categoryId === undefined ? setItems(res) : setItems(filtrado);
            })
            .catch((error) => {
                console.log(error);
            }).finally(() => {
                setLoader(false);
            });
    }, [categoryId]);
    

    return (loader ? <h1>Loading products...</h1>:
        <div className = "greetingContainer">
            <h1 className = "greetingStyle">{props.greeting}</h1>
            <ItemList items = {items}/>
        </div>
    )
}

export default ItemListContainer;