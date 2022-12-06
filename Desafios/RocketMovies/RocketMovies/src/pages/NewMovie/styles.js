import styled from "styled-components";

export const Container= styled.div`
width: 100%;
height: 100vh;

 .Link { 
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: ${({theme})=> theme.COLORS.PINK};
  svg{
    margin-right: 8px;
    color: ${({theme})=> theme.COLORS.PINK};
  }}
  >h1{
    margin-top: 24px;
    font-weight: 500;
    font-size: 28px;
  }
  .inputs{
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    margin: 40px 126px 40px 0px;
    
  }

`

export const Input= styled.input`
  display: flex;
  
  padding: 18px 16px;
  width: 536.5px;
  height: 55px;
  border: none;
  border-radius:10px;
  background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
  color: ${({theme})=> theme.COLORS.GRAY_300};

`