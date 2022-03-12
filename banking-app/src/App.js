import './App.css';
import LoginUi from './components/Login/LoginUi';
import NavBar from './components/NavBar';
import Account from './components/Account/Account';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginModal from './components/LoginModal/LoginModal';

function App() {
  return (
    <div >
      <Router>
      <NavBar/>
      
        <Routes>
          <Route path="/Login" element={<LoginUi/>}/>
          <Route path="/Modal" element={<LoginModal/>}/>
          <Route path="/Account" element={<Account/>}/>

        </Routes>
      </Router>
      
      
      
      
    </div>
  );
}

export default App;
