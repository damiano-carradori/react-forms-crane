import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { FormContext } from '../Form'

class Select extends Component {
    constructor(props) {
        super(props);
        this.elemRef = createRef();
    }

    componentDidMount() {
        const { name } = this.props;
        const { onMount } = this.context;

        onMount({
            name,
            type: 'select',
            ref: this.elemRef.current,
        });
    }

    renderOption(option, index) {
        let value, label;
        if ('string' === typeof option) {
            value = option;
            label = option;
        } else {
            value = option.value;
            label = option.label;
        }
        return <option key={index} value={value}>{label}</option>
    }

    render() {
        const {
            name,
            options,
            value,
            multiple,
            autoFocus,
            size,
            required,
            disabled,
        } = this.props;

        const { onChange } = this.context;

        const renderedOptions = options.map(this.renderOption);

        return (
            <select
                ref={this.elemRef}
                onChange={onChange}
                name={name}

                multiple={multiple}
                value={value}
                size={size}
                autoFocus={autoFocus}
                required={required}
                disabled={disabled}
            >
                {renderedOptions}
            </select>
        );
    }
}

Select.contextType = FormContext;

Select.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string,
        }),
    ])),
    value: PropTypes.string,
    multiple: PropTypes.bool,
    autoFocus: PropTypes.bool,
    size: PropTypes.number,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
};

Select.defaultProps = {
    options: [],
};

export default Select