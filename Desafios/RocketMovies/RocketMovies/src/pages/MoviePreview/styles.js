import styled from "styled-components";

export const Container= styled.div`
  .Link { 
    font-size: 16px;
    display: flex;
    align-items: center;
    margin: 40px 123px;
    color: ${({theme})=> theme.COLORS.PINK};
  svg{
    margin-right: 8px;
    color: ${({theme})=> theme.COLORS.PINK};
  }}

`