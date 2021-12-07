//Components
import Chip from 'src/components/common/Chip/Chip';
import ProgressBar from 'src/components/common/ProgressBar/ProgressBar';

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
        <ProgressBar />
      </div>
    </div>
  );
};

export default BudgetItem;
