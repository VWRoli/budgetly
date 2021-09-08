import { H3 } from '../../../../globalStyles';
import { Wrapper, Progress, ProgressContainer } from './ProgressBar.styles';

type Props = {
  title?: string;
  sum: number;
  left: number;
};

const ProgressBar: React.FC<Props> = ({ title, sum, left }): JSX.Element => {
  return (
    <Wrapper>
      <H3>{title}</H3>
      <ProgressContainer>
        <Progress>
          {left} / {sum}
        </Progress>
      </ProgressContainer>
    </Wrapper>
  );
};

export default ProgressBar;
