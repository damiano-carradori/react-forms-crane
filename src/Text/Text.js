import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import { Wrapper, StyledInput } from "./style";
import { FormContext } from "../FormContext";

class Text extends Component {
    constructor(props) {
        super(props);
        this.elemRef = createRef();
    }

    componentDidMount() {
        const { name } = this.props;
        const { onMount } = this.context;

        onMount({
            name,
            type: "text",
            ref: this.elemRef.current,
        });
    }

    render() {
        const {
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
        } = this.props;

        const { onChange } = this.context;
        return (
            <Wrapper>
                <StyledInput
                    ref={this.elemRef}
                    type="text"
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
            </Wrapper>
        );
    }
}

Text.contextType = FormContext;

Text.propTypes = {
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.number,
    maxLength: PropTypes.number,
    autoComplete: PropTypes.oneOf(["on", "off"]),
    autoFocus: PropTypes.bool,
    pattern: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
};

Text.defaultProps = {};

export default Text;
