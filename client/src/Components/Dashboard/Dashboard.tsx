// Components
import Budget from './Budget/Budget';
import DashNav from './DashNav/DashNav';
import Summary from './Summary/Summary';
import Transactions from './Transactions/Transactions';
// Styles
import Container from './Dashboard.styles';
import DashFooter from './DashFooter/DashFooter';

const Dashboard: React.FC = (): JSX.Element => (
  <>
    <Container>
      Dash
      <DashNav />
      <Summary />
      <Budget />
      <Transactions />
    </Container>
    <DashFooter />
  </>
);

export default Dashboard;
