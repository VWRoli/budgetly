import { Route, Switch } from 'react-router-dom';
//Components
import Home from './Components/Home/Home';

const PublicLayout = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
    </Switch>
  );
};

export default PublicLayout;
