import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { products } from './Items';
import { useParams } from 'react-router-dom';
import './ItemDetailStyle.css';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [loader, setLoader] = useState(true);
    const [irAlCarrito, setIrAlCarrito] = useState(false);

    useEffect(() => {
        setLoader(true);
        const bringProduct = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        bringProduct
        .then((res) => {
            const product = res.find(
                (prod) => prod.id === parseInt(id));
            setItem(product);
        })
        .catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoader(false);
        });
    }, [id]);

    const onAdd = (cantidad) => {
        console.log({ ...item, quantity: cantidad });
        setIrAlCarrito(true)
    }

    return (loader ? <h1>Loading product...</h1>:
        <>
            <div className = "detailContainer">
                <ItemDetail item = {item} onAdd = {onAdd} irAlCarrito = {irAlCarrito}/> 
            </div>
                     
        </>
    );
};

export default ItemDetailContainer;
