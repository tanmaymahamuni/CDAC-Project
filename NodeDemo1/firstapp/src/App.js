import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Aboutus from './component/Aboutus';
import LoginPage from './component/Login';
import RegistrationForm from './component/Register';
import RegistrationForm1 from './component/RegisterCust';
import Homepage from './component/Home';
import Footer from './component/footer';




function App() {
  return (
    <div>
        <Homepage/>
      <Routes>
        <Route path="/aboutus" element={<Aboutus/>}/>
      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
