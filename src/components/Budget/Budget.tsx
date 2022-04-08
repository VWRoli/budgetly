//Components
import BudgetItem from './BudgetItem';
import CategoryTitle from './CategoryTitle';

const Budget: React.FC = (): JSX.Element => {
  return (
    <div className="budget-wrapper">
      <CategoryTitle title="Bills" />
      <BudgetItem item="Internet" value={65} />
      <BudgetItem item="Phone" value={35} />
      <BudgetItem item="Spotify" value={90} />
      <CategoryTitle title="Everyday Expenses" />
      <BudgetItem item="Groceries" value={50} />
      <BudgetItem item="Spending Money" value={0} />
      <BudgetItem item="Party" value={100} />
    </div>
  );
};

export default Budget;
