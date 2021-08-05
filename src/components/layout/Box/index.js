import styled from 'styled-components';
import propToStyle from '../../theme/utils/propToStyle';

export default styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('flexWrap')}
  ${propToStyle('justifyContent')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
`;
