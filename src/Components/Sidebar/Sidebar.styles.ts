import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const StyledSidebar = styled(Container)`
  grid-area: 1 / 1 / 13 / 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Logo = styled.img``;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 128px;
  height: 128px;
  margin: 0.5rem 0;
`;

export const ProfileDropdown = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

export const Username = styled.h2`
  font-size: 1.15rem;
  font-weight: 600;
  margin-right: 1rem;
`;
