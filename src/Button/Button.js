import React from "react";
import PropTypes from "prop-types";
import { Wrapper, StyledInput } from "./style";

function Button({ value, disabled, onClick }) {
    return (
        <Wrapper>
            <StyledInput
                type="button"
                onClick={onClick}
                value={value}
                disabled={disabled}
            />
        </Wrapper>
    );
}

Button.propTypes = {
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {};

export default Button;
