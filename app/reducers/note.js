import * as actions from '../actions/note';


export function newNote(state = {value: '', focus: false}, action) {
    switch (action.type) {
    case actions.NOTE_CHANGE:
        return Object.assign({}, state, {value: action.value});
    case actions.ADD_NEW_NOTE:
        return {value: '', focus: true};
    case actions.SAVE_NOTE:
        return Object.assign({}, state, {focus: false});
    default:
        return state;
    }
}


export function notes(state = [], action) {

    switch (action.type) {

    case actions.SAVE_NOTE:
        return [...state, action.note];
    case actions.REMOVE_NOTE:
        return state.filter(elm => elm !== action.note);
    default:
        return state;
    }
}


