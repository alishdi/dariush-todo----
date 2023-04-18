import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore, combineReducers } from "redux";


import todosReducer from "./store/Todos";

const store = legacy_createStore(combineReducers({
    todos:todosReducer,
}),
composeWithDevTools());

export default store;
