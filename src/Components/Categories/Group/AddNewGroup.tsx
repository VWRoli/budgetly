//Styles
import { StyledAddNewGroup } from './AddNewGroup.styles';
import AddMoreIcon from '../../common/AddmoreIcon/AddMoreIcon';

const AddNewGroup: React.FC = (): JSX.Element => {
  return (
    <StyledAddNewGroup>
      <AddMoreIcon size={4.5} color="#999" />
    </StyledAddNewGroup>
  );
};

export default AddNewGroup;
