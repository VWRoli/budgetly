import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Layouts
import UserLayout from './UserLayout';
import PublicLayout from './PublicLayout';

// Styles
import Wrapper from './App.styles';
import { GlobalStyle } from './globalStyles';

function App(): JSX.Element {
  return (
    <Router>
      <Wrapper>
        <GlobalStyle />
        <Switch>
          <Route path="/user/dash" component={UserLayout} />
          <Route path="/" component={PublicLayout} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
