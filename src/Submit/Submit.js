import React from "react";
import PropTypes from "prop-types";
import { Wrapper, StyledInput } from "./style";

function Submit({ value, disabled, autoFocus }) {
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

Submit.propTypes = {
    value: PropTypes.string,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
};

Submit.defaultProps = {};

export default Submit;
