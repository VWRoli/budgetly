//Components
import AccountInfo from './AccountInfo/AccountInfo';
import CustomChart from './CustomChart/CustomChart';
import Date from './Date/Date';
//Styles
import { StyledBudget } from './Budget.styles';

const Budget: React.FC = (): JSX.Element => {
  return (
    <StyledBudget>
      <Date />
      <CustomChart />
      <AccountInfo />
    </StyledBudget>
  );
};

export default Budget;
