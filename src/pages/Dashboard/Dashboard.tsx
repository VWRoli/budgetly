//Components
import AddTransaction from '../../components/AddTransaction/AddTransaction';
import Budget from '../../components/Budget/Budget';
import MonthSlider from '../../components/MonthSlider/MonthSlider';
import Summary from '../../components/Summary/Summary';
import Welcome from '../../components/Welcome/Welcome';

const Dashboard: React.FC = (): JSX.Element => {
  return (
    <>
      <Welcome />
      <Summary />
      <MonthSlider />
      <Budget />
      <AddTransaction />
    </>
  );
};

export default Dashboard;
