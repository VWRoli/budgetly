import { Wrapper } from './Header.styles';

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }): JSX.Element => {
  return (
    <Wrapper>
      <h2>{title}</h2>
    </Wrapper>
  );
};

export default Header;
