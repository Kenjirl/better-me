const API_KEY = '320e0fbf344c463793cf046bdff36de8';
// const API_KEY = '156b4218b04147e690781d4aff77412c';
// const API_KEY = '62ced6cb4ff040bf94a2fed12bf322e0';
// const API_KEY = 'a8163ef157d9435c824f14a487311733';

async function getManyRecipes({searchRecipe}) {
  // console.log(searchRecipe);
  const response = await fetch(`
    https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=12&query=${searchRecipe.name}&minCalories=${searchRecipe.minCalories}&maxCalories=${searchRecipe.maxCalories}&includeIngredients=${searchRecipe.ingredients}&type=${searchRecipe.type}&diet=${searchRecipe.diet}&sort=calories&instructionsRequired=true
  `);
  const responseJson = await response.json();

  if (response.status === 402) {
    alert('Telah mencapai batas quota maksimum untuk API Spoonacular');
  }

  if (response.status !== 200) {
    return { error: true, data:null};
  }

  return { error: false, data:responseJson.results};
}

async function getSource(id) {
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
  const responseJson = await response.json();
  console.log(responseJson);

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

  const { nutrients } = await getNutrientDetail(id);
  const { tastes } = await getTasteDetail(id);

  if (response.status !== 200) {
    return { 
      error: true, 
      data: {
        recipe:null, 
        equipments:null, 
        ingredients:null, 
        steps:null,
        nutrients:null, 
        tastesData:null,
      },
    };
  }
  
  return { 
    error: false, 
    data: {
      recipe:responseJson, 
      equipments:equipmentArr, 
      ingredients:ingredientArr, 
      steps:steps,
      nutrients:nutrients, 
      tastesData:tastes, 
    },
  };
}

async function getNutrientDetail(id) {
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${API_KEY}`);
  const responseJson = await response.json();

  return { nutrients:responseJson };
}

async function getTasteDetail(id) {
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/tasteWidget.json?apiKey=${API_KEY}`);
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

  return { 
    tastes:tasteDetailArr,
  };
}

export {
  getManyRecipes, 
  getSource
}