import React from "react";
import '../styles/components/detailpreps.css';

export const DetailIngredient = ({ ingredients }) => {
  if (!ingredients) {
    return (
      <section id="ingredientSection" className="ingredient section">
        <h3>Ingredients</h3>
        <p>Tidak ada equipment</p>
      </section>
    )
  }

  return (
    <section id="ingredientSection" className="ingredient section">
      <h3>Ingredients</h3>
      <div id="spoonacular-ingredient-vis-grid">
        {
          ingredients.map((ingredient, index) => (
            <div key={`${ingredient.id}-${index}`} className="spoonacular-grid-item">
              <div className="spoonacular-ingredient">
                <span className="spoonacular-amount">{ingredient.amount} {ingredient.unit}</span>
                <div className="spoonacular-image-wrapper">
                  <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.name} />
                </div>
                <span className="spoonacular-name">{ingredient.name}</span>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
