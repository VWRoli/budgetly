import LinkWrapper from './LinkComponent.styles';

type LinkProps = {
    to: string;
    label: string;
};

const LinkComponent: React.FC<LinkProps> = ({ to, label }): JSX.Element => <LinkWrapper to={to}>{label}</LinkWrapper>;

export default LinkComponent;
