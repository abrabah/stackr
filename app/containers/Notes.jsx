import React from 'react';
import {connect} from 'react-redux';
import Note from './Note';

class Notes extends React.Component {


    render() {
        const notes = this.props.notes
            .map((note, index) => {
                return (<Note key={index} note={note}/>);
            });

        return (
            <div>
                {notes}
            </div>
        );
    }
}

function mapper(state) {
    return {notes: state.notes};
}

export default connect(mapper)(Notes);