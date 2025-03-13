import styled from 'styled-components';
import RecipeCard from '../components/recipe-card/recipe-card.tsx';

const MainContent = styled.div`
  text-align: center;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const Recipes = () => {
  const recipeData = [
    {
      title: 'French Fries',
      link: '/recipes/french-fries',
      image: '/assets/recipe-images/french-fries-616115_640.jpg',
      rating: 4,
      time: 60,
      description:
        'Crispy, golden, and simply irresistible – our homemade fries turn any meal into a highlight.',
    },
    {
      title: 'Potato Salad',
      link: '/recipes/potato-salad',
      image: '/assets/recipe-images/potato-salad-8710969_1280.jpg',
      rating: 0,
      time: 45,
      description:
        "This potato salad not only brings potatoes but also a smile to your guests' faces.",
    },
    {
      title: 'Boiled Potatoes',
      link: '/recipes/boiled-potatoes',
      image: '/assets/recipe-images/potatoes-5374064_1280.jpg',
      rating: 3,
      time: 30,
      description:
        'Sometimes the simplest dishes are the best, and our salted potatoes are proof of that.',
    },
    {
      title: 'Potato Chips',
      link: '/recipes/potato-chips',
      image: '/assets/recipe-images/crisps-448746_1280.jpg',
      rating: 3,
      time: 60,
      description:
        'Our homemade potato chips are the ultimate crispy snack for those who love a good crunch.',
    },
    {
      title: 'Potato Wedges',
      link: '/recipes/potato-wedges',
      image: '/assets/recipe-images/potato-wedges-6323211_1280.jpg',
      rating: 4,
      time: 50,
      description:
        'These golden-brown potato wedges are crispy on the outside and delightfully soft on the inside.',
    },
  ];

  return (
    <MainContent>
      <h1>Recipe Overview</h1>
      <p>
        Welcome to our Recipe Overview page, where culinary adventures and a
        sprinkle of humor go hand in hand!
      </p>
      <h2>Potato Pleasures: Discover Our Range of Recipes</h2>
      <Grid>
        {recipeData.map((recipe) => (
          <RecipeCard
            key={recipe.title}
            link={recipe.link}
            title={recipe.title}
            description={recipe.description}
            imageSrc={recipe.image}
            imageAlt={''}
            rating={recipe.rating}
            time={recipe.time}
          />
        ))}
      </Grid>
    </MainContent>
  );
};

export default Recipes;
