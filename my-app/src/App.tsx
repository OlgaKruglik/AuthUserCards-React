import './App.css';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stor/stor';
import Form from './pages/Form/Form'
import User from './pages/User/User'
import Partner from './pages/Partner/Partner'
import './style/index.css'

function UserWrapper() {
  const { id } = useParams();
  // Проверяем, определён ли id
  if (typeof id === 'undefined') {
  // Обрабатываем случай, когда id не определён
  // Например, можно вернуть компонент с сообщением об ошибке
  return <div>Идентификатор пользователя не найден</div>;
  }
  // Если id определён, передаём его в компонент User
  return <User cardId={id} />;
  }

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <BrowserRouter>
          <Routes>
            <Route path='/register' element={<Form/>} />
            <Route path='/' element={<Partner/>} />
            <Route path='/user/:id' element={<UserWrapper/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
