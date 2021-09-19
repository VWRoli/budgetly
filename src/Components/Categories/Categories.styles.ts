import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const StyledCategories = styled(Container)`
  grid-area: 4/ 4 /13 / 13;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
