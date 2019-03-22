import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrapper, StyledInput } from "./style";

class Reset extends Component {
    render() {
        const { value, disabled, autoFocus } = this.props;

        return (
            <Wrapper>
                <StyledInput
                    type="reset"
                    value={value}
                    disabled={disabled}
                    autoFocus={autoFocus}
                />
            </Wrapper>
        );
    }
}

Reset.propTypes = {
    value: PropTypes.string,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
};

Reset.defaultProps = {};

export default Reset;
