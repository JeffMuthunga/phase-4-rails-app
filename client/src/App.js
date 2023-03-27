import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Campaign from './components/pages/Campaign';
import NewCampaign from './components/pages/NewCampaign';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/campaigns/new' element={<NewCampaign/>}/>
        <Route path='/campaigns' element={<Campaign/>}/>
      </Routes>
    </div>
  );
}

export default App;
