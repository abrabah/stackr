import React from 'react';
import ReactDom from 'react-dom';
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

    cancel() {
        this.props.dispatch(actions.cancelAddNewNote());
    }

    setFocus(input){
        if(input != null)
            input.focus();
    }


    render() {

        if (this.props.note.focus)
            return (
                <div>
                <textarea ref={this.setFocus} placeholder="Whats on yout mind?"
                          name="note"
                          cols="35"
                          rows="20"
                          value={this.props.note.value}
                          onChange={this.noteContentChanged.bind(this)}/>
                    <Button name="Create" onClick={this.saveNote.bind(this)}/>
                    <Button name="Cancel" onClick={this.cancel.bind(this)}/>
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
