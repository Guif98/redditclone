import './index.css';
import Navbar from './components/navbar/Navbar';
import Section from './components/section/Section';
import AuthModal from './components/modals/AuthModals';
import AuthModalContext from './AuthModalContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from './UserContext';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [modalType, setModalType] = useState('login');
  const [user, setUser] = useState({});


  useEffect(() => {
    axios.get('http://localhost:4000/user', {withCredentials:true})
    .then(response => setUser(response.data));
  }, [])

  return (
    <AuthModalContext.Provider className="overflow-hidden App" value={{show:showAuthModal, setShow:setShowAuthModal, type:modalType, setType:setModalType}}>  
      <div className="overflow-hidden">
        <UserContext.Provider value={{user}}>
          <Navbar />
          <Section />
          <AuthModal/>
        </UserContext.Provider>
      </div>
    </AuthModalContext.Provider> 
  );
}

export default App;
