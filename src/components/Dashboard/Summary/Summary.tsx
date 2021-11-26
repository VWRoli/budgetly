import { BsThreeDotsVertical } from 'react-icons/bs';

const Summary = () => {
  return (
    <div className="summary-container">
      <div className="income">
        <h3>Income</h3>
        <h4>$2000</h4>
      </div>
      <BsThreeDotsVertical />
      <div className="expense">
        <h3>Expense</h3>
        <h4>$1000</h4>
      </div>
    </div>
  );
};

export default Summary;
