import { Route, Switch } from 'react-router-dom';
//Components
import Budget from './Components/Budget/Budget';
import Sidebar from './Components/Sidebar/Sidebar';
import Categories from './Components/Categories/Categories';
import Reports from './Components/Reports/Reports';
import Accounts from './Components/Accounts/Accounts';

const UserLayout = () => {
  return (
    <>
      <Sidebar />
      <Budget />
      <Switch>
        <Route exact path="/user" render={() => <Categories />} />
        <Route exact path="/user/reports" render={() => <Reports />} />
        <Route exact path="/user/accounts" render={() => <Accounts />} />
      </Switch>
    </>
  );
};

export default UserLayout;
