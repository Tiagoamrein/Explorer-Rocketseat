import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container= styled.div`
  grid-area: header;
  
  display: flex;
  align-items: center;
  width: 100%;

  padding: 24px 123px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
  

  h1{
    margin-right: 64px;
    font-weight: 700;
    font-size: 24px;
    margin-right: 100px;
    color: ${({theme})=> theme.COLORS.PINK};
  }

  input{
    display: flex;
    width: 600px;
    height: 56px;
    
  }
  .profile{
    width: 399px;
    display: flex;
    flex-direction: column;
    margin-left: 44px;
    color: ${({theme})=> theme.COLORS.WHITE};
    
    button{
      color: ${({theme})=> theme.COLORS.GRAY_100};
      border: none;
      background: none;
      text-align: end;
      
    }
    h2{
    display: flex;
    justify-content:end;
    font-size: 16px;
    
    }
  }

  img{
    width: 64px;
    height: 64px;
    border: 1px solid #3E3B47;
    border-radius: 35px;
    margin-left: 9px;
    
  }

`
export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  
  > img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  >div{
    display: flex;
    flex-direction: column;
    line-height: 20px;
    margin-left: 9px;
  }
  span {
    font-size: 14px;
    color: ${({theme})=> theme.COLORS.GRAY_100};
  }
  strong{
    font-size: 18px;
    color: ${({theme})=> theme.COLORS.WHITE};
  }
`