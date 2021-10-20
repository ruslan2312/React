import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';


let combineReducer = combineReducers({
    PostPage: profileReducer,
    DialogsPage: dialogsReducer
});


let store = createStore(combineReducer);


export default store;