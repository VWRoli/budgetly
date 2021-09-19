import { IoMdAddCircle } from 'react-icons/io';
//Styles
import { StyledAddNewGroup } from './AddNewGroup.styles';

const AddNewGroup: React.FC = (): JSX.Element => {
  return (
    <StyledAddNewGroup>
      <IoMdAddCircle />
    </StyledAddNewGroup>
  );
};

export default AddNewGroup;
