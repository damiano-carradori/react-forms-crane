import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Wrapper, Legend } from "./style";

class Fieldset extends PureComponent {
    render() {
        const { children, legend } = this.props;
        return (
            <Wrapper>
                {legend && <Legend>{legend}</Legend>}
                {children}
            </Wrapper>
        );
    }
}

Fieldset.propTypes = {
    legend: PropTypes.string,
};

Fieldset.defaultProps = {};

export default Fieldset;
