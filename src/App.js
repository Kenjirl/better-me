// import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { setTheme } from './utils/nav-bar-init';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import RecipesPage from './pages/RecipesPage';
import DetailRecipePage from './pages/DetailRecipePage';
import './styles/App.css';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {

  // useEffect(() => {
  //   setTheme();
  // });

  return (
    <>
      <NavBar/>

      <Routes>
        <Route path='/recipes' element={<RecipesPage/>}/>
        <Route path='/recipe/:id/detail' element={<DetailRecipePage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/*' element={<NotFoundPage/>}/>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
