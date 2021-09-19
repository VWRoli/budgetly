import styled from 'styled-components';

export const StyledProgressBar = styled.div`
  margin: 0.5rem;
`;

export const FullProgress = styled.div`
  background-color: var(--muted-clr);
  width: 100%;
  border-radius: var(--primary-radius);
`;

export const CurrentProgress = styled.div`
  background-color: var(--primary-clr);
  border-radius: var(--primary-radius);
  padding-left: 0.75rem;
  padding-top: 2px;
  padding-bottom: 2px;
  width: 75%;
`;
