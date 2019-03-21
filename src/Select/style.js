import styled, { css } from 'styled-components';
import { transparentize, ellipsis } from 'polished'
import { getTextColorForBackground } from '../styleUtils';
import { shake } from '../animations';

const buttonBackgroundColor = '#fff';
const backgroundColor = '#f7f5fa';
const disabledBackgroundColor = '#f5f5f5';
const borderColor = '#00afed';
const selectedColor = '#504eff';

const disabledHover = css`
  animation: 500ms ${shake} ease-out;
`;

const unselectedOptionHover = css`
  &:hover{
    background-color: rgba(0,0,0,.03);
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const HiddenSelect = styled.select`
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`;

export const StyledSelect = styled.div`
  width: 100%;
  position: relative;
  font-size: 14px;
`;

export const SelectPlaceholder = styled.div`
  width: 100%;
  padding: 9px 18px;
  background-color: ${({ disabled }) => disabled ? disabledBackgroundColor : backgroundColor};
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 3px;
  color: ${({ disabled }) => disabled ?
    transparentize(0.35, getTextColorForBackground(disabledBackgroundColor)) :
    getTextColorForBackground(backgroundColor)};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  
  &:hover{
    ${({ disabled }) => disabled && disabledHover}
  }
  
  ${ellipsis()}
`;

export const OptionsWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  overflow: auto;
  border-radius: 3px;
  padding: 6px 0;
  background-color: ${({ disabled }) => disabled ? disabledBackgroundColor : backgroundColor};
  z-index: 2;
  
  transition:
    opacity 300ms ease-in-out,
    transform 300ms ease-in-out;
  top: 48px;
  opacity: 1;
  max-height: 180px;
  
  box-shadow: 0 2px 3px 0 rgba(0,0,0,.2), 0 4px 7px 1px rgba(0,0,0,.08);
  
  &.select-options-enter{
    opacity: 0;
    transform: translateY(-1em);
  }
  &.select-options-enter-active{
    opacity: 1;
    transform: translateY(0);
  }
  &.select-options-enter-done{}
  &.select-options-exit{
    opacity: 1;
    transform: translateY(0);
  }
  &.select-options-exit-active{
    opacity: 0;
    transform: translateY(-1em);
  }
  &.select-options-exit-done{}
  
`;

export const StyledOption = styled.div`
  padding: 9px 18px;
  color: ${({ disabled }) => disabled ?
    transparentize(0.35, getTextColorForBackground(disabledBackgroundColor)) :
    getTextColorForBackground(backgroundColor)};
  
  background-color: ${({ selected }) => selected && transparentize(0.92, selectedColor)};
  cursor: ${({ multiple, selected }) => !multiple && selected ? 'initial' : 'pointer'};
  
  ${({ selected }) => !selected && unselectedOptionHover};
 
`;

export const OptionsSeparator = styled.div`
    margin: 3px 6px;
    height: 1px;
    background-color: rgba(0,0,0,.1);
`;
