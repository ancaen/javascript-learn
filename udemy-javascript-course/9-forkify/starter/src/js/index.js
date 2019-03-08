import Search from './models/Search';

/** Global state of the app
 * - Search object
 * - Current recipe
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

const controlSearch = async () => {
    //1 get the query from the view
    const query = 'pizza'; //TO DO 

    if (query) {
        //2 new search object and add to state
        state.search = new Search(query);

        //3 Prep UI for results

        //4 Search for recipes
        await state.search.getResults();

        //5 render results on UI
        console.log(state.search.result);

    }
};

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});
