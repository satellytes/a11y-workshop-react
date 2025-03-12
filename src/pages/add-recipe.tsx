import RecipeForm from '../components/recipe-from/recipe-form.tsx';
import styled from 'styled-components';

const AddRecipeDescription = styled.div`
  padding: 0 20px;
`;

const AddRecipe = () => {
  return (
    <>
      <AddRecipeDescription>
        <h1>Add Your Own Potato Recipe</h1>
        <p>Share your favorite potato recipe with the world!</p>
      </AddRecipeDescription>

      <RecipeForm />
    </>
  );
};

export default AddRecipe;
