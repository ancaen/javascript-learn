// Promises
      // Object that keeps track whether a certain event
      // has happended already or not

      // Determines what happens after the event has happended

      // Implements a concept of a future value that we are expecting

      // Promises states

      // Pending - state before the event has happened
      // Settled / resolved - state afer the event has happened

      // If the result is successfull then the promised is Fullfilled
      // If there was an error in the result then the promised was rejected

      // Promises can be produced or consumed
      // When consumed we can use callback function for resolved / rejected

      // get recipe Ids
      const getIds = new Promise((resolve, reject) => {
        setTimeout(() => {
          //marks the Promised as fullfilled and returns input data
          resolve([523, 49, 301, 456]);
        }, 1500);
      });

      const getRecipe = recID => {
        return new Promise((resolve, reject) => {
          setTimeout(id => {
            const recipe = {
              title: 'Fresh tomato pasta',
              publisher: 'Jonas'
            };
            resolve(`${id}: ${recipe.title}`);
          }, 1500, recID);

        });
      };

      const getRelated = recPublisher => {
        return new Promise((resolve, reject) => {
          setTimeout( publisher => {
            const recipe = {
              title: 'Italian Pizza',
              publisher: 'Jonas'
            };
            resolve(`${publisher}: ${recipe.title}`);
          }, 1500, recPublisher);
        });
      };

      // add event handler for the successfull Promise
      // then will always have as an argument the result of the
      // successfull Promise
      // getIds
      //   .then(IDs => {
      //     console.log(IDs);
      //     // not solving the callback hell
      //     // getRecipe(IDs[2]).then();

      //     //returns a Promise, so we can chain them
      //     return getRecipe(IDs[2]);
      //   })
      //   .then(recipe => {
      //     console.log(recipe);
      //     return getRelated('Jonas S');
      //   })
      //   .then(recipe => {
      //     console.log(recipe);
      //   })
      //   .catch(error => {
      //     console.log(`Error: ${error}`);
      //   });

      // ES8 async/ Await

      // always returns a promise that can
      // be consumed
      async function getRecipesAW() {
        const IDs = await getIds;
        console.log(IDs);
        const recipe = await getRecipe(IDs[2]);
        console.log(recipe);
        const related = await getRelated('Jonas S');
        console.log(related);

        return recipe;
      }

      getRecipesAW()
        .then( result => console.log(`final result ${result} is the best`));
      
