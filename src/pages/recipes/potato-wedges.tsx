import RecipeCardDetails from '../../components/recipe-card/recipe-card-details.tsx';
import RecipeComment from '../../components/comment/recipe-comment.tsx';
import RecipeCommentSection from '../../components/comment/recipe-comment-section.tsx';
import RecipeWrapper from '../../components/recipe-wrapper/recipe-wrapper.tsx';

const PotatoWedges = () => {
  return (
    <RecipeWrapper>
      <h1>Whimsical Potato Wedges Recipe</h1>
      <RecipeCardDetails rating={4} time={50}></RecipeCardDetails>

      <h2>Ingredients:</h2>
      <ul>
        <li>4 large potatoes (because bigger is always better)</li>
        <li>3 tablespoons olive oil (liquid gold)</li>
        <li>2 teaspoons paprika (for a burst of color)</li>
        <li>1 teaspoon garlic powder (nature's breath mint)</li>
        <li>Salt and black pepper to taste (get salty! but not too salty)</li>
        <li>Fresh rosemary or thyme (optional, but oh-so-fancy)</li>
      </ul>
      <h2>Nutritional Value:</h2>
      <ul>
        <li>Calories: Enough to fuel a couch potato marathon</li>
        <li>Carbs: For that leg day energy you keep postponing</li>
        <li>Fats: Just enough to keep your taste buds dancing</li>
        <li>Herbal essence: Because you're worth it</li>
        <li>Laughter: A full serving with every wedge</li>
      </ul>
      <h2>Preparation:</h2>
      <ol>
        <li>
          <strong>Preheat the Oven:</strong>
          <br />
          Get your oven roaring at 220°C (425°F). Hotter than your last awkward
          cooking disaster!
        </li>
        <li>
          <strong>Cut Those Potatoes:</strong>
          <br />
          Wash the potatoes and cut each into 8 chunky wedges. Embrace the
          irregularity; your wedges are unique, just like you!
        </li>
        <li>
          <strong>Season to Perfection:</strong>
          <br />
          In a large bowl, coat the wedges with olive oil, paprika, garlic
          powder, salt, and pepper. Add rosemary or thyme if you're feeling
          herbaceous.
        </li>
        <li>
          <strong>Spread & Bake:</strong>
          <br />
          Spread wedges evenly on a baking sheet lined with parchment paper.
          Bake in your preheated oven for 35-40 minutes, turning halfway
          through. They should look like a golden symphony when done.
        </li>
        <li>
          <strong>Serve with Gusto:</strong>
          <br />
          Once out of the oven, let them cool slightly (emphasis on slightly).
          Serve with your favorite dip and enjoy the symphony of crunch and
          flavor.
        </li>
        <li>
          <strong>Enjoy Your Creation:</strong>
          <br />
          Share them, or don't. Remember, not all wedges have to make it to the
          table—quality control is a serious job!
        </li>
      </ol>
      <RecipeCommentSection>
        <RecipeComment
          username="WedgeWizard"
          date="2024-09-15"
          comment="These wedges are so whimsical, they should be in a fairytale."
          likes={61}
        ></RecipeComment>
        <RecipeComment
          username="CrispyCrown"
          date="2024-09-18"
          comment="Perfectly crispy and definitely full of whimsy."
          likes={52}
        ></RecipeComment>
        <RecipeComment
          username="PotatoPrincess"
          date="2024-09-20"
          comment="I felt like a potato queen while eating these."
          likes={44}
        ></RecipeComment>
        <RecipeComment
          username="FairyFry"
          date="2024-09-22"
          comment="I swear I heard a magical potato fairy when I tasted these."
          likes={33}
        ></RecipeComment>
        <RecipeComment
          username="Mashmallow"
          date="2024-09-25"
          comment="These wedges are like the unicorns of potato land!"
          gifUrl="https://giphy.com/embed/fckbO2dUKL3bmuYFoW"
          likes={58}
        ></RecipeComment>
      </RecipeCommentSection>
    </RecipeWrapper>
  );
};

export default PotatoWedges;
