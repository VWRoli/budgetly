import styled from 'styled-components';

const Button = styled.button`
  font-size: 1.05rem;
  background-color: var(--light-clr);
  min-width: 10rem;
  display: flex;
  justify-content: space-around;
  border: none;
  border-radius: 10px;
  padding: 0.35rem 0.5rem;
  box-shadow: var(--box-shadow-small), inset 0 0 10px rgba(0, 0, 0, 0.35);
`;

export default Button;
