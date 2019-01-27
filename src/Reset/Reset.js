import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Reset extends Component {
    render() {
        const {
            value,
            disabled,
            autoFocus,
        } = this.props;

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
}

Reset.propTypes = {
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
};

Reset.defaultProps = {};

export default Reset