import styled, { css } from "styled-components";
import { transparentize, ellipsis } from "polished";
import { getTextColorForBackground } from "../styleUtils";
import { shake } from "../animations";

const buttonBackgroundColor = "#fff";
const backgroundColor = "#f7f5fa";
const disabledBackgroundColor = "#f5f5f5";
const borderColor = "#00afed";

const disabledHover = css`
    animation: 500ms ${shake} ease-out;
`;

export const Wrapper = styled.div`
    display: flex;
`;

export const HiddenInput = styled.input`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
`;

export const StyledInput = styled.label`
    display: flex;
    flex-grow: 1;
    font-size: 14px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

    ${HiddenInput}:focus + &,
    ${HiddenInput}.hasFocus + & {
        border-color: ${transparentize(0.3, borderColor)};
    }

    &:hover {
        ${({ disabled }) => disabled && disabledHover}
    }
`;

export const InputButton = styled.div`
    flex-shrink: 0;
    line-height: 1.5;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px 0 0 3px;
    padding: 9px 24px;
    font-weight: 500;
    transition: border-color ease-in-out 250ms;
    background-color: ${({ disabled }) =>
        disabled ? buttonBackgroundColor : buttonBackgroundColor};
    color: ${({ disabled }) =>
        disabled
            ? transparentize(
                  0.35,
                  getTextColorForBackground(disabledBackgroundColor)
              )
            : getTextColorForBackground(buttonBackgroundColor)};
`;

export const InputPlaceholder = styled.div`
    flex-grow: 1;
    line-height: 1.5;
    border: 1px solid transparent;
    border-radius: 0 3px 3px 0;
    padding: 9px 15px;
    transition: border-color ease-in-out 250ms;
    background-color: ${({ disabled }) =>
        disabled ? disabledBackgroundColor : backgroundColor};
    color: ${transparentize(
        0.35,
        getTextColorForBackground(disabledBackgroundColor)
    )};

    ${ellipsis()}
`;
