import styled from 'styled-components';
import { Link } from 'react-router';
import RecipeCardDetails from './recipe-card-details.tsx';

interface RecipeCardProps {
  link: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  rating: number;
  time: number;
}

const Card = styled.div`
  background: white;
  border-radius: var(--border-radius);
  cursor: pointer;
  padding: 8px;
  box-shadow: var(--box-shadow-default);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const Title = styled.h3`
  margin: 8px 0;
`;

const Description = styled.p`
  margin: 8px 0;
`;

const RecipeCard: React.FC<RecipeCardProps> = ({
  link,
  title,
  description,
  imageSrc,
  imageAlt,
  rating,
  time,
}) => {
  return (
    <Link to={link}>
      <Card>
        <RecipeImage src={imageSrc} alt={imageAlt} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <RecipeCardDetails rating={rating} time={time} />
      </Card>
    </Link>
  );
};

export default RecipeCard;
