import React from "react";
import { BsSearch, BsShuffle, BsX } from "react-icons/bs";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';
import 'tippy.js/animations/perspective.css';
import '../styles/components/recipesearch.css';

export default function RecipeSearch({ searchFormToggle, searchFormSubmit, nameChange, calorieChange, carbChange, fatChange, proteinChange, ingredientChange, typeChoosen, dietChoosen, intolerantChecked, randomizeRecipe, sortChoosen }) {
  const recipeTypes = ['appetizer', 'beverage', 'breakfast', 'dessert', 'drink', 'main course', 'salad', 'side dish', 'snack', 'soup'];
  const recipeDiets = ['gluten free', 'ketogenic', 'vegetarian', 'lacto-vegetarian', 'ovo-vegetarian', 'vegan', 'pescetarian', 'paleo', 'primal'];
  const recipeIntolerants = ['dairy', 'egg', 'gluten', 'grain', 'peanut', 'seafood', 'sesame', 'shellfish', 'soy', 'sulfite', 'tree nut', 'wheat'];
  const recipeSort = ['caffein', 'calories', 'carbs', 'cholesterol', 'energy', 'healthiness', 'protein', 'sugar', 'total-fat']

  return (
    <>
      <div className="toggle-search-container">
        <Tippy placement="left" interactive={true} content='Open Search' offset={[0, 20]} theme='light-border' animation='perspective'>
          <button type="button" className="toggle-search-btn" onClick={searchFormToggle}><BsSearch/></button>
        </Tippy>
      </div>
      <form onSubmit={searchFormSubmit} action="#" id="searchForm" className="search-bar">
        <h2>Search Recipe</h2>
        <div className="input-container">
          <label htmlFor="recipe">
            <span>Recipe Name</span>
            <input className="search-input" name="recipe" id="recipe" type="text" onChange={nameChange} placeholder="e.g. burger, pasta, chicken, etc" />
          </label>
          <label htmlFor="calories">
            <span>Calories</span>
            <Tippy placement="top" interactive={true} content='min. 50, max. 1000' offset={[0,5]} theme='light-border' animation='perspective'>
              <input className="search-input" name="calories" id="calories" type="number" onChange={calorieChange} placeholder="e.g. 100, 200, etc" />
            </Tippy>
          </label>
          <label htmlFor="carbs">
            <span>Carbs</span>
            <Tippy placement="top" interactive={true} content='min. 10, max. 100' offset={[0,5]} theme='light-border' animation='perspective'>
              <input className="search-input" name="carbs" id="carbs" type="number" onChange={carbChange} placeholder="e.g. 10, 20, etc" />
            </Tippy>
          </label>
          <label htmlFor="fat">
            <span>Fat</span>
            <Tippy placement="top" interactive={true} content='min. 1, max. 100' offset={[0,5]} theme='light-border' animation='perspective'>
              <input className="search-input" name="fat" id="fat" type="number" onChange={fatChange} placeholder="e.g. 1, 10, etc" />
            </Tippy>
          </label>
          <label htmlFor="protein">
            <span>Protein</span>
            <Tippy placement="top" interactive={true} content='min. 10, max. 100' offset={[0,5]} theme='light-border' animation='perspective'>
              <input className="search-input" name="protein" id="protein" type="number" onChange={proteinChange} placeholder="e.g. 10, 20, etc" />
            </Tippy>
          </label>
          <label htmlFor="ingredients">
            <span>Ingredients</span>
            <input className="search-input" name="ingredients" id="ingredients" type="text" onChange={ingredientChange} placeholder="e.g. apple, cheese, egg, etc" />
          </label>
          <label htmlFor="type">
            <span>Recipe Type</span>
            <div className="selector-container">
              <input className="search-input" name="type" id="type" type="radio" onChange={typeChoosen} value='' label='none' />
              { 
                recipeTypes.map((type, index) => {
                  return (
                    <input key={index} className="search-input" name="type" id="type" type="radio" onChange={typeChoosen} value={type} label={type} />
                  )
                })
              }
            </div>
          </label>
          <label htmlFor="diet">
            <span>Recipe Diet</span>
            <div className="selector-container">
              <input className="search-input" name="diet" id="diet" type="radio" onChange={dietChoosen} value='' label='none' />
              { 
                recipeDiets.map((diet, index) => {
                  return (
                    <input key={index} className="search-input" name="diet" id="diet" type="radio" onChange={dietChoosen} value={diet} label={diet} />
                  )
                })
              }
            </div>
          </label>
          <label htmlFor="intolerant">
            <span>Recipe Intolerant</span>
            <div className="selector-container">
              { 
                recipeIntolerants.map((intolerant, index) => {
                  return (
                    <input key={index} className="search-input" name="intolerant" id="intolerant" type="checkbox" onChange={intolerantChecked} value={intolerant} label={intolerant} />
                  )
                })
              }
            </div>
          </label>
          <label htmlFor="sort">
            <span>Sort By</span>
            <div className="selector-container">
              <input className="search-input" name="sort" id="sort" type="radio" onChange={sortChoosen} value='' label='none' />
              { 
                recipeSort.map((sort, index) => {
                  return (
                    <input key={index} className="search-input" name="sort" id="sort" type="radio" onChange={sortChoosen} value={sort} label={sort} />
                  )
                })
              }
            </div>
          </label>
        </div>
        <div className="button-container">
          <Tippy placement="top" interactive={true} content='Close Search' offset={[0, 10]} theme='light-border' animation='perspective'>
            <button id="toggleSearchBtn" className="toggle-search-btn" type="button" onClick={searchFormToggle}><BsX /></button>
          </Tippy>
          <Tippy placement="top" interactive={true} content='Random Search' offset={[0, 10]} theme='light-border' animation='perspective'>
            <button type="button" onClick={randomizeRecipe}><BsShuffle /></button>
          </Tippy>
          <Tippy placement="top" interactive={true} content='Search Recipe' offset={[0, 10]} theme='light-border' animation='perspective'>
            <button className="search-btn" type="submit"><BsSearch /></button>
          </Tippy>
        </div>
      </form>
    </>
  )
}
