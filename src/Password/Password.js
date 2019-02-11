import React, { useContext, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { FormContext } from '../Form'

function Password({
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
                  }) {

    const { onMount, onChange } = useContext(FormContext);

    const elemRef = useRef();

    useEffect(() => {
        if (elemRef.current !== undefined) {
            onMount({
                name,
                type: 'password',
                ref: elemRef.current,
            });
        }
    }, [elemRef]);

    return (
        <div>
            <input
                ref={elemRef}
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
    autoComplete: 'on',
};

export default Password