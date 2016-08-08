import * as actions from '../actions/note';


const backgroundColors = ['#DA4891', '#7ABC5E', '#ccc456', '#F0633F', '#7F366F'];

export function newNote(state = {
    value: '',
    focus: false,
    background: backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
}, action) {
    switch (action.type) {
    case actions.NOTE_CHANGE:
        return Object.assign({}, state, {value: action.value});
    case actions.CANCEL_ADD_NEW_NOTE:
        return Object.assign({}, state, {focus: false});
    case actions.SAVE_NOTE:
        return Object.assign({}, state, {
            focus: false,
            value: '',
            background: backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
        });
    default:
        return state;
    }
}


export function notes(state = getNotesFromLocalStorage(), action) {

    switch (action.type) {

    case actions.SAVE_NOTE:
    {
        const notes = [...state, action.note];
        saveNotesToLocalStorate(notes);
        return notes;
    }
    case actions.REMOVE_NOTE:
    {
        const notes = state.filter(elm => elm !== action.note);
        saveNotesToLocalStorate(notes);
        return notes;
    }
    case actions.POSTPONE_NOTE:
        return postponeNote(state,action.note);
    default:
        return state;
    }
}

const STACKR_NOTES = 'stackr_notes';

function postponeNote(notes,note) {
    const newNoteList = notes.filter(elm => elm !== note);
    newNoteList.push(note);
    return newNoteList;
}

function getNotesFromLocalStorage() {
    return JSON.parse(localStorage.getItem(STACKR_NOTES) || '[]');
}

function saveNotesToLocalStorate(notes) {
    localStorage.setItem(STACKR_NOTES, JSON.stringify(notes));
}
