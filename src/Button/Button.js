import React from "react";
import PropTypes from "prop-types";

function Button({ value, disabled, autoFocus, onClick }) {
    return (
        <div>
            <input
                type="button"
                onClick={onClick}
                value={value}
                disabled={disabled}
                autoFocus={autoFocus}
            />
        </div>
    );
}

Button.propTypes = {
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {};

export default Button;
