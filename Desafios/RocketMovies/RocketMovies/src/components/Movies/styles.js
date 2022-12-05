import styled from "styled-components";

export const Container= styled.div`
  width: 67rem;
  height: 222.85px;
  
  margin: 40px 122px;
  padding: 25px;
  border-radius: 16px;
  gap: 24px;  
  text-align: justify;
  
  background-color:${({ theme }) => theme.COLORS.BACKGROUND_800};
  p{
    margin: 14px 3px;
  }



`