import { BsFillSquareFill } from 'react-icons/bs';
// Styles
import Button from './AccountsButton.styles';

type Props = {
  label: string;
  summary: number;
};
const AccountsButton: React.FC<Props> = ({ label, summary }): JSX.Element => (
  <Button>
    <BsFillSquareFill />
    <span>{label}</span>
    <span>{summary}</span>
  </Button>
);

export default AccountsButton;
