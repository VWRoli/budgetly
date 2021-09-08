import { H1 } from '../../../globalStyles';
import { BudgetContainer, BudgetHeader } from './Budget.styles';
import Header from './Header/Header';
import ProgressBar from './ProgressBar/ProgressBar';

const Budget: React.FC = (): JSX.Element => (
  <BudgetContainer>
    <BudgetHeader>
      <H1>August 2021</H1>
    </BudgetHeader>
    <ProgressBar title="This month" sum={5000} left={2500} />
    <Header title="Monthly Bills" />
    <ProgressBar title="Rent" sum={5000} left={2500} />
    <ProgressBar title="Fuel" sum={5000} left={2500} />
    <Header title="Everyday Expenses" />
    <ProgressBar title="Groceries" sum={5000} left={2500} />
    <ProgressBar title="Spending Money" sum={5000} left={2500} />
    <Header title="Saving Goals" />
    <ProgressBar title="Car" sum={5000} left={2500} />
  </BudgetContainer>
);

export default Budget;
