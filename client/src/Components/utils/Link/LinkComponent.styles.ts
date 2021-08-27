import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkWrapper = styled(Link)`
    color: #57c9ee;
    margin: 1rem;
    text-decoration: none;
    &:hover {
        color: #f57282;
        text-decoration: underline;
    }
`;

export default LinkWrapper;
