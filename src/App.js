import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import BookmarksPage from "./pages/BookmarksPage";
import DetailRecipePage from "./pages/DetailRecipePage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import RecipesPage from "./pages/RecipesPage";
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/recipes' element={<RecipesPage/>}/>
        <Route path='/recipe/:id/detail' element={<DetailRecipePage/>}/>
        <Route path='/bookmarks' element={<BookmarksPage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/*' element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
