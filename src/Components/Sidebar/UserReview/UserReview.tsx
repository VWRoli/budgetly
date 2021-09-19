import { StyledUserReview, UserQuote } from './UserReview.styles';

const UserReview: React.FC = (): JSX.Element => {
  return (
    <StyledUserReview>
      <UserQuote>
        <p>
          &quot;A well-known quote, contained in a blockquote element.&quot;
        </p>
      </UserQuote>
    </StyledUserReview>
  );
};

export default UserReview;
