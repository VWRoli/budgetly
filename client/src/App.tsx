import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Components
import Dashboard from './Components/Dashboard/Dashboard';
//Styles
import { Wrapper } from './App.styles';

function App() {
  return (
    <Router>
      <Wrapper>
        <Dashboard />
      </Wrapper>
    </Router>
  );
}

export default App;
