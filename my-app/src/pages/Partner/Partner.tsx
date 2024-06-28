import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../../components/Card'
import { RootState } from '../../stor/stor';
import '../../firebase'
import './style/partner.css'

function Partner() {

const [showLinkRegister, setShowLinkRegister] = useState(false);
const linkRegisterRef = useRef<HTMLDivElement>(null);
const registrationStatus = useSelector((state: RootState) => state.user.status);


const toggleShowLinkRegister = () => {
    setShowLinkRegister(!showLinkRegister);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
        if (linkRegisterRef.current && !linkRegisterRef.current.contains(event.target as Node)) {
        setShowLinkRegister(false);
        }
        };
    
    useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
    document.removeEventListener('mousedown', handleClickOutside);
    };
    }, []);


    return (
        <div className='cards'>
            <div className='header'>
                <div className='header-button'>
                    <button>Выход</button>
                </div>
                <div className='header-text'>
                    <h1>Наша команда</h1>
                    <h2>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </h2>
                </div>
            </div>
             <button 
                className='cards-button'
                onClick={toggleShowLinkRegister}>
                    Показать карточки
            </button>
            {showLinkRegister && (
                <div className='overlay'>
                    <div className='linck-register' ref={linkRegisterRef}>
                        <h2>Зарегистрируйтесь</h2>
                        <button className='cards-button'>
                            <Link to='/register' >Регистрация</Link>
                        </button>
                    </div>
                </div>
            )}
            <Card />
        </div>
    )
}

export default Partner
