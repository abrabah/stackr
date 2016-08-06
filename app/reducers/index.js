import {combineReducers} from 'redux';
import {newNote, notes} from './note';


const rootReducer = combineReducers({
    notes,
    newNote
});

export default rootReducer;
