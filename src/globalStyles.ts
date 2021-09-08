import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 18px;
  --primary-clr: #57c9ee;
  --hover-clr: #EDA458;
  --primary-text: #222;
  --secondary-text: #444444;
  --light-clr: #ffffff;
  --success-clr: #4FF7C5;
  --info-clr: #236df6;
  --box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  --box-shadow-small: 6px 6px 16px 0 rgba(0, 0, 0, 0.25),
    -4px -4px 12px 0 rgba(255, 255, 255, 0.3);
  --primary-radius: 25px;
  --top-radius: 25px 25px 0 0;
  --bottom-radius: 0 0 25px 25px;
  --bg-gradient: linear-gradient(217deg, #D9C9C3, rgba(255, 0, 0, 0) 70.71%),
  linear-gradient(127deg, #E3D0CC, rgba(0, 255, 0, 0) 70.71%),
  linear-gradient(198deg, #CCCCCC, rgba(0, 0, 255, 0) 70.71%),
  linear-gradient(286deg, #E3CCD8, rgba(0, 0, 255, 0) 70.71%),
  linear-gradient(336deg, #D9C3D9, rgba(0, 0, 255, 0) 70.71%);
} 
`;

export const Container = styled.section`
  width: 80vw;
  height: 70vh;
  color: var(--primary-text);
  background-color: var(--primary-clr);
  border-radius: var(--primary-radius);
  box-shadow: var(--box-shadow);
  border: 1px solid #fff;
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
