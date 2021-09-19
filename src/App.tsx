// Components
import Budget from './Components/Budget/Budget';
import Sidebar from './Components/Sidebar/Sidebar';
import Categories from './Components/Categories/Categories';
// Styles
import Wrapper from './App.styles';
import { GlobalStyle } from './globalStyles';

function App(): JSX.Element {
  return (
    <>
      <Wrapper>
        <GlobalStyle />
        <Sidebar />
        <Categories />
        <Budget />
      </Wrapper>
    </>
  );
}

export default App;
