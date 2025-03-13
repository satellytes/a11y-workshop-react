import RecipeCardDetails from '../../components/recipe-card/recipe-card-details.tsx';
import RecipeComment from '../../components/comment/recipe-comment.tsx';
import RecipeCommentSection from '../../components/comment/recipe-comment-section.tsx';
import RecipeWrapper from '../../components/recipe-wrapper/recipe-wrapper.tsx';

const FrenchFries = () => {
  return (
    <RecipeWrapper>
      <h1>Crispy Comedy Fries Recipe</h1>
      <RecipeCardDetails rating={4} time={60} />
      <h2>Ingredients:</h2>
      <ul>
        <li>4 large potatoes (think Titanic-sized)</li>
        <li>
          3 tablespoons olive oil (enough to make an Italian grandma proud)
        </li>
        <li>Salt (a pinch or a blizzard, up to you)</li>
        <li>Optional:</li>
        <ul>
          <li>Paprika powder (for that smoky allure)</li>
          <li>Garlic powder (because vampires are sooo 19th century)</li>
          <li>Parmesan cheese (grated unicorn dust)</li>
          <li>Fresh parsley (to pretend we care about the garnish)</li>
        </ul>
      </ul>
      <h2>Nutritional Value:</h2>
      <ul>
        <li>
          Calories: Enough to keep you happy without feeling like you're rolling
        </li>
        <li>Carbs: Perfect fuel to outdo any marathon</li>
        <li>Fats: Just the right amount to keep winter coming</li>
        <li>Protein: Not much, but who eats fries for protein anyway?</li>
        <li>Joy: Through the roof</li>
      </ul>
      <h2>Preparation:</h2>
      <ol>
        <li>
          <strong>Spud-tacular Start:</strong>
          <br />
          Peel those potatoes if you like, but keep the skins on if you want to
          channel your inner rustic chef. Slice them into sticks. Go for the
          gold: not too thick, not too thin. Think French sophistication meets
          German engineering.
        </li>
        <li>
          <strong>Soak It Up:</strong>
          <br />
          Toss those beautiful potato sticks in a bowl of cold water. Let them
          swim for 30 minutes or more. This bath removes excess starch and makes
          them extra crispy, like the personality of your favorite sarcastic
          friend.
        </li>
        <li>
          <strong>Dry with Style:</strong>
          <br />
          Drain the spuds and pat them dry with a kitchen towel. Picture it as a
          gentle spa treatment rather than a brutal interrogation.
        </li>
        <li>
          <strong>Oil & Season:</strong>
          <br />
          Preheat your oven to 220°C (425°F) or just aim for "really hot." In a
          large bowl, drizzle the potatoes with olive oil. Sprinkle with salt,
          paprika, and garlic powder if you're feeling adventurous. Remember,
          the secret to great fries is like a great joke: timing and delivery
          are everything!
        </li>
        <li>
          <strong>Oven Magic:</strong>
          <br />
          Lay the fries on a baking sheet lined with parchment paper. Don't
          crowd them; they need their space, like you during the last family
          reunion. Bake for 20 minutes, then flip the fries. Yes, you have to
          flip every single one, consider it a zen exercise. Bake for another
          15-20 minutes or until they reach the desired golden crispiness.
        </li>
        <li>
          <strong>Finish Line Flavor:</strong>
          <br />
          Once baked to perfection, toss the fries with a bit more salt (if
          needed) and a sprinkle of Parmesan cheese and parsley. Now they look
          fancy enough for Instagram.
        </li>
        <li>
          <strong>Serve and Enjoy:</strong> Serve hot and enjoy those crispy
          fries while they're still within their prime crunch window. Don't
          worry if you eat the whole batch yourself; some days, you just need
          all the laughs (and fries) you can get.
        </li>
      </ol>

      <RecipeCommentSection>
        <RecipeComment
          username="FriesLover99"
          date="2024-09-15"
          comment="I almost cried tears of joy. These fries were *that* crispy!"
          likes={78}
        ></RecipeComment>
        <RecipeComment
          username="SpudMuffin"
          date="2024-09-18"
          comment="Crispier than my sense of humor! 10/10 would fry again."
          likes={56}
        ></RecipeComment>
        <RecipeComment
          username="TaterTotBoss"
          date="2024-09-20"
          comment="So crispy, I thought they were chips for a second!"
          likes={42}
        ></RecipeComment>
        <RecipeComment
          username="FryQueen"
          date="2024-09-22"
          comment="I made these for my cat... and he didn’t complain, so they must be good!"
          gifUrl="https://giphy.com/embed/O51rxo4ununN6"
          likes={35}
        ></RecipeComment>
        <RecipeComment
          username="ChipOffTheOldBlock"
          date="2024-09-25"
          comment="I feel like I unlocked the secret to happiness with these fries."
          likes={67}
        ></RecipeComment>
      </RecipeCommentSection>
    </RecipeWrapper>
  );
};

export default FrenchFries;
