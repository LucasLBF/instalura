import styled from 'styled-components';
import propToStyle from '../../theme/utils/propToStyle';

export default styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('flexWrap')}
  ${propToStyle('justifyContent')}
  ${propToStyle('justifySelf')}
  ${propToStyle('width')}
  ${propToStyle('max-width')}
  ${propToStyle('padding')}
  ${propToStyle('boxShadow')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
`;
