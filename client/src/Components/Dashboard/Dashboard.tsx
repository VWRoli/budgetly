// Components
import Budget from './Budget/Budget';
import DashNav from './DashNav/DashNav';
import Summary from './Summary/Summary';
import Transactions from './Transactions/Transactions';
import DashFooter from './DashFooter/DashFooter';
// Styles
import { MainDash, DashContainer } from './Dashboard.styles';

const Dashboard: React.FC = (): JSX.Element => (
  <>
    <DashContainer>
      <DashNav />
      <MainDash>
        <Summary />
        <Budget />
        <Transactions />
      </MainDash>
    </DashContainer>
    <DashFooter />
  </>
);

export default Dashboard;
