//Styles
import { DateWrapper, MonthTitle, YearTitle } from './Date.styles';

const Date: React.FC = (): JSX.Element => {
  return (
    <DateWrapper>
      <YearTitle>2021</YearTitle>
      <MonthTitle>August</MonthTitle>
    </DateWrapper>
  );
};

export default Date;
