import { IoMdAddCircle } from 'react-icons/io';
import { IconContext } from 'react-icons';

type Props = {
  size: number;
  color: string;
};

const AddMoreIcon: React.FC<Props> = ({ size, color }): JSX.Element => {
  return (
    <IconContext.Provider
      value={{
        size: `${size}rem`,
        color: `${color}`,
      }}
    >
      <IoMdAddCircle />
    </IconContext.Provider>
  );
};

export default AddMoreIcon;
