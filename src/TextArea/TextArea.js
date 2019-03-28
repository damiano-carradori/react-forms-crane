import React, { useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FormContext } from "../Form";

function TextArea({
    name,
    cols,
    rows,
    defaultValue,
    value,
    readOnly,
    wrap,
    disabled,
    maxLength,
    autoFocus,
    placeholder,
    required,
}) {
    const { onMount, onChange } = useContext(FormContext);

    const elemRef = useRef();

    useEffect(() => {
        if (elemRef.current !== undefined) {
            onMount({
                name,
                type: "textarea",
                ref: elemRef.current,
            });
        }
    }, [elemRef]);

    return (
        <div>
            <textarea
                ref={elemRef}
                onChange={onChange}
                cols={cols}
                rows={rows}
                wrap={wrap}
                name={name}
                defaultValue={defaultValue || value}
                readOnly={readOnly}
                disabled={disabled}
                maxLength={maxLength}
                autoFocus={autoFocus}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
}

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    cols: PropTypes.number,
    rows: PropTypes.number,
    wrap: PropTypes.oneOf(["soft", "hard"]),
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    maxLength: PropTypes.number,
    autoFocus: PropTypes.bool,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
};

TextArea.defaultProps = {};

export default TextArea;
