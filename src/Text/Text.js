import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormContext } from '../Form'

class Text extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { name } = this.props;
        const { onMount } = this.context;

        onMount({
            name,
            type: 'text',
        });
    }

    render() {
        const {
            name,
            defaultValue,
            readOnly,
            disabled,
            size,
            maxLength,
            autoComplete,
            autoFocus,
            pattern,
            placeholder,
            required,
        } = this.props;

        const { onChange } = this.context;
        return (
            <input
                type="text"
                onChange={onChange}

                name={name}
                defaultValue={defaultValue}
                readOnly={readOnly}
                disabled={disabled}
                size={size}
                maxLength={maxLength}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                pattern={pattern}
                placeholder={placeholder}
                required={required}
            />
        );
    }
}

Text.contextType = FormContext;

Text.propTypes = {
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.number,
    maxLength: PropTypes.number,
    autoComplete: PropTypes.oneOf(['on', 'off']),
    autoFocus: PropTypes.bool,
    pattern: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
};

Text.defaultProps = {};

export default Text