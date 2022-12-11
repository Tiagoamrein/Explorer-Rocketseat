import styled from "styled-components";

export const Container= styled.div`
    width: 100%;
    height: 100vh;
    margin-bottom: 100px;

  .Link { 
    font-size: 16px;
    display: flex;
    align-items: center;
    margin: 40px 123px;
    color: ${({theme})=> theme.COLORS.PINK};
  svg{
    margin-right: 8px;
    color: ${({theme})=> theme.COLORS.PINK};
  }
}

  header{

    display: flex;
    align-items: center;
    gap: 19px;
    margin: 10px 123px;
    
    svg{
      font-size: 30px;
    }

    >h1{
      font-weight: 500;
      font-size: 36px;
      line-height: 47px;
      
    }}

  .subtitle{

    display: flex;
    align-items: center;
    gap: 8px;

  >img{
      width: 20px;
      height: 20px;
      border-radius: 30px;
      margin-left: 126px;
    }

    svg{
      
      color: ${({theme})=> theme.COLORS.PINK};
    }
    
  }

  main{
    margin: 40px 123px;
    text-align: justify;

    p{
      
      line-height: 21px;
      margin-top: 40px; 
    }
  }

`