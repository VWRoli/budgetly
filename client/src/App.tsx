import { BrowserRouter as Router } from 'react-router-dom';
// Components
import Dashboard from './Components/Dashboard/Dashboard';
// Styles
import GlobalStyle from './globalStyles';
import Wrapper from './App.styles';

function App(): JSX.Element {
  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <Dashboard />
      </Wrapper>
    </Router>
  );
}

export default App;
