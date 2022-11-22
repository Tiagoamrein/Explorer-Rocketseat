import styled from "styled-components";

export const Container = styled.button`
  background: none;
  font-size: 16px;
  border: none;
  color: ${({theme, isActive}) => isActive ?  theme.COLORS.ORANGE :theme.COLORS.GRAY_100 };

`