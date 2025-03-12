import React, { useState } from 'react';
import styled from 'styled-components';
import FormElement from './form-element.tsx';

const ModalContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9em;
  margin-top: 0;
`;

type LoginModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

const LoginModal: React.FC<LoginModalProps> = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [generalError, setGeneralError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setGeneralError('');
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Email is required.');
    }
    if (!password) {
      setPasswordError('Password is required.');
    }
    if (email && password) {
      setGeneralError('There is something wrong with your credentials.');
    }
  };

  return (
    <ModalContainer isVisible={isVisible}>
      <ModalContent onSubmit={handleSubmit}>
        <ModalHeader>
          <h2>Login</h2>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <FormElement
          label="Email"
          inputId="email"
          type="text"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
        />
        <FormElement
          label="Password"
          inputId="password"
          type="password"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
        />
        {generalError && <ErrorMessage>{generalError}</ErrorMessage>}
        <ButtonContainer>
          <Button
            type="button"
            onClick={() => {
              setGeneralError(
                'Sorry, account creation is under development 😰',
              );
            }}
          >
            Create Account
          </Button>
          <Button type="submit">Login</Button>
        </ButtonContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default LoginModal;
