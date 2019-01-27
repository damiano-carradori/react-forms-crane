import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
    render() {
        const {
            name,
            value,
            disabled,
            autoFocus,
            onClick,
        } = this.props;

        return (
            <div>
                <input
                    type="button"
                    onClick={onClick}

                    name={name}
                    value={value}
                    disabled={disabled}
                    autoFocus={autoFocus}
                />
            </div>
        );
    }
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
};

export default Button