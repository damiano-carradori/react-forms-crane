import React, { useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FormContext } from "../Form";

function Select({
    name,
    options,
    value,
    multiple,
    autoFocus,
    size,
    required,
    disabled,
}) {
    const { onMount, onChange } = useContext(FormContext);

    const elemRef = useRef();

    useEffect(() => {
        if (elemRef.current !== undefined) {
            onMount({
                name,
                type: "select",
                ref: elemRef.current,
            });
        }
    }, [elemRef]);

    const renderedOptions = options.map((option, index) => {
        let value, label;
        if ("string" === typeof option) {
            value = option;
            label = option;
        } else {
            value = option.value;
            label = option.label;
        }
        return (
            <option key={index} value={value}>
                {label}
            </option>
        );
    });

    return (
        <div>
            <select
                ref={elemRef}
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
        </div>
    );
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                value: PropTypes.string,
                label: PropTypes.string,
            }),
        ])
    ),
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

export default Select;
