import { FaCommentDollar } from 'react-icons/fa';
import { GiPieChart } from 'react-icons/gi';
import { MdAccountBalance } from 'react-icons/md';
import { BiSubdirectoryRight } from 'react-icons/bi';
import { IconContext } from 'react-icons';
//Styles
import { StyledSideNav, ListItem, Collapse, NavLink } from './SideNav.styles';

const SideNav: React.FC = (): JSX.Element => {
  return (
    <IconContext.Provider
      value={{
        size: '1.5rem',
      }}
    >
      <StyledSideNav>
        <ListItem className="active">
          <FaCommentDollar />
          <NavLink to="/user">Budget</NavLink>
        </ListItem>
        <ListItem>
          <GiPieChart />
          <NavLink to="/user/reports">Reports</NavLink>
        </ListItem>
        <ListItem>
          <MdAccountBalance />
          <NavLink to="/user/accounts">Accounts</NavLink>
        </ListItem>
        <Collapse>
          <StyledSideNav>
            <ListItem>
              <BiSubdirectoryRight />
              {/*  <NavLink>OTP Bank</NavLink> */}
            </ListItem>
            <ListItem>
              <BiSubdirectoryRight />
              {/* <NavLink>Skrill</NavLink> */}
            </ListItem>
            <ListItem>
              <BiSubdirectoryRight />
              {/* <NavLink>Neteller</NavLink> */}
            </ListItem>
            <ListItem>
              <BiSubdirectoryRight />
              {/* <NavLink>Cash</NavLink> */}
            </ListItem>
          </StyledSideNav>
        </Collapse>
      </StyledSideNav>
    </IconContext.Provider>
  );
};

export default SideNav;
