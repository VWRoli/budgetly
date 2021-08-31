import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--light-clr);
  border-radius: var(--top-radius);
`;

export const Navbar = styled.ul`
  list-style-type: none;
  display: flex;
  padding-left: 1.25rem;
`;

export const NavItem = styled.li`
  list-style-type: none;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: var(--hover-clr);
    color: var(--light-clr);
    cursor: pointer;
  }
`;
