import { Route, Routes } from 'react-router-dom';

import '../App.css';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Fees from './pages/Fees';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Routes>
      <Route path='/fees' element={<Fees />} />
      <Route path='/' exact element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/about-us' element={<AboutUs />} />
    </Routes>
  );
}

export default App;
