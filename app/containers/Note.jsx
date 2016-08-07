import React from 'react';
import {connect} from 'react-redux';
import Button from '../components/Button';
import *  as actions from '../actions/note';
import '../styles/notes.scss';


class Note extends React.Component {


    remove() {
        this.props.dispatch(actions.removeNote(this.props.note));
    }

    postpone() {

    }

    render() {
        return (
            <div className="note" style={{background:this.props.note.background}}>
                <section className="note-text">{this.props.note.value}</section>
                <section className="note-button-row">
                    <Button name="Postpone" onClick={this.postpone.bind(this)}/>
                    <div className="separator"/>
                    <Button name="Remove" onClick={this.remove.bind(this)}/>
                </section>
            </div>

        )
    }
}


function mapper(state) {
    return {};
}


Note.propTypes = {
    note: React.PropTypes.object
};

Note.defaultProps = {};

export default connect(mapper)(Note);
