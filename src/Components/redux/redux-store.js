import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import headerRuducer from './header-reducer'
import authReducer from './auth-reducer'

let combineReducer = combineReducers({
    PostPage: profileReducer,
    DialogsPage: dialogsReducer,
    UsersPage: usersReducer,
    HeaderPage: headerRuducer,
    auth: authReducer
});


let store = createStore(combineReducer);


window.store = store;
export default store;