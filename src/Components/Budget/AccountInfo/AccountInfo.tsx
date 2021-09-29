//Styles
import { AccountInfoWrapper, InfoText } from './AccountInfo.styles';

const AccountInfo: React.FC = (): JSX.Element => {
  return (
    <AccountInfoWrapper>
      <InfoText>AccountBalance: $2000</InfoText>
      <InfoText>Available to Budget: $2000</InfoText>
      <InfoText>Budgeted: $2000</InfoText>
    </AccountInfoWrapper>
  );
};

export default AccountInfo;
