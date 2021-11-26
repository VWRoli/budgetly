import { BiMenuAltLeft } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';

const DashHeader: React.FC = (): JSX.Element => {
  return (
    <header className="dashheader">
      <BiMenuAltLeft />
      Dashboard
      <IoMdNotificationsOutline />
    </header>
  );
};

export default DashHeader;
