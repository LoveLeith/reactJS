import { getFirestore, collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useContext, useEffect, useState } from 'react';
import Message from './Message';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import './Order.css';

const Order = () => {
    const [order, setOrder] = useState([]);
    const { userEmail } = useContext(CartContext);
    const { email } = userEmail;

    useEffect(() => {
        const db = getFirestore();
        const ref = query(collection(db, 'ticket'), orderBy('date'));
        getDocs(ref)
        .then((snapshot) => {
            const orden = snapshot.docs.map((doc) => {
                const data = doc.data();
                const { date } = data;
                const fecha = new Date(date.seconds * 1000);
                const normalizedCreatedAt = new Intl.DateTimeFormat('es-ES', {
                    dateStyle: 'full',
                    timeStyle: 'short',
                }).format(fecha);
                return {
                    id: doc.id,
                    ...data,
                    date: normalizedCreatedAt,
                };
            });
            setOrder(orden.filter((x) => x.buyer === email));
        });
    }, [email]);

    return (
        <div>
            {order?.length === 0 ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <h1 className ="orderTitle" style = {{ textAlign: 'center' }}>
                        Estas son tus órdenes de compra
                    </h1>
                    {order.map((ord) => (
                        <Message key = {ord.id} ord = {ord} />
                    ))}
                </>
            )}
            <Link to='/'>
                <div className = "containerLink">
                    <p>Volver al Home</p>
                </div>
           </Link>
        </div>
    );
};

export default Order;