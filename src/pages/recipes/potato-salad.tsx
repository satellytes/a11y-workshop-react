import RecipeCommentSection from '../../components/comment/recipe-comment-section.tsx';
import RecipeComment from '../../components/comment/recipe-comment.tsx';
import RecipeCardDetails from '../../components/recipe-card/recipe-card-details.tsx';

const PotatoSalad = () => {
  return (
    <>
      <h1>Quirky Potato Salad Recipe</h1>
      <RecipeCardDetails rating={4} time={45} />

      <h2>Ingredients:</h2>
      <ul>
        <li>1 kg potatoes (choose the quirky ones)</li>
        <li>100 g mayonnaise (for creamy dreams)</li>
        <li>2 tablespoons mustard (the spicy kind, like your wit)</li>
        <li>1 red onion, finely chopped (tears of joy)</li>
        <li>3 pickles, diced (add some crunch)</li>
        <li>Salt and pepper to taste (season with sass)</li>
        <li>Fresh chives, chopped (for a sprinkle of green confidence)</li>
      </ul>
      <h2>Nutritional Value:</h2>
      <ul>
        <li>Calories: Enough to make you dance</li>
        <li>Carbs: Plenty to fuel your thoughts</li>
        <li>Fats: Just creamy enough to slide through your day</li>
        <li>Protein: A touch, but this salad is here for fun, not muscles</li>
        <li>Humor: Generously infused</li>
      </ul>
      <h2>Preparation:</h2>
      <ol>
        <li>
          <strong>Boil & Chill:</strong>
          <br />
          Start by boiling the potatoes until they're tender but still firm
          (like a good handshake). Let them chill out until cool enough to
          handle.
        </li>
        <li>
          <strong>Chop Chop:</strong>
          <br />
          Cut potatoes into bite-sized pieces. Remember, life is too short for
          identical cubes.
        </li>
        <li>
          <strong>Mingle the Flavors:</strong>
          <br />
          In a big bowl, introduce your potatoes to mayonnaise, mustard, red
          onion, and pickles. Let them mingle—think of it as a networking event
          for your taste buds.
        </li>
        <li>
          <strong>Season with Flair:</strong>
          <br />
          Add salt and pepper. Taste and adjust the seasoning—channel your inner
          chef with a flourish of the hand.
        </li>
        <li>
          <strong>Chill Again:</strong>
          <br />
          Let your salad sit in the fridge for at least an hour. It's like a
          beauty nap before the big debut.
        </li>
        <li>
          <strong>Garnish & Serve:</strong>
          <br />
          Sprinkle with fresh chives before serving. Watch as it transforms into
          the star of your meal.
        </li>
        <li>
          <strong>Enjoy:</strong>
          <br />
          Serve with a side of laughter and enjoy. Remember, sharing is caring,
          but you might want to keep this quirky delight all to yourself.
        </li>
      </ol>

      <RecipeCommentSection>
        <RecipeComment
          username="SaladSamurai"
          date="2024-10-02"
          comment="This potato salad is quirkier than my Aunt Joan’s dance moves!"
          gifUrl="https://giphy.com/embed/14qb1Uhf40ndw4"
          likes={34}
        ></RecipeComment>
        <RecipeComment
          username="MashMaster"
          date="2024-10-04"
          comment="I brought this to a party and left with zero leftovers... coincidence? I think not."
          likes={50}
        ></RecipeComment>
        <RecipeComment
          username="TaterTotTango"
          date="2024-10-06"
          comment="A potato salad so quirky, even the potatoes were surprised!"
          likes={45}
        ></RecipeComment>
        <RecipeComment
          username="SpuddyBuddy"
          date="2024-10-07"
          comment="The secret ingredient must be magic because this is too good!"
          likes={38}
        ></RecipeComment>
        <RecipeComment
          username="DancingPotato"
          date="2024-10-08"
          comment="I tried to dance like this salad. Spoiler: It didn't go well."
          likes={27}
        ></RecipeComment>
      </RecipeCommentSection>
    </>
  );
};

export default PotatoSalad;
