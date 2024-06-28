import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slise/userSlice';
import thunk from 'redux-thunk';

const store = configureStore({
reducer: {
user: userReducer,
},
});
    
    export default store;
    export type RootState = ReturnType<typeof store.getState>;
    export type AppDispatch = typeof store.dispatch;
