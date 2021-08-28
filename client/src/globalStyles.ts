import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  --primary-clr: #57c9ee;
  --hover-clr: #f57282;
  --primary-text: #222;
  --secondary-text: #444444;
  --light-clr: #ffffff;
  --box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
} 
`;

export default GlobalStyle;
