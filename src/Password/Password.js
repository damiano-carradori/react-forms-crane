import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { FormContext } from '../Form'

class Password extends Component {
    constructor(props) {
        super(props);
        this.elemRef = createRef();
    }

    componentDidMount() {
        const { name } = this.props;
        const { onMount } = this.context;

        onMount({
            name,
            type: 'password',
            ref: this.elemRef.current,
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
            <div>
                <input
                    ref={this.elemRef}
                    type="password"
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
            </div>
        );
    }
}

Password.contextType = FormContext;

Password.propTypes = {
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

Password.defaultProps = {
    autoComplete: 'on'
};

export default Password