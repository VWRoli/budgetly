//Components
import Budget from './Budget/Budget';
import DashHeader from './DashHeader/DashHeader';
import MonthSlider from './MonthSlider/MonthSlider';
import Summary from './Summary/Summary';
import Welcome from './Welcome/Welcome';

const Dashboard: React.FC = (): JSX.Element => {
  return (
    <>
      <DashHeader />
      <Welcome />
      <Summary />
      <MonthSlider />
      <Budget />
    </>
  );
};

export default Dashboard;
