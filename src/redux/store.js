/*import { createStores } from "redux";
import rootReducer from "./reducer";

const store = createStores(rootReducer);


export default store;
*/


import { createStore } from "redux";
import rootReducers from "./reducer";

const store = createStore(rootReducers);

export default store;