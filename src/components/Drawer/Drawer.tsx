import { FaTimes } from 'react-icons/fa';
import { MdDashboard, MdAccountBalance } from 'react-icons/md';
import { HiDocumentReport } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Drawer: React.FC<Props> = ({ isOpen, setIsOpen }): JSX.Element => {
  return (
    <>
      <div
        className={isOpen ? 'overlay overlay-open' : 'overlay'}
        onClick={() => setIsOpen(false)}
      ></div>
      <aside className={isOpen ? 'open' : ''}>
        <FaTimes id="fa-times-icon" onClick={() => setIsOpen(false)} />
        <ul className="main-navbar">
          <li className="active">
            <MdDashboard /> Budget
          </li>
          <li>
            <HiDocumentReport />
            Reports
          </li>
          <li>
            <MdAccountBalance /> Accounts
          </li>
        </ul>
        <ul className="secondary-navbar">
          <li>
            <FiChevronDown />
            Accounts
          </li>
          <li>
            <MdAccountBalance className="placeholder-icon" />
            Checking
          </li>
          <li>
            <MdAccountBalance className="placeholder-icon" />
            Skrill
          </li>
          <li>
            <MdAccountBalance className="placeholder-icon" />
            Neteller
          </li>
        </ul>
        <button>Add Another Account</button>
        <div className="logo-wrapper">
          <img src={Logo} alt="Logo" />
        </div>
      </aside>
    </>
  );
};

export default Drawer;
