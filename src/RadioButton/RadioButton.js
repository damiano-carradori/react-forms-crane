import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import { kebab_case } from "../utils";
import { FormContext } from "../Form";
import { HiddenInput, StyledInput, StyledRadio, InputLabel } from "./style";

class RadioButton extends Component {
    constructor(props) {
        super(props);
        this.elemRef = createRef();
    }

    componentDidMount() {
        const { name } = this.props;
        const { onMount } = this.context;

        onMount({
            name,
            type: "radio",
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
        const id = `radio_${name}_${kebab_case(label)}`;
        return (
            <div>
                <HiddenInput
                    ref={this.elemRef}
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
            </div>
        );
    }
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

export default RadioButton;
