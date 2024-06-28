import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

interface Card {
    id: string;
    about: string;
    type: string;
    Username: string;
    image: string;
    email: string;
    tel: string;
    }

function useCard() {
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        const fetchCards = async () => {
        try {
            const cardsCol = collection(db, 'user'); 
            const cardsSnapshot = await getDocs(cardsCol);
            const cardsList = cardsSnapshot.docs.map(doc => ({
                id: doc.id,
                about: doc.data().about,
                type: doc.data().type,
                Username: doc.data().Username,
                image: doc.data().image,
                email: doc.data().email,
                tel: doc.data().tel
            }));
            setCards(cardsList);
        } catch (error) {
            console.error('Ошибка при получении данных карт:', error);
            }
        };
        
        fetchCards();
        }, []);
        
    return cards;
}

export default useCard





