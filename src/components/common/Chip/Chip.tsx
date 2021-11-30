type Props = {
  label: string | number;
  isAlternative?: boolean;
};

const Chip: React.FC<Props> = ({ label, isAlternative }): JSX.Element => {
  return (
    <span className={isAlternative ? 'chip alternative-chip' : 'chip'}>
      {label}
    </span>
  );
};

export default Chip;
