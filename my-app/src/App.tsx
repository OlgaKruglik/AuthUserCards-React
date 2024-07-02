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
  if (typeof id === 'undefined') {
  return <div>Идентификатор пользователя не найден</div>;
  }
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
