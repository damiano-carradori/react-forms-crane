import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { kebab_case } from '../utils';
import { FormContext } from '../Form'

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.elemRef = createRef();
    }

    componentDidMount() {
        const { name } = this.props;
        const { onMount } = this.context;

        onMount({
            name,
            type: 'checkbox',
            ref: this.elemRef.current,
        });
    }

    render() {
        const {
            label,
            name,
            defaultChecked,
            checked,
            defaultValue,
            value,
            disabled,
            autoFocus,
            required,
        } = this.props;

        const { onChange } = this.context;
        const id = `checkbox_${name}_${kebab_case(label)}`;
        return (
            <div>
                <input
                    ref={this.elemRef}
                    type="checkbox"
                    name={name}
                    id={id}
                    onChange={onChange}

                    autoFocus={autoFocus}
                    required={required}
                    disabled={disabled}
                    defaultChecked={defaultChecked || checked}
                    defaultValue={defaultValue || value || id}
                />
                {label && <label htmlFor={id}>{label}</label>}
            </div>
        );
    }
}

Checkbox.contextType = FormContext;

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.number,
    maxLength: PropTypes.number,
    autoFocus: PropTypes.bool,
    required: PropTypes.bool,
};

Checkbox.defaultProps = {
    label: '',
};

export default Checkbox