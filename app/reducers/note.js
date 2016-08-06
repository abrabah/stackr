import * as actions from '../actions/note';


export function newNote(state = {value: '', priority: 0}, action) {
    switch (action.type) {
    case actions.NOTE_CHANGE:
        return Object.assign({}, state, {value: action.value});

    default:
        return state;
    }
}


export function notes(state = [], action) {

    switch (action.type) {

    case actions.SAVE_NOTE:
        return [...state, action.note];
    default:
        return state;
    }
}


