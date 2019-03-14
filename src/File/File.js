import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, HiddenInput, StyledInput, InputButton, InputPlaceholder } from './style'
import { FormContext } from '../Form'

class File extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: null,
        };
        this.onFileChange = this.onFileChange.bind(this);
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

    onFileChange(e) {
        const { onChange } = this.context;
        this.setState({ files: e.target.files });
        onChange(e);
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
        const { files } = this.state;

        const buttonText = label || 'Choose a file';

        const hasFile = files && files.length;
        const placeholderText = hasFile ?
            files.length > 1 ? `${files.length} files chosen` : files[0].name :
            'No file chosen';

        const id = `file_${name}`;
        return (
            <Wrapper>
                <HiddenInput
                    ref={this.elemRef}
                    type="file"
                    id={id}
                    onChange={this.onFileChange}

                    name={name}
                    accept={accept}
                    multiple={multiple}
                    disabled={disabled}
                    autoFocus={autoFocus}
                    required={required}
                />
                <StyledInput htmlFor={id} disabled={disabled}>
                    <InputButton disabled={disabled}>{buttonText}</InputButton>
                    <InputPlaceholder>{placeholderText}</InputPlaceholder>
                </StyledInput>
            </Wrapper>
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