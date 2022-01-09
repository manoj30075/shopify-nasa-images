import React from 'react';

import Card from './Card';
import '../App.css';

const Cards = ({data}) => (
    <div className="card-container">
        {data && data.map(card => (
            <Card key={card.id} {...card}/>
        ))}
    </div>
)

export default Cards;