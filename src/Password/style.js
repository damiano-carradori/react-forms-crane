import styled, { css } from "styled-components";
import { transparentize } from "polished";
import { shake } from "../animations";
import { getTextColorForBackground } from "../styleUtils";

const backgroundColor = "#f7f5fa";
const disabledBackgroundColor = "#f5f5f5";
const borderColor = "#00afed";

const disabledHover = css`
    animation: 500ms ${shake} ease-out;
`;

const disabledPlaceholder = css`
    color: currentColor;
`;

export const Wrapper = styled.div`
    display: flex;
`;

export const StyledInput = styled.input`
    display: flex;
    flex-grow: 1;
    font-size: 14px;
    line-height: 2.125;
    border: 1px solid transparent;
    border-radius: 3px;
    padding: 9px 18px;
    margin-bottom: 12px;
    outline: none;
    transition: border-color ease-in-out 250ms;

    background-color: ${({ disabled }) =>
        disabled ? disabledBackgroundColor : backgroundColor};
    color: ${({ disabled }) =>
        disabled
            ? transparentize(
                  0.35,
                  getTextColorForBackground(disabledBackgroundColor)
              )
            : getTextColorForBackground(backgroundColor)};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "initial")};

    &:hover {
        ${({ disabled }) => disabled && disabledHover}
    }

    &::placeholder {
        ${({ disabled }) => disabled && disabledPlaceholder}
    }

    &:focus {
        border-color: ${transparentize(0.3, borderColor)};
    }
`;
