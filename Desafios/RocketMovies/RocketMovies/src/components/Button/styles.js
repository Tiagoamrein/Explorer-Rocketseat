import styled from "styled-components";

export const Container= styled.button`
width: 100%;
padding: 16px 134px;
border: none;
font-size: 16px;
border-radius: 10px;

color: ${({theme})=> theme.COLORS.BACKGROUND_800};

background-color: ${({theme})=> theme.COLORS.PINK};
`