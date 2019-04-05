// eslint-disable-next-line linebreak-style
import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { elements, renderLoader, clearLoader } from './views/base';


/** Global state of the app
 * - Search object
 * - Current recipe
 * - Shopping list object
 * - Liked recipes
 */
const state = {};
//  window.state = state;

/**
 * SEARCH CONTROLLER
 */
const controlSearch = async () => {
    //1 get the query from the view
    const query = searchView.getInput(); 

    if (query) {
        //2 new search object and add to state
        state.search = new Search(query);

        //3 Prep UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
        //4 Search for recipes
        await state.search.getResults();

        //5 render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
        } catch (error) {
            console.log(error);
            
            alert('Something went wrong with the search');
            clearLoader();
        }

    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
    
});

/**
 * RECIPE CONTROLLER
 */

const controlRecipe = async () => {
    //Get ID from url
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if (id) {
        //prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        //Highlist selected search item
        if (state.search) {
            searchView.highlighSelected(id);
        }

        //create new recipe object
        state.recipe = new Recipe(id);
        window.r = state.recipe;

        try {
            //get recipe date and parse ing
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            //calculate servings and time
            state.recipe.calcServings();
            state.recipe.calcTime();

            //render recipe
            clearLoader();
            recipeView.renderRecipe(
                state.recipe, 
                state.likes.isLiked(id)
            );
        } catch (error) {
            console.log(error);
            
            alert('Error processing recipe');
        }
        
    }
    
};


['hashchange', 'load'].forEach( event => window.addEventListener(event, controlRecipe));

/**
 * LIST CONTROLLER
 */

 const controlList = () => {
    //Create a new list if there isn't one yet
    if (!state.list) state.list = new List();

    //Add each ingredients to the list and UI
    state.recipe.ingredients.forEach( el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
 };

 //Handle delete and update list item events
 elements.shoppingList.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;
    

    //Handle the delete event
    if (e.target.matches('.shopping__delete, .shopping__delete *')) {
        
        //Delete from state
        state.list.deleteItem(id);

        //Delete from UI
        listView.deleteItem(id);
    //Handle the update count
    } else if (e.target.matches('.shopping__count-value')) {
        const val = parseFloat(e.target.value);
        state.list.updateCount(id, val);

    }
 });

 /**
 * LIKE CONTROLLER
 */
state.likes = new Likes();
likesView.toggleLikesMenu(state.likes.getNumLikes());

const controlLike = () => {

    if (!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;

    if(!state.likes.isLiked(currentID)) {
        //Add like to the state
        const like = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        );

        //Toggle like button
        likesView.toggleLikesBtn(true);

        //Add like to the UI list
        console.log(state.likes);
        likesView.renderLike(like);
        
    } else {
        //Remove like to the state
        state.likes.deleteLike(currentID);

        //Toggle like button
        likesView.toggleLikesBtn(false);

        //Remove like from the UI list
        likesView.deleteLike(currentID);
    }

    likesView.toggleLikesMenu(state.likes.getNumLikes());

 };


//Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
         // Decrease button is clicked
         if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
         }
     } else if (e.target.matches('.btn-increase, .btn-increase *')) {
         // Increase button is clicked
         state.recipe.updateServings('inc');
         recipeView.updateServingsIngredients(state.recipe);
     } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
         //Add to shopping list
        controlList();
     } else if (e.target.matches('.recipe__love, .recipe__love *')) {
         //Add to likes list
         controlLike();
     }
    
});
