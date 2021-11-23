import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { products } from './Items';
import { useParams } from 'react-router-dom';
import './ItemDetailStyle.css';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
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
        });
    }, [id]);

    return (
        <>
            <div className = "detailContainer">
                <ItemDetail item = {item} /> 
            </div>
                     
        </>
    );
};

export default ItemDetailContainer;
