import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Submit extends Component {
    render() {
        const {
            value,
            disabled,
            autoFocus,
        } = this.props;

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
}

Submit.propTypes = {
    value: PropTypes.string,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
};

Submit.defaultProps = {};

export default Submit