import React from 'react';
import useCard from '../../hook/useCard';

type UserProps = {
    cardId: string; // Предполагая, что cardId имеет тип string
    };

    function User({ cardId }: UserProps) {
        const cards = useCard();
        const card = cards.find(card => card.id === cardId);
        
        if (!card) {
        return <div>Карта не найдена</div>;
        }
    
    return (
    <div>
    <img src={card.image} alt={card.name} />
    <h2>{card.name}</h2>
    <p>{card.about}</p>
    <p>{card.type}</p>
    <p>{card.email}</p>
    <p>{card.tel}</p>
    </div>
    );
        }

export default User
