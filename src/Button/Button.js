import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
    render() {
        const {
            value,
            disabled,
            onClick,
        } = this.props;

        return (
            <div>
                <input
                    type="button"
                    onClick={onClick}

                    value={value}
                    disabled={disabled}
                />
            </div>
        );
    }
}

Button.propTypes = {
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
};

export default Button