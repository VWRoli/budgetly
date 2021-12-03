//Components
import BudgetItem from './BudgetItem/BudgetItem';
import CategoryTitle from './CategoryTitle/CategoryTitle';

const Budget: React.FC = (): JSX.Element => {
  return (
    <div>
      <CategoryTitle />
      <BudgetItem />
    </div>
  );
};

export default Budget;
