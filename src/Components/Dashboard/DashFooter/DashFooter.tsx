// Styles
import LinkComponent from '../../common/Link/LinkComponent';
import Footer from './DashFooter.styles';

const DashFooter: React.FC = (): JSX.Element => (
  <Footer>
    <LinkComponent to="/about" label="About" />
    <LinkComponent to="/terms" label="Terms & Conditions" />
    <LinkComponent to="/privacy" label="Privacy" />
  </Footer>
);

export default DashFooter;
