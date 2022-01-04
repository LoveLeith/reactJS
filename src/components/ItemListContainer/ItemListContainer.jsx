import './ItemListContainer.css';
import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = (props) => {
    const {categoryId} = useParams()
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(true);
        const db = getFirestore();
        const ref = collection(db, 'products');
        getDocs(ref)
        .then((snapshot) => {
            const products = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            });     
            const categorias = products.filter((prod) => prod.categoryId === `${categoryId}`);
            categoryId === undefined ? setItems(products) : setItems(categorias);
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