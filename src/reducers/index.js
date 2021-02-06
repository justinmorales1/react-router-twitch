import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form';
import  {createSotre, applyMiddleware, comepose} from "redux";


export default combineReducers({
    auth: authReducer,
    form: formReducer
})