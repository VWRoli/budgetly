import { Navbar, NavItem, Wrapper } from './DashNav.styles';

const DashNav: React.FC = (): JSX.Element => (
  <Wrapper>
    <Navbar>
      <NavItem>Profile</NavItem>
      <NavItem>Accounts</NavItem>
      <NavItem>Reports</NavItem>
    </Navbar>
  </Wrapper>
);

export default DashNav;
