type Props = {
  label: string | number;
};

const Chip: React.FC<Props> = ({ label }): JSX.Element => {
  return <span className="chip">{label}</span>;
};

export default Chip;
