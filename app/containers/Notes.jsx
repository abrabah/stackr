import React from 'react';
import {connect} from 'react-redux';
import Note from './Note';


import '../styles/notes.scss';

class Notes extends React.Component {


    render() {
        const notes = this.props.notes.slice(0, 5)
            .map((note, index) => {
                return (<Note key={index} note={note}/>);
            });
//TODO display placeholder if notes are empty
        return (
            <div className="notes">
                {notes}
            </div>
        );
    }
}

function mapper(state) {
    return {notes: state.notes};
}

export default connect(mapper)(Notes);