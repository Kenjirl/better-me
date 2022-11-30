import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSource } from "../utils/spoonacular-api";
import { DetailEquipment } from "../components/DetailEquipment";
import { DetailIngredient } from "../components/DetailIngredient";
import { DetailStep } from "../components/DetailStep";
import { DetailTaste } from "../components/DetailTaste";
import { DetailNutrient } from "../components/DetailNutrient";
import { DetailInfo } from "../components/DetailInfo";
import { BackButton } from "../components/BackButton";
import { Loading } from "../components/Loading";
import { DetailSimilar } from "../components/DetailSimilar";
import NotFound from "../components/NotFound";
import '../styles/pages/detailrecipepage.css';

const DetailRecipePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [tastes, setTastes] = useState([]);
  const [chartConfig, setChartConfig] = useState({
    labels: [],
    datasets:[],
  });
  const [nutrients, setNutrients] = useState({
    bad: [],
    calories: 'no record found',
    carbs: 'no record found',
    fat: 'no record found',
    good: [],
    protein: 'no record found',
  });
  const [similarRecipe, setSimilarRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getSource(id).then(({ error, data }) => {
      if (error) {
        setRecipe(null);
      } else {
        setRecipe(data.recipe);
        setEquipments(data.equipments);
        setIngredients(data.ingredients);
        setSteps(data.steps);
        setNutrients({
          bad: [...data.nutrients.bad],
          calories: data.nutrients.calories,
          carbs: data.nutrients.carbs,
          fat: data.nutrients.fat,
          good: [...data.nutrients.good],
          protein: data.nutrients.protein,
        });
        setTastes(data.tastesData);
        setChartConfig({
          labels: data.tastesData.map(data => data.name),
          datasets:[
            {
              label:"Taste Widget",
              data: data.tastesData.map(data => data.value),
              backgroundColor:"rgba(254,201,227,0.2)",
              borderColor:"rgb(254,201,227)",
              pointBackgroundColor:"rgb(254,201,227)",
            },
          ],
        });
        setSimilarRecipe(data.similars);
      }
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return (
      <main className="detail-recipe-main">
        <BackButton navigate={navigate} />
        <Loading />
      </main>
    )
  }

  if (recipe === null) {
    return (
      <main className="detail-recipe-main">
        <BackButton navigate={navigate} />
        <NotFound />
      </main>
    )
  }

  return (
    <>
    <main>
      <BackButton navigate={navigate} />
      <div className="food-recipe" id="foodRecipe">
        <DetailInfo recipe={recipe} />
        <DetailEquipment equipments={equipments} />
        <DetailIngredient ingredients={ingredients} />
        <DetailStep steps={steps} />
        <DetailTaste chartConfig={chartConfig} tastes={tastes} />
        <DetailNutrient nutrients={nutrients} /> 
        <DetailSimilar similarRecipes={similarRecipe} />
      </div>
    </main>
    </>
  )
}

export default DetailRecipePage;
