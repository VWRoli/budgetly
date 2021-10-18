import { FiMoreHorizontal } from 'react-icons/fi';
//Styles
import {
  Category,
  Date,
  Inflow,
  Outflow,
  Payee,
  TransactionWrapper,
} from './Transaction.styles';

const Transaction = () => {
  return (
    <TransactionWrapper>
      <Date>2021. 10. 17.</Date>
      <Payee>Amazon</Payee>
      <Category>Books</Category>
      <Inflow>500$</Inflow>
      <Outflow>500$</Outflow>
      <FiMoreHorizontal />
    </TransactionWrapper>
  );
};

export default Transaction;
