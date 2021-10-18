import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 16px;
  --primary-clr: #017AFF;
  --secondary-clr: #57C9EE;
  --white-clr: #fff;
  --hover-clr: #FF9601;
  --primary-text: #222;
  --secondary-text: #444444;
  --muted-clr: #999;
  --success-clr: #0BC677;
  --error-clr: #F57282;
  /* --light-clr: #ffffff;
  --info-clr: #236df6; */
  --primary-radius: 10px;
  --top-radius: 10px 10px 0 0;
  --bottom-radius: 0 0 10px 10px;
} 
`;

export const Container = styled.section`
  color: var(--primary-text);
  background-color: var(--white-clr);
  border-radius: var(--primary-radius);
  border: 1px solid #ddd;
  margin: 1rem;
  padding: 1rem;
`;

export const H1 = styled.h1`
  font-weight: 400;
  font-size: 28px;
`;
export const H2 = styled.h2`
  font-weight: 400;
  font-size: 24px;
`;

export const H3 = styled.h3`
  font-weight: 400;
  font-size: 20px;
`;
