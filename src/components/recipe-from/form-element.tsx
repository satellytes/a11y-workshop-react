import React from 'react';
import styled from 'styled-components';

interface FormElementProps {
  label: string;
  inputId: string;
  type?: string;
  isTextarea?: boolean;
  required?: boolean;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  error?: string;
}

const FormFieldContainer = styled.div`
  margin-bottom: 16px;
`;

const StyledInput = styled.input`
  width: calc(100% - 18px);
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledTextarea = styled.textarea`
  width: calc(100% - 18px);
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
  height: 150px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const RequiredIndicator = styled.span`
  font-weight: normal;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.9em;
  margin-top: 2px;
`;

const FormElement: React.FC<FormElementProps> = ({
  label,
  inputId,
  type = 'text',
  isTextarea = false,
  required = false,
  value,
  onChange,
  error,
}) => {
  return (
    <FormFieldContainer className="form-field-container">
      <StyledLabel>
        {label}
        {required && (
          <RequiredIndicator className="required-indicator">
            {' '}
            *
          </RequiredIndicator>
        )}
      </StyledLabel>

      {isTextarea ? (
        <StyledTextarea
          id={inputId}
          name={inputId}
          value={value}
          onChange={onChange}
        />
      ) : (
        <StyledInput
          type={type}
          id={inputId}
          name={inputId}
          value={value}
          onChange={onChange}
        />
      )}

      <ErrorMessage className="error" id={`${inputId}-error`}>
        {error || ''}
      </ErrorMessage>
    </FormFieldContainer>
  );
};

export default FormElement;
