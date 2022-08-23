import { Route, Routes } from 'react-router-dom';

import '../App.css';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
}

export default App;
