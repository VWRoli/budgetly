import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
//Components
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';
//Pages
import Dashboard from './pages/Dashboard/Dashboard';
import Transactions from './pages/Transactions/Transactions';
//CSS
import './css/main.min.css';
import Reports from './pages/Reports/Reports';

const App: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Header setIsOpen={setIsOpen} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default App;
