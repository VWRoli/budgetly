//Components
import BudgetItem from './BudgetItem';
import CategoryTitle from './CategoryTitle';

const Budget: React.FC = (): JSX.Element => {
  return (
    <div>
      <CategoryTitle />
      <BudgetItem />
    </div>
  );
};

export default Budget;
