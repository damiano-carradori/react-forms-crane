import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { FormContext } from '../Form'

class File extends Component {
    constructor(props) {
        super(props);
        this.elemRef = createRef();
    }

    componentDidMount() {
        const { name } = this.props;
        const { onMount } = this.context;

        onMount({
            name,
            type: 'file',
            ref: this.elemRef.current,
        });
    }

    render() {
        const {
            name,
            label,
            accept,
            multiple,
            disabled,
            autoFocus,
            required,
        } = this.props;

        const { onChange } = this.context;
        const id = `file_${name}`;
        return (
            <div>
                <input
                    ref={this.elemRef}
                    type="file"
                    id={id}
                    onChange={onChange}

                    name={name}
                    accept={accept}
                    multiple={multiple}
                    disabled={disabled}
                    autoFocus={autoFocus}
                    required={required}
                />
                {label && <label htmlFor={id}>{label}</label>}
            </div>
        );
    }
}

File.contextType = FormContext;

File.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    accept: PropTypes.string,
    multiple: PropTypes.bool,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    required: PropTypes.bool,
};

File.defaultProps = {};

export default File