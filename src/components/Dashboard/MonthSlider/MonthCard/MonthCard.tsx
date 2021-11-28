type Props = {
  month: string;
  isActive: boolean;
};
const MonthCard: React.FC<Props> = ({ month, isActive }): JSX.Element => {
  return (
    <div className={isActive ? 'month-card active-month-card' : 'month-card'}>
      <h4>{month}</h4>
    </div>
  );
};

export default MonthCard;
