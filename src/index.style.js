import styled from 'styled-components';
import media from 'styled-media-query';
import { lighten } from 'polished';

export const CustomButton = styled.button`
  outline: none;
  background: rosybrown;
  font-size: 20px;
  padding: 10px 20px;
  margin: 10px;
  ${media.lessThan('medium')`
    background: ${lighten(0.2, 'red')};
  `}
`;

export default CustomButton;
