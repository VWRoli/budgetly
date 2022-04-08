import { MdAdd } from 'react-icons/md';

const AddTransaction: React.FC = (): JSX.Element => {
  return (
    <button className="addtransaction-btn">
      <MdAdd />
    </button>
  );
};

export default AddTransaction;
