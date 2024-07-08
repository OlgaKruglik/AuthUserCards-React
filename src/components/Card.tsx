import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useCard from '../hook/useCard';
import icon from './CardStyle/icon.svg'
import like from './CardStyle/Like.svg'
import { To } from 'react-router-dom';
import User from '../pages/User/User'
import './CardStyle/Card.css';


function Card() {

    const cards = useCard();
    const [selectedCard, setSelectedCard] = useState<string | null>(null);
    const [selectedIcon, setSelectedIcon] = useState<Record<string, boolean>>({});

    const handleCardClick = (id: string) => {
        setSelectedCard(id);
        };

    const handleIconClick = (id: string, event: React.MouseEvent) => {
        event.stopPropagation(); 
        setSelectedIcon(prevState => ({ ...prevState, [id]: !prevState[id] }));
    };
    
        return (
            <div className='card-map'>
                {cards.map((card) => (
                    <div key={card.id} className={`card-container ${selectedCard === card.id ? 'selected' : ''}`}>
                    <Link to={{
                        pathname: `/user/${card.id}`,
                        state: { ...card }
                    } as unknown as To} 
                    className="card-link" onClick={() => handleCardClick(card.id)}>
                    <img src={card.image} alt='card' className="card-image" />
                    <h2>{card.name}</h2>
                    </Link>
                    <div className='loyver-vertical' onClick={(event) => handleIconClick(card.id, event)}>
                        <img src={selectedIcon[card.id] ? icon : like} alt='icon' className='card-icon' />
                        </div>
                    </div>
                ))}
                
                </div>
            );
            }
            
export default Card
