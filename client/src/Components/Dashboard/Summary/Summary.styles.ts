import styled from 'styled-components';
import { Container } from '../../../globalStyles';

export const SummaryContainer = styled(Container)`
  width: 80%;
  height: 120px;
  margin: auto;
  grid-column: 1 / 13;
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

export const AccountInfo = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Accounts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-content: center;
  grid-gap: 1rem;
  flex: 8;
`;
