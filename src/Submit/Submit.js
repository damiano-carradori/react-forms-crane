import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrapper, StyledInput } from "./style";

class Submit extends Component {
    render() {
        const { value, disabled, autoFocus } = this.props;

        return (
            <Wrapper>
                <StyledInput
                    type="submit"
                    value={value}
                    disabled={disabled}
                    autoFocus={autoFocus}
                />
            </Wrapper>
        );
    }
}

Submit.propTypes = {
    value: PropTypes.string,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
};

Submit.defaultProps = {};

export default Submit;
