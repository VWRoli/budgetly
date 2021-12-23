import { BiMenuAltLeft } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<Props> = ({ setIsOpen }): JSX.Element => {
  return (
    <header>
      <BiMenuAltLeft onClick={() => setIsOpen(true)} />
      <h4>Dashboard</h4>
      <IoMdNotificationsOutline />
    </header>
  );
};

export default Header;
