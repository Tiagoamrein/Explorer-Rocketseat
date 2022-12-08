import styled from "styled-components";

export const Container= styled.div`
width: 100%;
height: 100vh;


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
  >h1{
    margin-top: 24px;
    font-weight: 500;
    font-size: 28px;
    margin: 40px 123px;
  }

  main{
    margin: 40px 123px;
    grid-area: content;
    overflow-y: auto;
  }
  .inputs{
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    margin-bottom: 40px;
    
  }
.tags{
  display:flex;
  gap: 40px;
  flex-wrap: wrap;
  border-radius: 10px;
}

`

export const Input= styled.input`
  display: flex;
  
  padding: 18px 16px;
  width: 504.5px;
  
  height: 55px;
  border: none;
  border-radius:10px;
  background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
  color: ${({theme})=> theme.COLORS.GRAY_300};

`