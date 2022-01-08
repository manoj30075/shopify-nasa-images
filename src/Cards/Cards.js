import React, { useState, useEffect } from 'react';

import Card from './Card';
import '../App.css';

const Cards = ({data}) => {
    const [cards, setCards] = useState();

    useEffect(() => {
        const cardsData = data.map(card => ({
            title:card.title,
            description:card.explanation,
            url:card.url,
            date:card.date,
        }))
        setCards(cardsData);
    }, [data]);

    return (
        <div className="card-container">
            {cards && cards.map(card => (
                <Card {...card}/>
            ))}
        </div>
  );
};

export default Cards;