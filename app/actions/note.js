export const POSTPONE_NOTE = 'POSTPONE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const NOTE_CHANGE = 'NOTE_CHANGE';
export const SAVE_NOTE = 'SAVE_NOTE';
export const ADD_NEW_NOTE = 'ADD_NEW_NOTE';

export function noteValueChanged(value) {
    return {
        type: NOTE_CHANGE,
        value
    };
}

export function addNewNote() {
    return {type: ADD_NEW_NOTE};
}

export function removeNote(note) {
    return {
        type: REMOVE_NOTE,
        note
    }
}


export function saveNote(note) {
    return {
        type: SAVE_NOTE,
        note
    }
}

