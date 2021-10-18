import styled from 'styled-components';

export const TransactionWrapper = styled.ul`
  //todo Should use Container
  color: var(--primary-text);
  background-color: var(--white-clr);
  border-radius: var(--primary-radius);
  border: 1px solid #ddd;
  margin: 0.5rem;
  padding: 0.5rem;
  display: flex;
  width: 100%;
  justify-content: space-around;
  list-style-type: none;
`;
export const Date = styled.li`
  border: 1px solid #dfe2e9;
  border-radius: 8px;
  padding: 0.1rem 0.5rem;
`;
export const Payee = styled.li`
  padding: 0.1rem 0.5rem;
  border-bottom: 1px solid #dfe2e9;
`;
export const Category = styled.li`
  padding: 0.1rem 0.5rem;
  border: 1px solid #7fc008;
  border-radius: 8px;
`;
export const Inflow = styled.li`
  padding: 0.1rem 0.5rem;
  color: var(--success-clr);
  font-weight: 600;
  border-bottom: 1px solid #dfe2e9;
`;
export const Outflow = styled.li`
  padding: 0.1rem 0.5rem;
  border-bottom: 1px solid #dfe2e9;
  color: var(--error-clr);
  font-weight: 600;
`;
