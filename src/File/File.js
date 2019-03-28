import React, { useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FormContext } from "../Form";

function File({
    name,
    label,
    accept,
    multiple,
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
                type: "file",
                ref: elemRef.current,
            });
        }
    }, [elemRef]);

    const id = `file_${name}`;
    return (
        <div>
            <input
                ref={elemRef}
                type="file"
                id={id}
                onChange={onChange}
                name={name}
                accept={accept}
                multiple={multiple}
                disabled={disabled}
                autoFocus={autoFocus}
                required={required}
            />
            {label && <label htmlFor={id}>{label}</label>}
        </div>
    );
}

File.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    accept: PropTypes.string,
    multiple: PropTypes.bool,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    required: PropTypes.bool,
};

File.defaultProps = {};

export default File;
