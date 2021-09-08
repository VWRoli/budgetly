import { H1 } from '../../../globalStyles';
import { BudgetContainer, BudgetHeader } from './Budget.styles';
import Header from './Header/Header';

const Budget: React.FC = (): JSX.Element => (
  <BudgetContainer>
    <BudgetHeader>
      <H1>August 2021</H1>
    </BudgetHeader>
    <Header title="Monthly Bills" />
    <Header title="Everyday Expenses" />
    <Header title="Saving Goals" />
  </BudgetContainer>
);

export default Budget;
