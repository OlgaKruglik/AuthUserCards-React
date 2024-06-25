import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Form from './pages/Form';
import User from './pages/User'
import Partner from './pages/Partner'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Form /> */}
        <Routes>
          <Route path='/' element={<Form/>} />
          <Route path='/partner' element={<Partner/>} />
          <Route path='/partner/user' element={<User/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
