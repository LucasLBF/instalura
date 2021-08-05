import { css } from 'styled-components';
import breakpoints from '../Breakpoints';

export default function breakpointsMedia(cssByBreakpoints) {
  const breakPointNames = Object.keys(breakpoints);
  return breakPointNames
    .filter((breakpoint) => Boolean(cssByBreakpoints[breakpoint]))
    .map(
      (breakpoint) => css`
        @media only screen and (min-width: ${breakpoints[breakpoint]}px) {
          ${cssByBreakpoints[breakpoint]}
        }
      `,
    );
}
