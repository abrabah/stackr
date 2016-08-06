import React from 'react';
import {connect} from 'react-redux';
import Button from '../components/Button';

class Note extends React.Component {

    render() {
        return (
            <div>
                <textarea name="note" cols="30" rows="10"></textarea>
                <Button name="Create"/><Button name="Cancel"/>
            </div>

        )
    }
}


function mapper(state) {
    return {node: state.note};
}

export default connect(mapper)(Note);
