import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const DashContainer = styled(Container)``;
export const MainDash = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2rem;
  padding: 2rem;
`;
