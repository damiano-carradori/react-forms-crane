import React, { useContext, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { kebab_case } from '../utils';
import { FormContext } from '../Form'

function RadioButton({
                         label,
                         name,
                         defaultChecked,
                         checked,
                         defaultValue,
                         value,
                         disabled,
                         autoFocus,
                         required,
                     }) {

    const { onMount, onChange } = useContext(FormContext);

    const elemRef = useRef();

    useEffect(() => {
        if (elemRef.current !== undefined) {
            onMount({
                name,
                type: 'radio',
                ref: elemRef.current,
            });
        }
    }, [elemRef]);

    const id = `radio_${name}_${kebab_case(label)}`;
    return (
        <div>
            <input
                ref={elemRef}
                type="radio"
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

RadioButton.contextType = FormContext;

RadioButton.propTypes = {
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.number,
    maxLength: PropTypes.number,
    autoFocus: PropTypes.bool,
    pattern: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
};

RadioButton.defaultProps = {};

export default RadioButton