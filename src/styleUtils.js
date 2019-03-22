import { getLuminance } from "polished";

const whiteText = "rgba(255, 255, 255, .9)";
const blackText = "rgba(0, 0, 0, .7)";

export const getTextColorForBackground = background =>
    1 / getLuminance(background) >= 4.5 ? whiteText : blackText;
