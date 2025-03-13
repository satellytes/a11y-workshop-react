import RecipeCardDetails from '../../components/recipe-card/recipe-card-details.tsx';
import RecipeComment from '../../components/comment/recipe-comment.tsx';
import RecipeCommentSection from '../../components/comment/recipe-comment-section.tsx';
import RecipeWrapper from '../../components/recipe-wrapper/recipe-wrapper.tsx';

const PotatoChips = () => {
  return (
    <RecipeWrapper>
      <h1>Wacky Potato Chips Recipe</h1>
      <RecipeCardDetails rating={3} time={60} />
      <h2>Ingredients:</h2>
      <ul>
        <li>4 large potatoes (each with a chip on its shoulder)</li>
        <li>Vegetable oil for frying (because potatoes love a hot bath)</li>
        <li>Salt (or however salty you're feeling today)</li>
        <li>Optional seasonings:</li>
        <ul>
          <li>Paprika (for a smoky twist)</li>
          <li>Garlic powder (ward off boring snacks)</li>
          <li>Onion powder (for extra zing)</li>
          <li>Chili powder (for the daring chip enthusiast)</li>
        </ul>
      </ul>
      <h2>Nutritional Value:</h2>
      <ul>
        <li>Calories: Crunchy yet comforting</li>
        <li>Carbs: Enough to keep your energy as high as your spirits</li>
        <li>Fats: Just crispy enough to keep things interesting</li>
        <li>Fiber: A little, but remember, these are chips, not kale</li>
        <li>Hilarity: Served in generous portions</li>
      </ul>
      <h2>Preparation:</h2>
      <ol>
        <li>
          <strong>Peel & Slice with Precision:</strong>
          <br />
          Give the potatoes a good scrub if you're leaving the skins on, or peel
          them if they prefer an au naturel approach. Slice them as thinly as
          possible—think potato paper.
        </li>
        <li>
          <strong>Soak & Dry:</strong>
          <br />
          Soak the slices in cold water for 30 minutes to remove excess starch.
          Drain and pat dry with a towel—patience is a virtue for crispy chips!
        </li>
        <li>
          <strong>Heat & Fry:</strong>
          <br />
          Heat vegetable oil in a deep fryer or a heavy pan to 180°C (350°F).
          Carefully add potato slices in batches, frying until golden brown.
          It's like a mini-vacation, only hotter!
        </li>
        <li>
          <strong>Drain & Season:</strong>
          <br />
          Use a slotted spoon to transfer chips to paper towels to drain. Season
          immediately with salt and any daring spices you've chosen. The chips
          like to soak it all in while they're still warm!
        </li>
        <li>
          <strong>Share or Not:</strong>
          <br />
          Allow to cool slightly before diving in. Serve in a bowl big enough to
          share, but small enough to keep it all for yourself if you so choose.
          Enjoy the crunch and the smiles that come with it!
        </li>
      </ol>

      <RecipeCommentSection>
        <RecipeComment
          username="ChipChomper"
          date="2024-10-01"
          comment="Wacky? These chips are straight-up bonkers!"
          likes={47}
        ></RecipeComment>
        <RecipeComment
          username="CrunchTime"
          date="2024-10-03"
          comment="So crunchy, I’m convinced they could break glass."
          gifUrl="https://giphy.com/embed/zFlVvkBN0DDz2"
          likes={60}
        ></RecipeComment>
        <RecipeComment
          username="SpudCrush"
          date="2024-10-05"
          comment="Wackiest thing I’ve eaten all week, and I love it!"
          likes={53}
        ></RecipeComment>
        <RecipeComment
          username="ChipChampion"
          date="2024-10-06"
          comment="I didn’t know potatoes could be this wacky until today."
          likes={31}
        ></RecipeComment>
        <RecipeComment
          username="SnackAttack"
          date="2024-10-07"
          comment="These chips are crazier than my snack drawer... and that's saying something."
          likes={46}
        ></RecipeComment>
      </RecipeCommentSection>
    </RecipeWrapper>
  );
};

export default PotatoChips;
