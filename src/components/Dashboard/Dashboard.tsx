//Components
import DashHeader from './DashHeader/DashHeader';
import Summary from './Summary/Summary';
import Welcome from './Welcome/Welcome';

const Dashboard: React.FC = (): JSX.Element => {
  return (
    <>
      <DashHeader />
      <Welcome />
      <Summary />
    </>
  );
};

export default Dashboard;
