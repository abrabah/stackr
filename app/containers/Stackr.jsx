import React from 'react';
import {connect} from 'react-redux';
import  Note from './EditableNote';
import Notes from './Notes';
import Button from '../components/Button';
import * as actions from '../actions/note';

import '../styles/stackr.scss';

class Stackr extends React.Component {


    addNewNote() {
        this.props.dispatch(actions.addNewNote());
    }

    render() {
        return (
            <div className="stackr-main">
                <Note />
                <Notes/>
                <Button onClick={this.addNewNote.bind(this)} name="+"/>
            </div>
        );
    }
}


function mapper(state) {
    return {};
}

export default connect(mapper)(Stackr);