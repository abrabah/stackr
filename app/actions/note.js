export const POSTPONE_NOTE = 'POSTPONE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const NOTE_CHANGE = 'NOTE_CHANGE';
export const SAVE_NOTE = 'SAVE_NOTE';


export function noteValueChanged(value) {
    return {
        type: NOTE_CHANGE,
        value
    };
}


export function saveNote(note) {
    return {
        type: SAVE_NOTE,
        note
    }
}

