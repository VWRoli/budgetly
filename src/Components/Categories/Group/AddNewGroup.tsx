import { IoMdAddCircle } from 'react-icons/io';
import { IconContext } from 'react-icons';
//Styles
import { StyledAddNewGroup } from './AddNewGroup.styles';

const AddNewGroup: React.FC = (): JSX.Element => {
  return (
    <IconContext.Provider
      value={{
        size: '4.5rem',
        color: '#999',
      }}
    >
      <StyledAddNewGroup>
        <IoMdAddCircle />
      </StyledAddNewGroup>
    </IconContext.Provider>
  );
};

export default AddNewGroup;
