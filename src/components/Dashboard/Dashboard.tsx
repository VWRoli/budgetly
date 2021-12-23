//Components
import Budget from './Budget/Budget';
import MonthSlider from './MonthSlider/MonthSlider';
import Summary from './Summary/Summary';
import Welcome from './Welcome/Welcome';

const Dashboard: React.FC = (): JSX.Element => {
  return (
    <>
      <Welcome />
      <Summary />
      <MonthSlider />
      <Budget />
    </>
  );
};

export default Dashboard;
