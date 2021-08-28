import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkWrapper = styled(Link)`
  color: var(--primary-clr);
  margin: 1rem;
  text-decoration: none;
  &:hover {
    color: var(--hover-clr);
    text-decoration: underline;
  }
`;

export default LinkWrapper;
