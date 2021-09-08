import styled from 'styled-components';
import { Container } from '../../../globalStyles';

export const BudgetContainer = styled(Container)`
  width: auto;
  height: auto;
  grid-column: 1 / 5;
`;

export const BudgetHeader = styled.header`
  background-color: var(--light-clr);
  padding: 0.5rem;
  border-radius: var(--top-radius);
  margin-bottom: 1rem;
  text-align: center;
`;
