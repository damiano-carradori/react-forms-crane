import React, { useState, useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FormContext } from "../FormContext";
import {
    Wrapper,
    HiddenInput,
    StyledInput,
    InputButton,
    InputPlaceholder,
} from "./style";

function File({
    name,
    label,
    accept,
    multiple,
    disabled,
    autoFocus,
    required,
}) {
    const [files, setFiles] = useState(null);

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

    const onFileChange = e => {
        setFiles(e.target.files);
        onChange(e);
    };

    const buttonText = label || "Choose a file";

    const hasFile = files && files.length;

    const placeholderText = hasFile
        ? files.length > 1
            ? `${files.length} files chosen`
            : files[0].name
        : "No file chosen";

    const id = `file_${name}`;

    return (
        <Wrapper>
            <HiddenInput
                ref={elemRef}
                type="file"
                id={id}
                onChange={onFileChange}
                name={name}
                accept={accept}
                multiple={multiple}
                disabled={disabled}
                autoFocus={autoFocus}
                required={required}
            />
            <StyledInput htmlFor={id} disabled={disabled}>
                <InputButton disabled={disabled}>{buttonText}</InputButton>
                <InputPlaceholder>{placeholderText}</InputPlaceholder>
            </StyledInput>
        </Wrapper>
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
