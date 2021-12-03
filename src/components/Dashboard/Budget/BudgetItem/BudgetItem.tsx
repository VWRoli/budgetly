import { GiProgression } from 'react-icons/gi';
import Chip from 'src/components/common/Chip/Chip';

const BudgetItem: React.FC = (): JSX.Element => {
  return (
    <div className="budget-item-wrapper">
      <div>
        <h3>
          Internet <Chip label={50} isAlternative />
        </h3>
        <p>Spent</p>
      </div>
      <div className="progress-wrapper">
        <GiProgression />
      </div>
    </div>
  );
};

export default BudgetItem;
