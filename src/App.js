import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import RecipesPage from './pages/RecipesPage';
import DetailRecipePage from './pages/DetailRecipePage';
import NotFoundPage from './pages/NotFoundPage';
import BookmarksPage from './pages/BookmarksPage';
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
