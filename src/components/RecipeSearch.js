import React from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { searchFormToggle } from "../utils/search-form-init";
import '../styles/components/recipesearch.css';

export const RecipeSearch = ({ searchFormSubmit, nameChange, calorieChange, ingredientChange, typeChoosen, dietChoosen, intolerantChecked }) => {
  const recipeTypes = ['appetizer', 'beverage', 'breakfast', 'dessert', 'drink', 'main course', 'salad', 'side dish', 'snack', 'soup'];
  const recipeDiets = ['gluten free', 'ketogenic', 'vegetarian', 'lacto-vegetarian', 'ovo-vegetarian', 'vegan', 'pescetarian', 'paleo', 'primal'];
  const recipeIntolerants = ['dairy', 'egg', 'gluten', 'grain', 'peanut', 'seafood', 'sesame', 'shellfish', 'soy', 'sulfite', 'tree nut', 'wheat'];

  return (
    <>
      <button id="toggleSearchBtn" className="toggle-search-btn" type="button" onClick={searchFormToggle}><FiSearch/></button>
      <form onSubmit={searchFormSubmit} action="#" id="searchForm" className="search-bar">
        <button id="toggleSearchBtn" className="toggle-search-btn" type="button" onClick={searchFormToggle}><FiX/></button>
        <h2>Search Recipe</h2>
        <div className="input-container">
          <label htmlFor="recipe">
            <span>Recipe Name</span>
            <input className="search-input" name="recipe" id="recipe" type="text" onChange={nameChange} placeholder="e.g. burger, pasta, chicken, etc" />
          </label>
          <label htmlFor="calories">
            <span>Calories</span>
            <input className="search-input" name="calories" id="calories" type="number" onChange={calorieChange} placeholder="e.g. 10, 200, 1000, etc" />
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
        </div>
        <button className="search-btn" type="submit" onClick={searchFormToggle}>Search Recipe</button>
      </form>
    </>
  )
}
