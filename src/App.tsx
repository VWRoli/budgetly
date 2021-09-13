// Components
import Budget from './Components/Budget/Budget';
import Sidebar from './Components/Sidebar/Sidebar';
import Summary from './Components/Summary/Summary';
// Styles
import Wrapper from './App.styles';
import { GlobalStyle } from './globalStyles';

function App(): JSX.Element {
  return (
    <Wrapper>
      <GlobalStyle />
      <Sidebar />
      <Summary />
      <Budget />
    </Wrapper>
  );
}

export default App;
