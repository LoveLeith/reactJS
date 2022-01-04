import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailStyle.css';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [loader, setLoader] = useState(true);
    
    useEffect(() => {
        setLoader(true);
        const db = getFirestore();
        const ref = doc(db, 'products', id);
        getDoc(ref)
        .then((snapshot) => {
            setItem({
                id: snapshot.id,
                ...snapshot.data(),
            });
        })
        .catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoader(false);
        });
    }, [id]);

    return (loader ? <h1>Loading product...</h1>:
        <>
            <div className = "detailContainer">
                <ItemDetail item = {item} /> 
            </div>
                     
        </>
    );
};

export default ItemDetailContainer;
