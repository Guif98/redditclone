import './index.css';
import Navbar from './components/navbar/Navbar';
import Section from './components/section/Section';
import AuthModal from './components/modals/AuthModals';
import AuthModalContext from './AuthModalContext';
import { useState } from 'react';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [modalType, setModalType] = useState('login');

  return (
    <AuthModalContext.Provider className="overflow-hidden App" value={{show:showAuthModal, setShow:setShowAuthModal, type:modalType, setType:setModalType}}>  
      <div className="overflow-hidden">
        <Navbar />
        <Section />
        <AuthModal/>
      </div>
    </AuthModalContext.Provider> 
  );
}

export default App;
