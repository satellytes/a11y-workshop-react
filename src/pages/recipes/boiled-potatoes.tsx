import RecipeCardDetails from '../../components/recipe-card/recipe-card-details.tsx';
import RecipeComment from '../../components/comment/recipe-comment.tsx';
import RecipeCommentSection from '../../components/comment/recipe-comment-section.tsx';

const BoiledPotatoes = () => {
  return (
    <>
      <h1>Silly Salted Potatoes Recipe</h1>
      <RecipeCardDetails rating={3} time={30} />
      <h2>Ingredients:</h2>
      <ul>
        <li>1 kg potatoes (the more, the merrier)</li>
        <li>Water (enough to give those potatoes a nice swim)</li>
        <li>2 tablespoons salt (for that salty sea experience)</li>
        <li>Fresh parsley, chopped (to add a little green bling)</li>
      </ul>
      <h2>Nutritional Value:</h2>
      <ul>
        <li>Calories: A reasonable amount to keep you comfortably happy</li>
        <li>Carbs: Enough to keep your energy levels high for dad jokes</li>
        <li>Fats: Virtually none, keeping it pure and simple</li>
        <li>Sodium: Just enough to pair well with your sense of humor</li>
        <li>Garnish Glamor: Sprinkles of delight</li>
      </ul>
      <h2>Preparation:</h2>
      <ol>
        <li>
          <strong>Scrub & Peel (or Not):</strong>
          <br />
          Wash your potatoes thoroughly. Peel them if you prefer a smoother
          finish, or leave the skins on for rustic charm.
        </li>
        <li>
          <strong>Boil with Zeal:</strong>
          <br />
          Place potatoes in a pot and cover with cold water. Add salt as if
          seasoning a small ocean.
        </li>
        <li>
          <strong>Cook to Perfection:</strong>
          <br />
          Bring to a boil, then reduce heat and let simmer for about 15-20
          minutes, or until fork-tender. Think of it as a spa day for potatoes.
        </li>
        <li>
          <strong>Drain & Dress Up:</strong>
          <br />
          Drain the water and let potatoes steam dry for a minute. Think of it
          as letting them catch their breath.
        </li>
        <li>
          <strong>Garnish with Glee:</strong>
          <br />
          Sprinkle with fresh parsley for that splash of color and a hint of
          sophistication.
        </li>
        <li>
          <strong>Serve & Savor:</strong>
          <br />
          Serve hot. Pair with a dab of butter or your favorite sauce if you're
          feeling indulgent. Enjoy the simple, timeless joy that is the humble
          salted potato.
        </li>
      </ol>

      <RecipeCommentSection>
        <RecipeComment
          username="SaltBaeWannabe"
          date="2024-09-20"
          comment="This recipe is sillier than the amount of salt I poured on it. Oops!"
          likes={3}
        ></RecipeComment>
        <RecipeComment
          username="SaltySpud"
          date="2024-09-22"
          comment="If you like salty and silly, these are the potatoes for you!"
          likes={8}
        ></RecipeComment>
        <RecipeComment
          username="MrPotato"
          date="2024-09-24"
          comment="I laughed so hard making these that I spilled salt everywhere."
          gifUrl="https://giphy.com/embed/PjpEeI11T7qSI"
          likes={9}
        ></RecipeComment>
        <RecipeComment
          username="SaltShakeMaster"
          date="2024-09-26"
          comment="I tried to out-salt these potatoes, but they won."
          likes={4}
        ></RecipeComment>
        <RecipeComment
          username="TaterTales"
          date="2024-09-29"
          comment="These potatoes are so silly, they could be the next stand-up comedians."
          likes={39}
        ></RecipeComment>
      </RecipeCommentSection>
    </>
  );
};

export default BoiledPotatoes;
