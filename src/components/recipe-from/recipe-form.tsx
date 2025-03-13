import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';

import FormElement from './form-element.tsx';
import LoginModal from './login-modal.tsx';

const FormContainer = styled.div`
  padding: 20px;
  border-radius: var(--border-radius);
  background-color: #fff;
  box-shadow: var(--box-shadow-default);
`;

const StyledForm = styled.form`
  max-width: 700px;
`;

const TimeAndTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 8px;
`;

const TitleContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

const CookingTimeContainer = styled.div`
  width: 220px;
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: var(--green);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

interface FormErrors {
  title?: string;
  shortDescription?: string;
  cookingTime?: string;
  ingredients?: string;
  preparation?: string;
}

const RecipeForm: React.FC = () => {
  const [formValues, setFormValues] = useState({
    title: '',
    cookingTime: '',
    shortDescription: '',
    ingredients: '',
    nutritionValue: '',
    preparation: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;

    const fieldMap: { [key: string]: string } = {
      title: 'title',
      'cooking-time': 'cookingTime',
      'short-description': 'shortDescription',
      ingredients: 'ingredients',
      'nutrition-value': 'nutritionValue',
      preparation: 'preparation',
    };

    setFormValues({
      ...formValues,
      [fieldMap[id]]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors: FormErrors = {};

    if (!formValues.title.trim()) {
      newErrors.title = 'Title is required.';
      valid = false;
    }

    if (!formValues.shortDescription.trim()) {
      newErrors.shortDescription = 'Short description is required.';
      valid = false;
    }

    const cookingTime = parseFloat(formValues.cookingTime);
    if (
      !formValues.cookingTime.trim() ||
      isNaN(cookingTime) ||
      cookingTime <= 0
    ) {
      newErrors.cookingTime = 'Please provide a valid cooking time.';
      valid = false;
    }

    if (!formValues.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
      valid = false;
    }

    if (!formValues.preparation.trim()) {
      newErrors.preparation = 'Preparation steps are required.';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      setShowLoginModal(true);
    }
  };

  return (
    <>
      <FormContainer className="recipe-form-container">
        <StyledForm id="recipe-form" noValidate onSubmit={handleSubmit}>
          <TimeAndTitleContainer className="time-and-title-container">
            <TitleContainer className="title-container">
              <FormElement
                label="Title"
                inputId="title"
                type="text"
                required={true}
                value={formValues.title}
                onChange={handleChange}
                error={errors.title}
              />
            </TitleContainer>
            <CookingTimeContainer className="cooking-time-container">
              <FormElement
                label="Cooking Time"
                inputId="cooking-time"
                type="number"
                required={true}
                value={formValues.cookingTime}
                onChange={handleChange}
                error={errors.cookingTime}
              />
            </CookingTimeContainer>
          </TimeAndTitleContainer>

          <FormElement
            label="Short Description"
            inputId="short-description"
            isTextarea={true}
            required={true}
            value={formValues.shortDescription}
            onChange={handleChange}
            error={errors.shortDescription}
          />

          <FormElement
            label="Ingredients"
            inputId="ingredients"
            isTextarea={true}
            required={true}
            value={formValues.ingredients}
            onChange={handleChange}
            error={errors.ingredients}
          />

          <FormElement
            label="Nutritional Value (Calories, Carbs, Fats, Protein)"
            inputId="nutrition-value"
            isTextarea={true}
            value={formValues.nutritionValue}
            onChange={handleChange}
          />

          <FormElement
            label="Preparation"
            inputId="preparation"
            isTextarea={true}
            required={true}
            value={formValues.preparation}
            onChange={handleChange}
            error={errors.preparation}
          />

          <SubmitButton className="submit-button" type="submit">
            Submit Recipe
          </SubmitButton>
        </StyledForm>
      </FormContainer>

      {showLoginModal && (
        <LoginModal
          isVisible={showLoginModal}
          onClose={() => setShowLoginModal(false)}
        />
      )}
    </>
  );
};

export default RecipeForm;
