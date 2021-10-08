import './index.css';
import Navbar from './components/navbar/Navbar';
import Section from './components/section/Section';
import AuthModal from './components/modals/AuthModals';

function App() {
  return (
    <div className="App overflow-hidden">
      <Navbar />
      <Section />
      <AuthModal/>
    </div>
  );
}

export default App;
