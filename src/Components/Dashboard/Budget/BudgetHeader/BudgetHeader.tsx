import { Wrapper, Left } from './BudgetHeader.styles';

type Props = {
  title: string;
  left?: number;
};

const BudgetHeader: React.FC<Props> = ({ title, left }): JSX.Element => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <Left>{left}</Left>
    </Wrapper>
  );
};

export default BudgetHeader;
