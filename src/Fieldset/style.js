import styled from "styled-components";
import { getTextColorForBackground } from "../styleUtils";

const backgroundColor = "#fff";
const borderColor = "#b4b4b4";

export const Wrapper = styled.fieldset`
    border: 1px solid ${borderColor};
    border-radius: 3px;
    margin: 0 0 12px;
    padding: 12px 9px;

    & > *:last-child {
        margin-bottom: -12px;
    }
`;

export const Legend = styled.legend`
    font-size: 14px;
    padding: 0 6px;
    color: ${getTextColorForBackground(backgroundColor)};
`;
