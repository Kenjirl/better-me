import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import RecipeList from "../components/RecipeList";
import RecipePagination from "../components/RecipePagination";
import { ImSortAlphaAsc, ImSortNumericAsc } from "react-icons/im";
import '../styles/pages/bookmarkspage.css';

export default function BookmarksPage() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [sortRecipe, setSortRecipe] = useState('num');
  const [isLoading, setIsLoading] = useState(true);
  const [recipeIndex, setRecipeIndex] = useState(0);

  const searchedRecipe = recipes.filter(recipe => {
    return recipe.title.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    setRecipes(
      JSON.parse(localStorage.getItem('bookmarkedRecipes') || '[]')
    );
    setIsLoading(false);
  }, []);

  const onPaginationChange = (pageIndex) => {
    setRecipeIndex(Number(pageIndex.selected));
  }

  const onChangeBookmarkSort = () => {
    if (sortRecipe !== 'alpha') {
      recipes.sort((a,b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
      });
      setSortRecipe('alpha');
    } else {
      recipes.sort((a,b) => {
        if (a.order < b.order) return -1;
        if (a.order > b.order) return 1;
        return 0;
      });
      setSortRecipe('num');
    }
  }

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (!recipes.length) {
    return (
      <main>
        <div className="bookmark-util">
          <div className="search-container">
            <input value={query} onChange={e => setQuery(e.target.value)} type='text' placeholder="search" />
          </div>
          <div className="sort-btn-container">
            {
              sortRecipe !== 'alpha'
              ? <button onClick={onChangeBookmarkSort}><ImSortAlphaAsc /></button>
              : <button onClick={onChangeBookmarkSort}><ImSortNumericAsc /></button>
            }
          </div>
        </div>
        <div className="recipes-list-empty">
          <p>No bookmark yet</p>
        </div>
      </main>
    )
  }

  return (
    <main>
      <div className="bookmark-util">
        <div className="search-container">
          <input value={query} onChange={e => setQuery(e.target.value)} type='text' placeholder="search" />
        </div>
        <div className="sort-btn-container">
          {
            sortRecipe !== 'alpha'
            ? <button onClick={onChangeBookmarkSort}><ImSortAlphaAsc /></button>
            : <button onClick={onChangeBookmarkSort}><ImSortNumericAsc /></button>
          }
        </div>
      </div>
      <RecipeList 
        recipesList={searchedRecipe} 
        page={recipeIndex} 
      />
      <RecipePagination 
        pageChange={onPaginationChange} 
        pageNumber={(Math.floor(recipes.length/15))} 
      />
    </main>
  )
}