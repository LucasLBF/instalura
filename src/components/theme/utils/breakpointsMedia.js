import { breakpoints } from "../Breakpoints";
import { css } from "styled-components";

export function breakpointsMedia(cssByBreakpoints) {
  const breakPointNames = Object.keys(breakpoints);
  return breakPointNames
    .filter((breakpoint) => Boolean(cssByBreakpoints[breakpoint]))
    .map(
      (breakpoint) => css`
        @media only screen and (min-width: ${breakpoints[breakpoint]}px) {
          ${cssByBreakpoints[breakpoint]}
        }
      `
    );
}
