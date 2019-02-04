import React from 'react'
import PropTypes from 'prop-types'

function Button({
                    name,
                    value,
                    disabled,
                    autoFocus,
                    onClick,
                }) {

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

Button.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {};

export default Button