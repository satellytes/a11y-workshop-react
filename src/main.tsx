import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/home.tsx';
import Recipes from './pages/recipes.tsx';
import AddRecipe from './pages/add-recipe.tsx';
import { About } from './pages/about.tsx';
import Header from './components/header/header.tsx';
import styled from 'styled-components';
import BoiledPotatoes from './pages/recipes/boiled-potatoes.tsx';
import FrenchFries from './pages/recipes/french-fries.tsx';
import PotatoChips from './pages/recipes/potato-chips.tsx';
import PotatoSalad from './pages/recipes/potato-salad.tsx';
import PotatoWedges from './pages/recipes/potato-wedges.tsx';

const MainContentWrapper = styled.div``;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header currentPage={'Home'} />
      <MainContentWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes">
            <Route index element={<Recipes />} />

            <Route path="boiled-potatoes" element={<BoiledPotatoes />} />
            <Route path="french-fries" element={<FrenchFries />} />
            <Route path="potato-chips" element={<PotatoChips />} />
            <Route path="potato-salad" element={<PotatoSalad />} />
            <Route path="potato-salad" element={<PotatoSalad />} />
            <Route path="potato-wedges" element={<PotatoWedges />} />
          </Route>
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MainContentWrapper>
    </BrowserRouter>
  </StrictMode>,
);
