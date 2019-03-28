import React from "react";
import PropTypes from "prop-types";

function Reset({ value, disabled, autoFocus }) {
    return (
        <div>
            <input
                type="reset"
                value={value}
                disabled={disabled}
                autoFocus={autoFocus}
            />
        </div>
    );
}

Reset.propTypes = {
    value: PropTypes.string,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
};

Reset.defaultProps = {};

export default Reset;
