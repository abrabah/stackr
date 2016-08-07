import * as actions from '../actions/note';


const backgroundColors = ['#DA4891', '#7ABC5E', '#F1E41A', '#F0633F', '#7F366F'];

export function newNote(state = {value: '', focus: false}, action) {
    switch (action.type) {
    case actions.NOTE_CHANGE:
        return Object.assign({}, state, {value: action.value});
    case actions.ADD_NEW_NOTE:
        return {
            value: '',
            focus: true,
            background: backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
        };
    case actions.CANCEL_ADD_NEW_NOTE:
        return Object.assign({}, state, {focus: false});
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


