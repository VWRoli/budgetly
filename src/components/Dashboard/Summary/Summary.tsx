import { BsThreeDotsVertical } from 'react-icons/bs';

const Summary: React.FC = (): JSX.Element => {
  return (
    <div className="summary-container">
      <div className="income">
        <h4>Income</h4>
        <h3>$2000</h3>
      </div>
      <BsThreeDotsVertical />
      <div className="expense">
        <h4>Expense</h4>
        <h3>$1000</h3>
      </div>
    </div>
  );
};

export default Summary;
