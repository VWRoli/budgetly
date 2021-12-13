import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
//Components
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
        <CircularProgressbar
          value={65}
          text={`${65}%`}
          styles={buildStyles({
            strokeLinecap: 'round',
            textSize: '24px',
            pathColor: `#8c4af2e5`,
            textColor: '#14111e',
            trailColor: '#d6d6d6',
          })}
        />
      </div>
    </div>
  );
};

export default BudgetItem;
