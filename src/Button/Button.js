import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrapper, StyledInput } from "./style";

class Button extends Component {
    render() {
        const { value, disabled, onClick } = this.props;

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
}

Button.propTypes = {
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {};

export default Button;
