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
  h2{
    margin-top: 30px;
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

  section{
    display: flex;
    
    margin: 0 auto;
    
    gap: 100px;
    margin-bottom: 40px;
    >button{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 500px;
      height: 56px;
    }

    >button:nth-child(1){
      background: #0D0C0F;
      color: ${({theme})=> theme.COLORS.PINK};
    }
  }
  

 
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