import React from 'react';
import {connect} from 'react-redux';
import *  as actions from '../actions/note';


class EditableNote extends React.Component {

    noteContentChanged(evt) {
        this.props.dispatch(actions.noteValueChanged(evt.target.value));
    }


    saveNote() {

        const value = this.props.note.value.trim();
        if (value !== '')
            this.props.dispatch(actions.saveNote(this.props.note));
    }


    setFocus(input) {
        if (input != null)
            input.focus();
    }


    render() {
        return (
            <div className="newNote">
                <textarea ref={this.setFocus} placeholder="What to do?"
                          name="note"
                          rows="2"
                          value={this.props.note.value}
                          onChange={this.noteContentChanged.bind(this)}/>
                <button onClick={this.saveNote.bind(this)}>
                    <i className="material-icons md-large md-light">add_circle_outline</i>
                </button>
            </div>
        );
    }
}


function mapper(state) {
    return {note: state.newNote};
}

EditableNote.defaultProps = {};

export default connect(mapper)(EditableNote);
