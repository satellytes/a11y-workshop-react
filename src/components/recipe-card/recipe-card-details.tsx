import clock from '../../../assets/icons/clock.svg';
import styled from 'styled-components';
import starFilled from '../../../assets/icons/star-filled.svg';
import starTransparent from '../../../assets/icons/star-transparent.svg';

const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const Clock = styled.img`
  height: 14px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Star = styled.img`
  height: 14px;
`;

const RecipeCardDetails = ({
  rating,
  time,
}: {
  rating: number;
  time: number;
}) => {
  const renderRating = () => {
    if (rating < 0 || rating > 5) return null;

    return (
      <RatingContainer>
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            src={index < rating ? starFilled : starTransparent}
            alt={index < rating ? 'Filled star' : 'Empty star'}
          />
        ))}
      </RatingContainer>
    );
  };

  return (
    <Details>
      {renderRating()}
      <TimeContainer>
        <Clock src={clock} />
        <span>{time}min</span>
      </TimeContainer>
    </Details>
  );
};

export default RecipeCardDetails;
