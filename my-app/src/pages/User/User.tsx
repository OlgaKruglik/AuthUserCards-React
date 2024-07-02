import React, { useState } from 'react';
import useCard from '../../hook/useCard';
import { Link, useNavigate } from 'react-router-dom';
import arrow from './image/arrow.svg'
import exit from './image/round-exit.svg'
import './user.css'

type UserProps = {
    cardId: string; 
    };

    function addBreaksToText(text: string): string {
        const sentences = text.split('. ');
        return sentences.map((sentence: string, index: number) => (
        (index % 2 === 1) ? `${sentence}.<br /><br />` : `${sentence}.`
        )).join(' ');
        }

    function User({ cardId }: UserProps) {
        const cards = useCard();
        const card = cards.find(card => card.id === cardId);
        const navigate = useNavigate();
        
        if (!card) {
            return <div>Карта не найдена</div>;
        }

    const aboutWithBreaks = addBreaksToText(card.about);

    const handleLogout = () => {
        localStorage.clear(); 
        navigate('/'); 
        window.location.reload(); 
    };
    
    return (
    <div>
        <div className='header header-user'>
            <div className='header-button'>
                <button className='header-button-link'>
                    <Link to='/' >Назад</Link>
                </button>
                <img src={arrow} 
                    alt='Назад' 
                    className='button-img' 
                    onClick={() => navigate('/')} 
                    />
            </div>
            <div className='header-user-name'>
                <img src={card.image} alt={card.name} className='card-image' />
                <div className='info-user'>
                    <h1>{card.name}</h1>
                    <h2>{card.type}</h2>
                </div>
            </div>
            <div className='header-button'>
                <button onClick={handleLogout} className='header-button-link'>Выход</button>
                <img 
                    src={exit} 
                    alt='Выход' 
                    className='button-img' 
                    onClick={handleLogout}  
                />
            </div>
        </div>
        <div className='about'>
            <div className='card-about'>
                <p dangerouslySetInnerHTML={{ __html: aboutWithBreaks }} />
            </div>
            <div className='card-email-tel'>
                <p>{card.email}</p>
                <p>{card.tel}</p>
            </div>
        </div>
    </div>
    );
}

export default User
