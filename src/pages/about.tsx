import React from 'react';
import styled from 'styled-components';
import chefImage from '../../assets/team-images/chef.png';
import marketingImage from '../../assets/team-images/marketing.png';
import philosopherImage from '../../assets/team-images/philosopher.png';
import CallToActionBanner from '../components/call-to-action-banner/call-to-action-banner.tsx';

const AboutContainer = styled.main`
  text-align: center;
`;

const TeamMembersSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px 0;
`;

const MemberCard = styled.div`
  width: 250px;
  margin: 10px;
  background-color: #fff;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

const MemberImage = styled.img`
  width: 100%;
  border-radius: 8px 8px 0 0;
`;

const MemberName = styled.h3`
  margin: 10px 0;
  font-size: 1.5em;
`;

const MemberDescription = styled.p`
  font-size: 1.1em;
`;

interface TeamMember {
  name: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Chef Potato',
    image: chefImage,
    description:
      'Our fearless leader in the kitchen, Chef Potato, believes no potato should ever go unfried.',
  },
  {
    name: 'Marketing Mash',
    image: marketingImage,
    description:
      'The brains behind our quirky social media presence. Loves a good potato pun (and a good potato).',
  },
  {
    name: 'Fry Guy',
    image: philosopherImage,
    description:
      "Part-time fry enthusiast, full-time potato philosopher. His life motto? 'Keep it crispy.'",
  },
];

export const About: React.FC = () => {
  return (
    <AboutContainer>
      <h1>About Us</h1>
      <p>
        Get to know the team behind the world's most whimsical potato recipes!
      </p>

      <h2>Our Spud-Tacular Team</h2>
      <p>
        We're a bunch of potato enthusiasts with one mission: to take the humble
        potato to new, hilarious heights.
      </p>

      <TeamMembersSection>
        {teamMembers.map((member) => (
          <MemberCard key={member.name}>
            <MemberImage src={member.image} alt={`Image of ${member.name}`} />
            <MemberName>{member.name}</MemberName>
            <MemberDescription>{member.description}</MemberDescription>
          </MemberCard>
        ))}
      </TeamMembersSection>

      <CallToActionBanner
        title="Our Story"
        text="Once upon a time, a group of friends found themselves arguing over the best way to cook potatoes. One said fries, another said mashed, and thus, Potato Recipes Galore was born. Our goal? To prove that no matter how you slice, dice, mash, or fry it, potatoes are life's greatest gift."
        buttonPrefix="Learn more about us"
        buttonText="Click here"
        buttonLink="https://en.wikipedia.org/wiki/Potato"
      />
    </AboutContainer>
  );
};
