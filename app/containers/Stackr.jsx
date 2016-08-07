import React from 'react';
import {connect} from 'react-redux';
import  Note from './NewNote';
import Notes from './Notes';
import * as actions from '../actions/note';

import '../styles/stackr.scss';

class Stackr extends React.Component {


    addNewNote() {
        this.props.dispatch(actions.addNewNote());
    }

    render() {
        return (
            <div className="stackr-main">
                <Notes/>
                <span className="stackr-placeholder">stackr</span>
                <Note />
                </div>
        );
    }
}


function mapper(state) {
    return {};  
}

export default connect(mapper)(Stackr);