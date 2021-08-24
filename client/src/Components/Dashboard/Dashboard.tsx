import Budget from './Budget/Budget';
import DashNav from './DashNav/DashNav';
import Summary from './Summary/Summary';
import Transactions from './Transactions/Transactions';

const Dashboard = () => {
  return (
    <div>
      Dash
      <DashNav />
      <Summary />
      <Budget />
      <Transactions />
    </div>
  );
};

export default Dashboard;
