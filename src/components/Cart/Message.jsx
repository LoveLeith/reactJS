import React from 'react';
import './Message.css';

const Message = ({ ord }) => {
    const productName = ord.items.map((ticket) => ticket.name);

    return (
        <div className = "ticketContainer">
            <h2 className = "ticketText ticketId">Id de la compra: {ord.id}</h2>
            <h2 className = "ticketText">Fecha: {ord.date}</h2>
            <h2 className = "ticketText">Nombre del producto: {productName}</h2>
            <h2 className = "ticketText">Email: {ord.buyer}</h2>
        </div>
    );
};

export default Message;