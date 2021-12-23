import { useState } from 'react';
//Components
import Dashboard from './components/Dashboard/Dashboard';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';
//CSS
import './css/main.min.css';

const App: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Header setIsOpen={setIsOpen} />
      <Dashboard />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default App;
