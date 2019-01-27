import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Reset extends Component {
    render() {
        const {
            disabled,
            autoFocus,
        } = this.props;

        return (
            <div>
                <input
                    type="reset"

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