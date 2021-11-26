import Chip from '../../common/Chip/Chip';

const Welcome = () => {
  return (
    <div className="welcome-msg">
      <h3>Welcome, Demo User!</h3>
      <h4>
        Available to budget: <Chip label="$0.00" />
      </h4>
    </div>
  );
};

export default Welcome;
