//Components
import ProgressBar from '../ProgressBar/ProgressBar';
import AddMoreIcon from '../../common/AddmoreIcon/AddMoreIcon';
//Styles
import { StyledGroup, GroupTitle } from './Group.styles';

const Group: React.FC = (): JSX.Element => {
  return (
    <StyledGroup>
      <header>
        <GroupTitle>
          Saving Goals <AddMoreIcon size={1.5} color="#017AFF" />
        </GroupTitle>
      </header>
      <div>
        <ProgressBar title="New Car" progress={75} />
        <ProgressBar title="Restoration" progress={75} />
        <ProgressBar title="Apartment" progress={75} />
        <ProgressBar title="Bitcoin" progress={75} />
      </div>
    </StyledGroup>
  );
};

export default Group;
