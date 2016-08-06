import React from 'react';
import {connect} from 'react-redux';
import Button from '../components/Button';
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


    render() {

        if (this.props.note.focus)
            return (
                <div>
                <textarea placeholder="Whats on yout mind?"
                          name="note"
                          cols="35"
                          rows="20"
                          onChange={this.noteContentChanged.bind(this)}/>
                    <Button name="Create" onClick={this.saveNote.bind(this)}/>
                    <Button name="Cancel"/>
                </div>
            );
        else return null;
    }
}


function mapper(state) {
    return {note: state.newNote};
}

EditableNote.defaultProps = {};

export default connect(mapper)(EditableNote);
