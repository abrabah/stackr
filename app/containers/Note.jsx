import React from 'react';
import {connect} from 'react-redux';
import Button from '../components/Button';
import *  as actions from '../actions/note';


class Note extends React.Component {


    remove() {
        this.props.dispatch(actions.removeNote(this.props.note));
    }

    postpone() {

    }

    render() {
        return (
            <div>
                <p>{this.props.note.value}</p>
                <Button name="Postpone" onClick={this.postpone.bind(this)}/>
                <Button name="Remove" onClick={this.remove.bind(this)}/>
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
