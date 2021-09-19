//Styles
import {
  StyledProgressBar,
  FullProgress,
  CurrentProgress,
} from './ProgressBar.styles';

type Props = {
  title: string;
  progress: number;
};

const ProgressBar: React.FC<Props> = ({ title, progress }): JSX.Element => {
  return (
    <StyledProgressBar>
      <h3>{title}</h3>
      <FullProgress>
        <CurrentProgress>
          <span>{progress}%</span>
        </CurrentProgress>
      </FullProgress>
    </StyledProgressBar>
  );
};

export default ProgressBar;
