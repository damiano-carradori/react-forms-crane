import { keyframes } from "styled-components";

export const shake = keyframes`
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  16.67%,
  50%,
  83.33% {
    -webkit-transform: translate3d(-6px, 0, 0);
    transform: translate3d(-6px, 0, 0);
  }

  33%,
  66.67% {
    -webkit-transform: translate3d(6px, 0, 0);
    transform: translate3d(6px, 0, 0);
  }
`;
