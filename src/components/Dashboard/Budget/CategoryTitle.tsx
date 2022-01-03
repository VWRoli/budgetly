type Props = {
  title: string;
};

const CategoryTitle: React.FC<Props> = ({ title }): JSX.Element => {
  return (
    <div className="category-title">
      <h4>{title}</h4>
      <p>Available to spend</p>
    </div>
  );
};

export default CategoryTitle;
