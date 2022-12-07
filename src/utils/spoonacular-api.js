const API_KEY = [ '320e0fbf344c463793cf046bdff36de8', '156b4218b04147e690781d4aff77412c', '62ced6cb4ff040bf94a2fed12bf322e0', 'a8163ef157d9435c824f14a487311733', ];

async function getManyRecipes({searchRecipe}) {
  for (const api_key of API_KEY) {
    const response = await fetch(`
      https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&number=100&&query=${searchRecipe.name}&minCalories=${searchRecipe.minCalories}&maxCalories=${searchRecipe.maxCalories}&minCarbs=${searchRecipe.minCarbs}&maxCarbs=${searchRecipe.maxCarbs}&minFat=${searchRecipe.minFat}&maxFat=${searchRecipe.maxFat}&minProtein=${searchRecipe.minProtein}&maxProtein=${searchRecipe.maxProtein}&includeIngredients=${searchRecipe.ingredients}&type=${searchRecipe.type}&diet=${searchRecipe.diet}&sort=${searchRecipe.sort}&instructionsRequired=true
    `);
    const responseJson = await response.json();

    if (response.status === 200) {
      return { error: false, data:responseJson.results};
    }
  };

  alert(`Sorry! But this app have reached it's daily spoonacular's quota since it's using free service for the API.`);
  return { error: true, data:null};
}

async function getRandomRecipe() {
  for (const api_key of API_KEY) {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${api_key}&number=100`);
    const responseJson = await response.json();

    if (response.status === 200) {
      return { error: false, data:responseJson.recipes};
    }
  }

  alert(`Sorry! But this app have reached it's daily spoonacular's quota since it's using free service for the API.`);
  return { error: true, data:null};
}

async function getSource(id) {
  for (const api_key of API_KEY) {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${api_key}`);
    const responseJson = await response.json();

    if (response.status === 200) {
      const { extendedIngredients } = responseJson;
      let steps = [];
      let equipmentArr = [];
      let ingredientArr = [];

      if (responseJson.analyzedInstructions[0]) {
        steps.push(...responseJson.analyzedInstructions[0].steps);

        steps.forEach(step => {
          if (step.equipment) {
            step.equipment.forEach(eqp => {
              // May contain duplicated datas
              equipmentArr.push(eqp);
            });
          }
        });
      } else {
        steps.push('No steps recorded');
      }

      // Remove duplicate equipment data
      equipmentArr = equipmentArr.filter((val, index, self) => 
        index === self.findIndex((t) => (
          t.number === val.number && t.name === val.name
        ))
      );

      extendedIngredients.forEach(ingredient => {
        if (!ingredientArr.includes(ingredient.name)) {
          ingredientArr.push(ingredient);
        }
      });

      const { nutrients } = await getNutrientDetail(id, api_key);
      const { tastes } = await getTasteDetail(id, api_key);
      const { similarRecipes } = await getSimilarRecipes(id, api_key);

      return { 
        error: false, 
        data: {
          info: {
            id: responseJson.id,
            title: responseJson.title,
            image: responseJson.image,
            dishTypes: [...responseJson.dishTypes],
            readyInMinutes: responseJson.readyInMinutes,
            servings: responseJson.servings,
          }, 
          equipments:equipmentArr, 
          ingredients:ingredientArr, 
          steps:steps,
          tastesData:tastes, 
          nutrients:nutrients, 
          similars: similarRecipes,
        },
      };
    }
  }

  alert(`Sorry! But this app have reached it's daily spoonacular's quota since it's using free service for the API.`);
  return { error: true, data: null };
}

async function getNutrientDetail(id, api_key) {
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${api_key}`);
  const responseJson = await response.json();

  return { nutrients:responseJson };
}

async function getTasteDetail(id, api_key) {
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/tasteWidget.json?apiKey=${api_key}`);
  const responseJson = await response.json();

  let tasteDetailArr = [];

  Object.keys(responseJson).forEach((key, index) => {
    if (responseJson[key] >= 100) {
      tasteDetailArr.push({
        name: key, value: 100
      });
    } else {
      tasteDetailArr.push({
        name: key, value: responseJson[key]
      });
    }
  });

  return { tastes:tasteDetailArr };
}

async function getSimilarRecipes(id, api_key) {
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${api_key}`);
  const responseJson = await response.json();
  
  return { similarRecipes: responseJson };
}

export {
  getManyRecipes, 
  getRandomRecipe, 
  getSource, 
  getSimilarRecipes
}
