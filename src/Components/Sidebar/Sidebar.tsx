import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.jpg';
import { IoMdArrowDropdown } from 'react-icons/io';
//Styles
import {
  Avatar,
  Logo,
  StyledSidebar,
  Username,
  ProfileDropdown,
} from './Sidebar.styles';
import MenuNav from './SideNav/SideNav';
import UserReview from './UserReview/UserReview';

const Sidebar: React.FC = (): JSX.Element => {
  return (
    <StyledSidebar>
      <Logo src={logo} width="252px" alt="logo" />
      <Avatar src={avatar} alt="Photo by Juliana Stein from Pexels" />
      <ProfileDropdown>
        <Username>Username</Username>
        <IoMdArrowDropdown />
      </ProfileDropdown>
      <MenuNav />
      <UserReview />
    </StyledSidebar>
  );
};

export default Sidebar;
