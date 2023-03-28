import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Campaign from './components/pages/Campaign';
import NewCampaign from './components/pages/NewCampaign';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import NavBar from './components/common/NavBar'
import Footer from './components/common/Footer/Footer'


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/campaigns/new' element={<NewCampaign/>}/>
        <Route path='/campaigns' element={<Campaign/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
