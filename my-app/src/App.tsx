import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stor/stor';
import Form from './pages/Form/Form'
import User from './pages/User'
import Partner from './pages/Partner/Partner'
import './style/index.css'

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <BrowserRouter>
          <Routes>
            <Route path='/register' element={<Form/>} />
            <Route path='/' element={<Partner/>} />
            <Route path='/partner/user' element={<User/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
