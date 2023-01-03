import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
>header{
  width: 100%;
  height: 144px;
  background: ${({theme})=> theme.COLORS.BACKGROUND_900};
  display: flex;
  align-items: center;
  padding: 0 124px;
  

  a{
    text-decoration: none;
    color: ${({theme})=> theme.COLORS.PINK};
    
  }
  svg{
    color: ${({theme})=> theme.COLORS.PINK};
    font-size: 14px;
    margin-right: 8px;
  }
}
 
`

export const Form = styled.form`
    width: 344px;
   margin: 0 auto ;
    
   >div:nth-child(4){
    margin-top: 24px;
   }
   >div:nth-child(5){
    margin-bottom: 24px;
   }
  
`

export const Avatar = styled.div`
   position: relative;
   margin: -99px auto 32px;
   width: 186px;
   height: 186px;
  
   >img{
    width: 186px;
    height: 186px;
    border-radius: 50%;
   }
   > label{
    width: 48px;
    height: 48px;
    background-color: ${({theme})=> theme.COLORS.PINK};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;
     input{
        display: none;
    }
    svg{
      width: 20px;
      height: 20px;
      color: ${({theme})=> theme.COLORS.BACKGROUND_900};
    }
   }
  
`