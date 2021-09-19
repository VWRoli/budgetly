import { FaCommentDollar } from 'react-icons/fa';
import { GiPieChart } from 'react-icons/gi';
import { MdAccountBalance } from 'react-icons/md';
import { BiSubdirectoryRight } from 'react-icons/bi';
//Styles
import { StyledSideNav, ListItem, Collapse, NavLink } from './SideNav.styles';

const SideNav: React.FC = (): JSX.Element => {
  return (
    <StyledSideNav>
      <ListItem className="active">
        <FaCommentDollar />
        <NavLink>Budget</NavLink>
      </ListItem>
      <ListItem>
        <GiPieChart />
        <NavLink>Reports</NavLink>
      </ListItem>
      <ListItem>
        <MdAccountBalance />
        <NavLink>Accounts</NavLink>
      </ListItem>
      <Collapse>
        <StyledSideNav>
          <ListItem>
            <BiSubdirectoryRight />
            <NavLink>OTP Bank</NavLink>
          </ListItem>
          <ListItem>
            <BiSubdirectoryRight />
            <NavLink>Skrill</NavLink>
          </ListItem>
          <ListItem>
            <BiSubdirectoryRight />
            <NavLink>Neteller</NavLink>
          </ListItem>
          <ListItem>
            <BiSubdirectoryRight />
            <NavLink>Cash</NavLink>
          </ListItem>
        </StyledSideNav>
      </Collapse>
    </StyledSideNav>
  );
};

export default SideNav;
