// Async JavaScript with Callbacks

//Callback Hell => callback inside of callback inside of ...
//ES6 => Promises

function getRecipe() {
    //get list of IDs

    setTimeout( () => {
      const recipeIDs = [567, 57, 304, 46];
      console.log(recipeIDs);

      setTimeout(id => {
        const recipe = {
          title: 'Fresh Tomato Pasta',
          publisher: 'Jonas'
        };
        console.log(`${id}: ${recipe.title}`);

        setTimeout( publisher => {
            const recipe2 = {
              title: 'Italian Pizza',
              publisher: 'Jonas'
            };
            console.log(recipe2);
        }, 1500, recipe.publisher);
      }, 1000, recipeIDs[2]);

    }, 1500);

    //get recipe id details
}

getRecipe();
