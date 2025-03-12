import styled from 'styled-components';
import RecipeCard from '../components/recipe-card/recipe-card.tsx';
import CallToActionBanner from '../components/call-to-action-banner/call-to-action-banner.tsx';

const MainContent = styled.div`
  text-align: center;
`;

const RecipesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  margin: 20px 0;
`;

const Home = () => {
  return (
    <MainContent>
      <h1>Welcome to Potato Recipes Galore!</h1>
      <p>
        Your one-stop shop for all things potato. From fries to mashed, we have
        it all... and then some!
      </p>
      <h2>Featured Recipes</h2>
      <RecipesGrid>
        <RecipeCard
          title="French Fries"
          link="/recipes/french-fries"
          imageSrc="/assets/recipe-images/french-fries-616115_640.jpg"
          description="Crispy, golden, and simply irresistible – our homemade fries turn any meal into a highlight."
          time={60}
          rating={4}
          imageAlt={''}
        />
        <RecipeCard
          title="Potato Salad"
          link="/recipes/potato-salad"
          imageSrc="/assets/recipe-images/potato-salad-8710969_1280.jpg"
          description="This potato salad not only brings potatoes but also a smile to your guests' faces."
          time={45}
          rating={5}
          imageAlt={''}
        />
        <RecipeCard
          title="Boiled Potatoes"
          link="/recipes/boiled-potatoes"
          imageSrc="/assets/recipe-images/potatoes-5374064_1280.jpg"
          description="Sometimes the simplest dishes are the best, and our salted potatoes are proof of that."
          time={30}
          rating={3}
          imageAlt={''}
        />
      </RecipesGrid>

      <CallToActionBanner
        title="Ready to Get Cooking?"
        text="Unleash your inner potato wizard and check out our full collection of
          ridiculous (but delicious) recipes."
        buttonPrefix="Explore our recipes"
        buttonText="Click here"
        buttonLink="/recipes"
      />
    </MainContent>
  );
};

export default Home;
