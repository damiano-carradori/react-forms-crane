import styled, { css } from 'styled-components';
import { transparentize } from 'polished'
import { getTextColorForBackground } from '../styleUtils';
import { shake } from '../animations';

const backgroundColor = '#fff';
const radioColor = '#504eff';
const disabledRadioColor = 'rgba(0,0,0,0.35)';

const disabledHover = css`
  animation: 500ms ${shake} ease-out;
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

export const HiddenInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  z-index: -1;
`;

export const StyledInput = styled.label`
  display: flex;
  align-items: center;
  
  cursor:  ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  
  &:hover{
    ${({ disabled }) => disabled && disabledHover}
  }
`;

export const StyledCheckbox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 3px;
  flex-shrink: 0;
  transition: border ease-in-out 200ms;
  border: 12px solid ${backgroundColor};
  background-color: ${({ disabled }) => disabled ? disabledRadioColor : radioColor};
  box-shadow: 0 0 0 1px ${({ disabled }) => disabled ? disabledRadioColor : radioColor};
  
  ${HiddenInput}:checked + ${StyledInput} & {
    border-width: 6px;
  }
`;

export const InputLabel = styled.div`
  line-height: 1.5;
  padding: 9px 15px;
  transition: border-color ease-in-out 250ms;
  
  color: ${({ disabled }) => disabled ?
    transparentize(0.35, getTextColorForBackground(backgroundColor)) :
    getTextColorForBackground(backgroundColor)};
`;
