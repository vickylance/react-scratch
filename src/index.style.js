import styled from "styled-components";
import media from "styled-media-query";

export const Button = styled.button`
  outline: none;
  background: rosybrown;
  font-size: 20px;
  padding: 10px 20px;
  margin: 10px;
  ${media.lessThan("medium")`
    background: red;
  `}
`;
