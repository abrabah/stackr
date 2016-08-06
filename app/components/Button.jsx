import React from 'react';


class Button extends React.Component {

    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.name}</button>
        );
    }
}

Button.propTypes ={
            name: React.PropTypes.string.isRequired,
            onClick:React.PropTypes.func
};

Button.defaultProps ={
    name: 'Name not set!',
    onClick: () => {}
};


export default Button;