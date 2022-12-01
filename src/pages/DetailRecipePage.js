import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSource } from "../utils/spoonacular-api";
import DetailButton from "../components/DetailButton";
import DetailInfo from "../components/DetailInfo";
import DetailEquipment from "../components/DetailEquipment";
import DetailIngredient from "../components/DetailIngredient";
import DetailStep from "../components/DetailStep";
import DetailTaste from "../components/DetailTaste";
import DetailNutrient from "../components/DetailNutrient";
import DetailSimilar from "../components/DetailSimilar";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";
import '../styles/pages/detailrecipepage.css';

export default function DetailRecipePage() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState({
    info: {
      title: null,
      image: null,
      readyInMinutes: null,
    }, 
    equipments: [], 
    ingredients: [], 
    steps: [],
    tastesData: [], 
    nutrients: {
      bad: [],
      calories: 'no record found',
      carbs: 'no record found',
      fat: 'no record found',
      good: [],
      protein: 'no record found',
    }, 
    similars: [],
  });
  let bookmarkedRecipes = JSON.parse(localStorage.getItem('bookmarkedRecipes') || '[]');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getSource(id).then(({ error, data }) => {
      if (error) {
        setRecipe(null);
      } else {
        setRecipe({
          info: {
            id: data.info.id,
            title: data.info.title, 
            image: data.info.image, 
            readyInMinutes: data.info.readyInMinutes,
          }, 
          equipments: [...data.equipments],
          ingredients: [...data.ingredients],
          steps: [...data.steps],
          tastesData: [...data.tastesData],
          nutrients: {
            bad: [...data.nutrients.bad],
            calories: data.nutrients.calories,
            carbs: data.nutrients.carbs,
            fat: data.nutrients.fat,
            good: [...data.nutrients.good],
            protein: data.nutrients.protein,
          }, 
          similars: [...data.similars],
        });
        const apalah = bookmarkedRecipes.some(r => r.id === Number(id));
        console.log(apalah);
        setIsBookmarked(apalah);
      }
      setIsLoading(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const onBookmarkRecipeClicked = () => {
    const newBookmarkedRecipe = {
      id: recipe.info.id,
      title: recipe.info.title,
      image: recipe.info.image, 
      nutrition: {
        nutrients: [{
          amount: recipe.nutrients.calories,
        }],
      },
    };

    if (isBookmarked) {
      bookmarkedRecipes = bookmarkedRecipes.filter(r => r.id !== newBookmarkedRecipe.id);
      setIsBookmarked(false);
      console.log(`Removed recipe #${newBookmarkedRecipe.id} from bookmark`);
    } else {
      bookmarkedRecipes.push(newBookmarkedRecipe);
      setIsBookmarked(true);
      console.log(`Added recipe #${newBookmarkedRecipe.id} to bookmark`);
    }
    localStorage.setItem('bookmarkedRecipes', JSON.stringify(bookmarkedRecipes));
  }

  if (isLoading) {
    return (
      <main className="detail-recipe-main">
        <DetailButton />
        <Loading />
      </main>
    )
  }

  if (recipe === null) {
    return (
      <main className="detail-recipe-main">
        <DetailButton />
        <NotFound />
      </main>
    )
  }

  return (
    <main>
      <DetailButton bookmarkRecipe={onBookmarkRecipeClicked} isBookmarked={isBookmarked} />
      <div className="food-recipe" id="foodRecipe">
        <DetailInfo recipe={recipe.info} />
        <DetailEquipment equipments={recipe.equipments} />
        <DetailIngredient ingredients={recipe.ingredients} />
        <DetailStep steps={recipe.steps} />
        <DetailTaste tastes={recipe.tastesData} />
        <DetailNutrient nutrients={recipe.nutrients} /> 
        <DetailSimilar similarRecipes={recipe.similars} />
      </div>
    </main>
  )
}
