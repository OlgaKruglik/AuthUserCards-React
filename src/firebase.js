import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs  } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword,  
  signInWithEmailAndPassword,
  onAuthStateChanged as onAuthStateChangedFirebase,
  signOut as signOutFirebase } from "firebase/auth";

console.log(process.env);


const firebaseConfig = {
  apiKey: "AIzaSyBAwzhWB-P5WN-dHJEvCd_5d0fkVLYVJL8",
  authDomain: "uathusercards.firebaseapp.com",
  projectId: "uathusercards",
  storageBucket: "uathusercards.appspot.com",
  messagingSenderId: "98623399866",
  appId: "1:98623399866:web:6457045271cab57d0a5f83",
  measurementId: "G-B85L8GXQWM"
};
console.log('hi');
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
console.log(auth);



export const signUp = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log('Регистрация успешна!', user.user);
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  } catch (error) {
      console.error(error);
    }
  };

  export const singIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      if (!userCredential) {
      throw new Error('No user returned from signIn');
    }
    console.log(userCredential);
      return userCredential; 
    } catch (error) {
      console.error(error);
      throw error; 
    }
    };
    export const onAuthStateChanged = (callback) => {
        const unsubscribe = onAuthStateChangedFirebase(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log('Signed in user:', user);
          console.log(uid);
        }
        callback(user);
        });
        return unsubscribe;
        };

    export const signOut = async () => {
      try {
        await signOutFirebase(auth);
          console.log('Выход выполнен успешно.');
      } catch (error) {
        console.error('Ошибка при выходе из системы:', error);
        }
    };
  
    export async function getUsers() {
      try {
        const usersCol = collection(db, 'user');
        const usersSnapshot = await getDocs(usersCol);
        const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log(usersList);
        console.log(usersList);
        return usersList;
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
        return []; 
      }
      }

      