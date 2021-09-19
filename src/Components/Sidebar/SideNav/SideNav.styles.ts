import styled from 'styled-components';

export const StyledSideNav = styled.ul`
  list-style-type: none;
  font-size: 1.5rem;
`;

export const ListItem = styled.li`
  margin: 0.75rem;
  width: 100%;
  display: flex;
  align-items: center;
  &:hover {
    color: var(--primary-clr);
    cursor: pointer;
  }
  &.active {
    color: var(--primary-clr);
    cursor: default;
  }
`;

export const NavLink = styled.a`
  font-weight: 400;
  font-size: 1.15rem;
  margin-left: 1rem;
  ${ListItem}:hover & {
    font-weight: 600;
  }
`;

export const Collapse = styled.div`
  padding-left: 1rem;
`;
