import { AccountsWrapper } from './Accounts.styles';
import Transaction from './Transaction/Transaction';

const Accounts: React.FC = (): JSX.Element => {
  return (
    <AccountsWrapper>
      <p>2021. October 05</p>
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
    </AccountsWrapper>
  );
};

export default Accounts;
