//Styles
import LinkComponent from '../../utils/Link/LinkComponent';
import { Footer } from './DashFooter.styles';

const DashFooter = () => {
  return (
    <Footer>
      <LinkComponent to="/about" label="About" />
      <LinkComponent to="/terms" label="Terms & Conditions" />
      <LinkComponent to="/privacy" label="Privacy" />
    </Footer>
  );
};

export default DashFooter;
