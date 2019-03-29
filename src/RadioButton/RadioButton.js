import React, { useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { kebab_case } from "../utils";
import { FormContext } from "../FormContext";
import {
    Wrapper,
    HiddenInput,
    StyledInput,
    StyledRadio,
    InputLabel,
} from "./style";

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
                type: "radio",
                ref: elemRef.current,
            });
        }
    }, [elemRef]);

    const id = `radio_${name}_${kebab_case(label)}`;
    return (
        <Wrapper>
            <HiddenInput
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
            <StyledInput htmlFor={id} disabled={disabled}>
                <StyledRadio disabled={disabled} />
                <InputLabel disabled={disabled}>{label}</InputLabel>
            </StyledInput>
        </Wrapper>
    );
}

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

export default RadioButton;
