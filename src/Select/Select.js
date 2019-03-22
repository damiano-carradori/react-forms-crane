import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { FormContext } from '../Form'
import { HiddenSelect, OptionsWrapper, SelectPlaceholder, StyledOption, StyledSelect, Wrapper } from './style';
import { filterObjectKeys } from '../utils';

class Select extends Component {
    constructor(props) {
        super(props);
        this.elemRef = createRef();
        this.state = {
            open: false,
            selected: {},
        };

        this.toggleOptions = this.toggleOptions.bind(this);
        this.selectOption = this.selectOption.bind(this);
        this.renderStyledOption = this.renderStyledOption.bind(this);
    }

    componentDidMount() {
        const { name } = this.props;
        const { onMount } = this.context;

        onMount({
            name,
            type: 'select',
            ref: this.elemRef.current,
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { selected } = this.state;

        if (this.props.multiple) {
            const optionsToSelect = Object.values(selected);
            [...this.elemRef.current.options]
                .map(o => o.value)
                .map((option, i) => {
                    this.elemRef.current.options[i].selected = optionsToSelect.includes(option);
                });
        } else {
            this.elemRef.current.value = selected.value;

        }
        const event = document.createEvent('HTMLEvents');
        event.initEvent('change', true, false);
        this.elemRef.current.dispatchEvent(event);
    }

    toggleOptions() {
        const { disabled } = this.props;
        if (!disabled) {
            this.setState(({ open }) => ({ open: !open }))
        }
    }

    selectOption(option) {
        const { multiple } = this.props;
        let value, label;
        if ('string' === typeof option) {
            value = option;
            label = option;
        } else {
            value = option.value;
            label = option.label;
        }

        if (multiple) {
            this.setState(({ selected }) => {
                if (selected[label]) {
                    return {
                        selected: filterObjectKeys(selected, key => key !== label),
                    }
                }
                return {
                    selected: {
                        ...selected,
                        [label]: value,
                    },
                }
            })
        } else {
            this.setState({ selected: { value, label }, open: false });
        }
    }

    renderOption(option, index) {
        let value, label;
        if ('string' === typeof option) {
            value = option;
            label = option;
        } else {
            value = option.value;
            label = option.label;
        }
        return <option key={index} value={value}>{label}</option>
    }

    renderStyledOption(option, index) {
        const { multiple } = this.props;
        const { selected } = this.state;
        let value, label;
        if ('string' === typeof option) {
            value = option;
            label = option;
        } else {
            value = option.value;
            label = option.label;
        }
        return (
            <StyledOption
                key={index}
                onClick={() => this.selectOption(option)}
                multiple={multiple}
                selected={
                    multiple ?
                        selected[label] :
                        selected.value === value

                }
            >
                {label}
            </StyledOption>
        );
    }

    render() {
        const {
            name,
            options,
            value,
            multiple,
            autoFocus,
            size,
            required,
            disabled,
        } = this.props;
        const { open, selected } = this.state;

        const { onChange } = this.context;

        const renderedOptions = options.map(this.renderOption);
        const styledOptions = options.map(this.renderStyledOption);
        const placeholder = multiple ?
            Object.keys(selected).join(', ') || 'Select...' :
            (selected && selected.label) || 'Select...';

        return (
            <Wrapper>
                <HiddenSelect
                    ref={this.elemRef}
                    onChange={onChange}
                    name={name}

                    multiple={multiple}
                    value={value}
                    size={size}
                    autoFocus={autoFocus}
                    required={required}
                    disabled={disabled}
                >
                    {renderedOptions}
                </HiddenSelect>
                <StyledSelect>
                    <SelectPlaceholder
                        disabled={disabled}
                        onClick={this.toggleOptions}
                    >
                        {placeholder}
                    </SelectPlaceholder>
                    <CSSTransition
                        in={!disabled && open}
                        timeout={300}
                        classNames="select-options"
                        mountOnEnter
                        unmountOnExit
                    >
                        <OptionsWrapper>
                            {styledOptions}
                        </OptionsWrapper>
                    </CSSTransition>
                </StyledSelect>
            </Wrapper>
        );
    }
}

Select.contextType = FormContext;

Select.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string,
        }),
    ])),
    value: PropTypes.string,
    multiple: PropTypes.bool,
    autoFocus: PropTypes.bool,
    size: PropTypes.number,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
};

Select.defaultProps = {
    options: [],
};

export default Select