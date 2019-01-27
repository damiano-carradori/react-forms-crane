import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { FormContext } from '../Form'

class TextArea extends Component {
    constructor(props) {
        super(props);
        this.elemRef = createRef();
    }

    componentDidMount() {
        const { name } = this.props;
        const { onMount } = this.context;

        onMount({
            name,
            type: 'textarea',
            ref: this.elemRef.current,
        });
    }

    render() {
        const {
            name,
            cols,
            rows,
            defaultValue,
            value,
            readOnly,
            wrap,
            disabled,
            maxLength,
            autoFocus,
            placeholder,
            required,
        } = this.props;

        const { onChange } = this.context;
        return (
            <div>
                <textarea
                    ref={this.elemRef}
                    onChange={onChange}

                    cols={cols}
                    rows={rows}
                    wrap={wrap}
                    name={name}
                    defaultValue={defaultValue || value}
                    readOnly={readOnly}
                    disabled={disabled}
                    maxLength={maxLength}
                    autoFocus={autoFocus}
                    placeholder={placeholder}
                    required={required}
                />
            </div>
        );
    }
}

TextArea.contextType = FormContext;

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    cols: PropTypes.number,
    rows: PropTypes.number,
    wrap: PropTypes.oneOf(['soft', 'hard']),
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    maxLength: PropTypes.number,
    autoFocus: PropTypes.bool,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
};

TextArea.defaultProps = {};

export default TextArea