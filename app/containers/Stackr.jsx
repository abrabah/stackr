import React from 'react';
import {connect} from 'react-redux';
import  Note from '../containers/Note';
import Button from '../components/Button';

class Stackr extends React.Component {

    render() {
        return (
            <div>
                <Note />
                <Button name="Add new Note"/>

            </div>
        );
    }
}


function mapper(state) {
    return {};
}

export default connect(mapper)(Stackr);