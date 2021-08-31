// Components
import AccountsButton from './AccountsButton/AccountsButton';
import Chart from './Chart';
// Styles
import { H1, H2 } from '../../../globalStyles';
import { AccountInfo, Accounts, SummaryContainer } from './Summary.styles';

const Summary: React.FC = (): JSX.Element => (
  <SummaryContainer>
    <AccountInfo>
      <H2>Account Balance:</H2>
      <H1>500 000 Ft</H1>
    </AccountInfo>
    <Chart />
    <Accounts>
      <AccountsButton label="OTP Bank" summary={250000} />
      <AccountsButton label="Skrill" summary={50000} />
      <AccountsButton label="Cash" summary={55000} />
      <AccountsButton label="Revolut" summary={100000} />
    </Accounts>
  </SummaryContainer>
);

export default Summary;
