import React from 'react';
import {connect} from 'react-redux';
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
                    <button onClick={this.postpone.bind(this)}>
                        <i className="material-icons md-large md-light">pause_circle_outline</i>
                    </button>
                    <button onClick={this.remove.bind(this)}>
                        <i className="material-icons md-large md-light">remove_circle_outline</i>
                    </button>
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
