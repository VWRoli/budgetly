import BudgetContainer from './Budget.styles';
import BudgetHeader from './BudgetHeader/BudgetHeader';

const Budget: React.FC = (): JSX.Element => (
  <BudgetContainer>
    <BudgetHeader title="August 2021" left={5489} />
    <BudgetHeader title="Monthly Bills" />
    <BudgetHeader title="Everyday Expenses" />
    <BudgetHeader title="Saving Goals" />
  </BudgetContainer>
);

export default Budget;
