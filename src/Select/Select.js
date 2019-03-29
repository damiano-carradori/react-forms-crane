import React, { useState, useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { FormContext } from "../FormContext";
import {
    HiddenSelect,
    OptionsWrapper,
    SelectPlaceholder,
    StyledOption,
    StyledSelect,
    Wrapper,
} from "./style";
import { filterObjectKeys } from "../utils";

function Select({
    name,
    options,
    value,
    multiple,
    autoFocus,
    size,
    required,
    disabled,
}) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState({});

    const { onMount, onChange } = useContext(FormContext);

    const elemRef = useRef();

    useEffect(() => {
        if (elemRef.current !== undefined) {
            onMount({
                name,
                type: "select",
                ref: elemRef.current,
            });
        }
    }, [elemRef]);

    useEffect(() => {
        if (multiple) {
            const optionsToSelect = Object.values(selected);
            [...elemRef.current.options]
                .map(o => o.value)
                .map((option, i) => {
                    elemRef.current.options[
                        i
                    ].selected = optionsToSelect.includes(option);
                });
        } else {
            elemRef.current.value = selected.value;
        }
        const event = document.createEvent("HTMLEvents");
        event.initEvent("change", true, false);
        elemRef.current.dispatchEvent(event);
    }, [selected]);

    const toggleOptions = () => {
        if (!disabled) {
            setOpen(!open);
        }
    };

    const selectOption = option => {
        let value, label;
        if ("string" === typeof option) {
            value = option;
            label = option;
        } else {
            value = option.value;
            label = option.label;
        }

        if (multiple) {
            if (selected[label]) {
                setSelected(filterObjectKeys(selected, key => key !== label));
            } else {
                setSelected({
                    ...selected,
                    [label]: value,
                });
            }
        } else {
            setSelected({ value, label });
            setOpen(false);
        }
    };

    const renderOption = (option, index) => {
        let value, label;
        if ("string" === typeof option) {
            value = option;
            label = option;
        } else {
            value = option.value;
            label = option.label;
        }
        return (
            <option key={index} value={value}>
                {label}
            </option>
        );
    };

    const renderStyledOption = (option, index) => {
        let value, label;
        if ("string" === typeof option) {
            value = option;
            label = option;
        } else {
            value = option.value;
            label = option.label;
        }
        return (
            <StyledOption
                key={index}
                onClick={() => selectOption(option)}
                multiple={multiple}
                selected={multiple ? selected[label] : selected.value === value}
            >
                {label}
            </StyledOption>
        );
    };

    const renderedOptions = options.map(renderOption);
    const styledOptions = options.map(renderStyledOption);

    const placeholder = multiple
        ? Object.keys(selected).join(", ") || "Select..."
        : (selected && selected.label) || "Select...";

    return (
        <Wrapper>
            <HiddenSelect
                ref={elemRef}
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
                <SelectPlaceholder disabled={disabled} onClick={toggleOptions}>
                    {placeholder}
                </SelectPlaceholder>
                <CSSTransition
                    in={!disabled && open}
                    timeout={300}
                    classNames="select-options"
                    mountOnEnter
                    unmountOnExit
                >
                    <OptionsWrapper>{styledOptions}</OptionsWrapper>
                </CSSTransition>
            </StyledSelect>
        </Wrapper>
    );
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                value: PropTypes.string,
                label: PropTypes.string,
            }),
        ])
    ),
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

export default Select;
