import { BiMenuAltLeft } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';

const DashHeader: React.FC = (): JSX.Element => {
  return (
    <header className="dashheader">
      <BiMenuAltLeft />
      <h4>Dashboard</h4>
      <IoMdNotificationsOutline />
    </header>
  );
};

export default DashHeader;
