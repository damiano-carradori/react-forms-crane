import styled, { css } from 'styled-components'
import { darken, ellipsis, transparentize } from 'polished'
import { shake } from '../animations'
import { getTextColorForBackground } from '../styleUtils';

const backgroundColor = '#504eff';
const disabledBackgroundColor = '#e8e8e8';

const shadows = {
    base: '0 2px 3px 0 rgba(0,0,0,.2), 0 4px 7px 1px rgba(0,0,0,.08)',
    hover: '0 4px 5px 0 rgba(0,0,0,.2), 0 4px 7px 3px rgba(0,0,0,.08)',
    click: '0 2px 4px 0 rgba(0,0,0,.4)',
};

const normalHover = css`
  box-shadow: ${shadows.hover};
  background-color: ${darken(0.15, backgroundColor)};
`;

const disabledHover = css`
  animation: 500ms ${shake} ease-out;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const StyledInput = styled.input`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
  text-transform: capitalize;
  border: none;
  border-radius: 3px;
  padding: 9px 24px 10px;
  margin-bottom: 12px;
  outline: none;
  transition: box-shadow ease-in-out 200ms, background-color linear 250ms;

  background-color: ${({ disabled }) => disabled ? disabledBackgroundColor : backgroundColor};
  color: ${({ disabled }) => disabled ?
    transparentize(0.35, getTextColorForBackground(disabledBackgroundColor)) :
    getTextColorForBackground(backgroundColor)
    };
  cursor:  ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  box-shadow: ${({ disabled }) => disabled ? 'none' : shadows.base};
              
  ${ellipsis()}
  
  &:hover{
    ${({ disabled }) => disabled ? disabledHover : normalHover}
  }
  
  &:active {
    box-shadow: ${shadows.click};
    background-color: ${darken(0.2, backgroundColor)};
  }
`;
