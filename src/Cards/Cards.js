import React from 'react';

import Card from './Card';
import '../App.css';

const Cards = ({data}) => (
    <div className="card-container">
        {data.length > 0 ? data.map(card => (
            <Card key={card.id} {...card}/>
        )) : null}
    </div>
)

export default Cards;