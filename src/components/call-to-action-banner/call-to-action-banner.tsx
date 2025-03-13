import React from 'react';
import styled from 'styled-components';

interface CallToActionBannerProps {
  title: string;
  text: string;
  buttonPrefix: string;
  buttonText: string;
  buttonLink: string;
  isExternal?: boolean;
}

const BannerSection = styled.section`
  background-color: var(--main-bg-color-4);
  color: white;
  padding: 30px;
  margin: 0 -16px;
`;

const BannerLink = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em;
  background-color: white;
  color: var(--main-bg-color-4);
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid white;
  text-decoration: none;

  &:hover {
    background-color: var(--main-bg-color-4);
    color: white;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const CallToActionBanner: React.FC<CallToActionBannerProps> = ({
  title,
  text,
  buttonPrefix,
  buttonText,
  buttonLink,
  isExternal = false,
}) => {
  return (
    <BannerSection className="call-to-action">
      <h3>{title}</h3>
      <p>{text}</p>
      <ButtonContainer className="call-to-action-button-container">
        <p>{buttonPrefix}</p>
        <BannerLink
          href={buttonLink}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {buttonText}
        </BannerLink>
      </ButtonContainer>
    </BannerSection>
  );
};

export default CallToActionBanner;
