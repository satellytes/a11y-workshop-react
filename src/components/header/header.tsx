import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

// Define props interface
interface SiteHeaderProps {
  currentPage: 'Home' | 'Recipes' | 'Add Recipe' | 'About';
}

// Styled components
const HeaderContainer = styled.header`
  background-color: var(--header-background);
  display: flex;
  height: 60px;
  align-items: center;
  padding: 0 16px;
  justify-content: space-between;
  color: white;
  position: sticky;
  top: 0;
`;

const NavigationItems = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media (max-width: 600px) {
    gap: 6px;
  }
`;

interface NavLinkProps {
  isActive: boolean;
}

const NavLink = styled(Link)<NavLinkProps>`
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => (props.isActive ? 'var(--active)' : 'white')};

  &:hover {
    color: var(--active);
  }
`;

const Logo = styled(Link)`
  font-size: 28px;
  font-family: 'Pacifico', cursive;
  font-weight: 400;
  font-style: normal;
  cursor: pointer;
  color: white;
  text-decoration: none;
`;

const LogoText = styled.span`
  @media (max-width: 600px) {
    display: none;
  }
`;

const SiteHeader: React.FC<SiteHeaderProps> = ({ currentPage }) => {
  return (
    <HeaderContainer className="main-header">
      <Logo to="/">
        🥔 <LogoText className="logo-text">Potatocook</LogoText>
      </Logo>
      <NavigationItems className="navigation-items">
        <NavLink
          to="/"
          className="navigation-item"
          isActive={currentPage === 'Home'}
        >
          Home
        </NavLink>
        <NavLink
          to="/recipes"
          className="navigation-item"
          isActive={currentPage === 'Recipes'}
        >
          Recipes
        </NavLink>
        <NavLink
          to="/add-recipe"
          className="navigation-item"
          isActive={currentPage === 'Add Recipe'}
        >
          Add Recipe
        </NavLink>
        <NavLink
          to="/about"
          className="navigation-item"
          isActive={currentPage === 'About'}
        >
          About
        </NavLink>
      </NavigationItems>
    </HeaderContainer>
  );
};

export default SiteHeader;
