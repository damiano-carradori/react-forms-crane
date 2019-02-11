import React from 'react'
import PropTypes from 'prop-types'

function Submit({
                    value,
                    disabled,
                    autoFocus,
                }) {
    return (
        <div>
            <input
                type="submit"

                value={value}
                disabled={disabled}
                autoFocus={autoFocus}
            />
        </div>
    );
}

Submit.propTypes = {
    value: PropTypes.string,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
};

Submit.defaultProps = {};

export default Submit