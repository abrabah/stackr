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


    setFocus(input){
        if(input != null)
            input.focus();
    }


    render() {
            return (
                <div className="newNote">
                <textarea ref={this.setFocus} placeholder="Whats on yout mind?"
                          name="note"
                          rows="2"
                          value={this.props.note.value}
                          onChange={this.noteContentChanged.bind(this)}/>
                    <Button name="Create" onClick={this.saveNote.bind(this)}/>
                </div>
            );
    }
}


function mapper(state) {
    return {note: state.newNote};
}

EditableNote.defaultProps = {};

export default connect(mapper)(EditableNote);
