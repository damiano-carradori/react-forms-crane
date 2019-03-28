import React, { useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { kebab_case } from "../utils";
import { FormContext } from "../Form";

function Checkbox({
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
                type: "checkbox",
                ref: elemRef.current,
            });
        }
    }, [elemRef]);

    const id = `checkbox_${name}_${kebab_case(label)}`;

    return (
        <div>
            <input
                ref={elemRef}
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

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.number,
    maxLength: PropTypes.number,
    autoFocus: PropTypes.bool,
    required: PropTypes.bool,
};

Checkbox.defaultProps = {};

export default Checkbox;
