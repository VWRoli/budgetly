//Components
import Group from './Group/Group';
import AddNewGroup from './Group/AddNewGroup';
//Styles
import { StyledCategories } from './Categories.styles';

const Categories: React.FC = (): JSX.Element => {
  return (
    <StyledCategories>
      <Group />
      <Group />
      <Group />
      <AddNewGroup />
    </StyledCategories>
  );
};

export default Categories;
