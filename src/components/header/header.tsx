import styled from 'styled-components';
import { Link, useLocation } from 'react-router';
import logo from '../../../assets/icons/potato.svg';

const HeaderContainer = styled.div`
  background-color: var(--header-background);
  display: flex;
  height: 60px;
  align-items: center;
  padding: 0 16px;
  justify-content: space-between;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavigationItems = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media (max-width: 600px) {
    gap: 6px;
  }
`;

interface NavLinkProps {
  $isActive: boolean;
}

const NavLink = styled(Link)<NavLinkProps>`
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => (props.$isActive ? 'var(--active)' : 'white')};

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
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoText = styled.span`
  @media (max-width: 600px) {
    display: none;
  }
`;

const SiteHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <HeaderContainer className="main-header">
      <Logo to="/">
        <img alt="" src={logo}></img>
        <LogoText className="logo-text">Potatocook</LogoText>
      </Logo>
      <NavigationItems className="navigation-items">
        <NavLink
          to="/"
          className="navigation-item"
          $isActive={currentPath === '/'}
        >
          Home
        </NavLink>
        <NavLink
          to="/recipes"
          className="navigation-item"
          $isActive={currentPath.includes('/recipes')}
        >
          Recipes
        </NavLink>
        <NavLink
          to="/add-recipe"
          className="navigation-item"
          $isActive={currentPath.includes('/add-recipe')}
        >
          Add Recipe
        </NavLink>
        <NavLink
          to="/about"
          className="navigation-item"
          $isActive={currentPath.includes('/about')}
        >
          About
        </NavLink>
      </NavigationItems>
    </HeaderContainer>
  );
};

export default SiteHeader;
